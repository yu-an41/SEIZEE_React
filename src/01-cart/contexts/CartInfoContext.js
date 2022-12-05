import axios from 'axios'
import { set } from 'ramda'
import React, { useState, useContext, createContext } from 'react'
import { Link, useParams } from 'react-router-dom'

const CartInfoContext = createContext([])

export default CartInfoContext

export const CartInfoContextProvider = function ({ children }) {
  let initCart = {
    userCart: [
      // {
      // shop_sid: '1',
      // prod_sid: 0,
      // unit_price: 0,
      // sale_price: 0,
      // sale: 0,
      // name: '',
      // amount: 0,
      // inventory: 0,
      // picture: '',
      // },
    ],
    totalItem: 0,
    totalUnitPrice: 0,
    totalSalePrice: 0,
    totalAmount: 0,
  }

  if (localStorage.getItem('cartItem')) {
    initCart = JSON.parse(localStorage.getItem('cartItem'))
  }

  const [cartItem, setCartItem] = useState(initCart)

  const [emptyCart, setEmptyCart] = useState(true)

  // 加入購物車（只拿product.sid跟數量，其他去後台找資料）
  // 待加入店家資料做判斷
  const handleAddCart = async (shopSid, prodSid, prodQty) => {
    // console.log(prodInfo)
    prodSid = +prodSid
    prodQty = +prodQty

    // 確認商品是否已在購物車中
    let index = cartItem.userCart.findIndex((e) => e.prod_sid === prodSid)

    if (index === -1) {
      try {
        const res = await axios.get(
          `http://localhost:3004/cart/prod/${prodSid}`
        )
        // console.log(res.data.prod_info_rows)
        const prodInfo = res.data.prod_info_rows[0]
        console.log(prodInfo)

        if (prodInfo.inventory_qty >= prodQty) {
          const products = await {
            ...cartItem,
            userCart: [
              ...cartItem.userCart,
              {
                shop_sid: shopSid,
                prod_sid: prodSid,
                unit_price: prodInfo.unit_price, // 原價
                sale_price: prodInfo.product_price, // 優惠價
                sale: prodInfo.sale_price, // 折數
                name: prodInfo.product_name,
                picture: prodInfo.picture_url,
                amount: prodQty,
                inventory: prodInfo.inventory_qty,
              },
            ],
            totalItem: cartItem.totalItem + 1,
            totalUnitPrice:
              cartItem.totalUnitPrice + prodInfo.unit_price * prodQty,
            totalSalePrice:
              cartItem.totalSalePrice + prodInfo.product_price * prodQty,
            totalAmount: cartItem.totalAmount + prodQty,
          }
          console.log(products.totalSalePrice)
          localStorage.setItem('cartItem', JSON.stringify({ ...products }))
          setCartItem(products)
        } else {
          alert(`已達本產品購買上限：${prodInfo.inventory}，請重新修改數量！`)
        }
      } catch (err) {
        console.log(err.message)
      }
    } else {
      cartItem.userCart[index] = {
        ...cartItem.userCart[index],
        amount: cartItem.userCart[index].amount + prodQty,
      }

      const newProducts = {
        ...cartItem,
        userCart: cartItem.userCart,
        totalUnitPrice:
          cartItem.totalUnitPrice +
          cartItem.userCart[index].unit_price * prodQty,
        totalSalePrice:
          cartItem.totalSalePrice +
          cartItem.userCart[index].sale_price * prodQty,
        totalAmount: cartItem.totalAmount + prodQty,
      }

      localStorage.setItem('cartItem', JSON.stringify(newProducts))
      console.log({ newProducts })
      setCartItem(newProducts)
      console.log('qty updated')
    }
    if (emptyCart) setEmptyCart(false)
  }

  // 改變數量時重新計算小計總計
  const updateItemQty = (pid, amount) => {
    pid = +pid
    amount = +amount

    let { userCart, totalItem, totalUnitPrice, totalSalePrice, totalAmount } =
      cartItem

    let newUserCart = [...userCart]

    newUserCart = newUserCart.map((item) => {
      // console.log(item.prod_sid, pid)
      if (+item.prod_sid === +pid) {
        return { ...item, amount }
      } else {
        return { ...item }
      }
    })

    totalAmount = newUserCart.reduce((a, v) => {
      return a + v.amount
    }, 0)
    totalUnitPrice = newUserCart.reduce((a, v) => {
      return a + v.amount * v.unit_price
    }, 0)
    totalSalePrice = newUserCart.reduce((a, v) => {
      return a + v.amount * v.sale_price
    }, 0)

    setCartItem({
      userCart: newUserCart,
      totalItem,
      totalUnitPrice,
      totalSalePrice,
      totalAmount,
    })

    localStorage.setItem(
      'cartItem',
      JSON.stringify({
        userCart: newUserCart,
        totalItem,
        totalUnitPrice,
        totalSalePrice,
        totalAmount,
      })
    )
    if (emptyCart) setEmptyCart(false)
  }

  // 刪除單項商品
  const handleRemoveItem = (pid) => {
    pid = +pid

    let { userCart, totalItem, totalUnitPrice, totalSalePrice, totalAmount } =
      cartItem

    let newUserCart = [...userCart]

    newUserCart = newUserCart.filter((item) => {
      // console.log(item, item.sid !== pid)
      return +item.prod_sid !== pid
    })
    // console.log(newUserCart)

    totalItem = newUserCart.length

    if (totalItem === 0) {
      handleEmptyCart()
    } else {
      totalAmount = newUserCart.reduce((a, v) => {
        return a + v.amount
      }, 0)
      totalUnitPrice = newUserCart.reduce((a, v) => {
        return v.amount * v.unit_price
      }, 0)
      totalSalePrice = newUserCart.reduce((a, v) => {
        return v.amount * v.sale_price
      }, 0)

      localStorage.setItem(
        'cartItem',
        JSON.stringify({
          userCart: newUserCart,
          totalItem,
          totalUnitPrice,
          totalSalePrice,
          totalAmount,
        })
      )
      setCartItem({
        userCart: newUserCart,
        totalItem,
        totalUnitPrice,
        totalSalePrice,
        totalAmount,
      })
    }
  }

  // 清空購物車
  const handleEmptyCart = () => {
    const emptyCart = {
      userCart: [
        // {
        // shop_sid: '0',
        // prod_sid: 0,
        // unit_price: 0,
        // sale_price: 0,
        // sale: 0,
        // name: '',
        // amount: 0,
        // inventory: 0,
        // picture: '',
        // },
      ],
      totalItem: 0,
      totalUnitPrice: 0,
      totalSalePrice: 0,
      totalAmount: 0,
    }
    // console.log({ emptyCart })
    // localStorage.setItem('cartItem', JSON.stringify(emptyCart))
    localStorage.removeItem('cartItem')
    setEmptyCart(true)
    // setCartItem(emptyCart)
    alert('Your cart is empty!')
    document.location.href = 'http://localhost:3000/'
  }

  // 點icon時確認購物車不為空才跳轉
  const checkCartEmpty = (e) => {
    console.log(localStorage.getItem('cartItem'))
    if (
      !localStorage.getItem('cartItem') ||
      localStorage.getItem('cartItem') ==
        '{"userCart":[],"totalItem":0,"totalUnitPrice":0,"totalSalePrice":0,"totalAmount":0}'
    ) {
      e.preventDefault()
      alert('Your cart is empty!')
      handleEmptyCart()
    } else {
      setEmptyCart(false)
      document.location.href = 'http://localhost:3000/cart'
    }
    return emptyCart
  }

  return (
    <CartInfoContext.Provider
      value={{
        cartItem,
        setCartItem,
        emptyCart,
        setEmptyCart,
        handleAddCart,
        updateItemQty,
        handleRemoveItem,
        handleEmptyCart,
        checkCartEmpty,
      }}
    >
      {children}
    </CartInfoContext.Provider>
  )
}

// 參考用/暫時用不到的hooks
// 加入購物車
// const handleAddCart = async (prodInfo, prodQty) => {
//   // console.log(prodInfo)
//   prodInfo = +prodInfo
//   prodQty = +prodQty
//   // 確認商品是否已在購物車中
//   let index = cartItem.userCart.findIndex((e) => e.sid === prodInfo.id)

//   console.log(index)

//   if (index === -1) {
//     const products = await {
// ...cartItem,
//           userCart: [
//             ...cartItem.userCart,
//             {
//               shop_sid: shopSid,
//               prod_sid: prodSid,
//               unit_price: prodInfo.unit_price, // 原價
//               sale_price: prodInfo.product_price, // 優惠價
//               sale: prodInfo.sale_price, // 折數
//               name: prodInfo.product_name,
//               picture: prodInfo.picture_url,ƒ
//               amount: prodQty,
//               inventory: prodInfo.inventory_qty,
//             },
// ],
// totalUnitPrice:
//   cartItem.totalUnitPrice + prodInfo.unit_price * prodQty,
// totalSalePrice:
//   cartItem.totalSalePrice + prodInfo.sale_price * prodQty,
// totalAmount: cartItem.totalAmount + prodQty,
// }
//     localStorage.setItem('cartItem', JSON.stringify({ ...products }))
//     console.log({ products })
//     setCartItem(products)
//   } else {
//     cartItem.userCart[index] = {
//       ...cartItem.userCart[index],
//       amount: cartItem.userCart[index].amount + prodQty,
//     }

//     const newProductState = {
//       ...cartItem,
//       userCart: cartItem.userCart,
//       totalPrice: cartItem.totalPrice + prodInfo.price * prodQty,
//       totalAmount: cartItem.totalAmount + prodQty,
//     }

//     localStorage.setItem('cartItem', JSON.stringify(newProductState))
//     console.log({ newProductState })
//     setCartItem(newProductState)
//   }
// }

// 購物車數量-1
// const handleReduce = (prodInfo) => {
//   // console.log(prodInfo)

//   let index = cartItem.userCart.findIndex((e) => e.sid === prodInfo.id)

//   if (index === -1) {
//     alert('錯誤，無此商品')
//     return
//   }
//   if (cartItem.userCart[index].amount > 1) {
//     cartItem.userCart[index] = {
//       ...cartItem.userCart[index],
//       amount:
//         cartItem.userCart[index].amount > 0
//           ? cartItem.userCart[index].amount - 1
//           : cartItem.userCart[index].amount,
//     }
//     const newProductState = {
//       ...cartItem,
//       userCart: cartItem.userCart,
//       totalPrice: cartItem.totalPrice - prodInfo.price,
//       totalAmount:
//         cartItem.totalAmount > 0
//           ? cartItem.totalAmount - 1
//           : cartItem.totalAmount,
//     }
//     localStorage.setItem('cartItem', JSON.stringify(newProductState))
//     console.log({ newProductState })
//     setCartItem(newProductState)
//   } else if (cartItem.userCart[index].amount === 1) {
//     const userCartItems1 = cartItem.userCart.slice(0, index)
//     // console.log(userCartItems1);
//     const userCartItems2 = cartItem.userCart.slice(index + 1)
//     // console.log(userCartItems2);
//     const productItems = userCartItems1.concat(userCartItems2)
//     // console.log(productItems);

//     const newProductItems = {
//       ...cartItem,
//       userCart: [...productItems],
//       totalPrice: cartItem.totalPrice - prodInfo.price,
//       totalAmount: cartItem.totalAmount - 1,
//     }
//     localStorage.setItem('cartItem', JSON.stringify(newProductItems))
//     // console.log({ newProductItems });
//     setCartItem(newProductItems)
//   }
// }
