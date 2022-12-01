import { useState, useContext, createContext } from 'react'

const CartInfoContext = createContext([])

export default CartInfoContext

export const CartInfoContextProvider = function ({ children }) {
  let initCart = {
    userCart: [],
    totalItem: 0,
    totalPrice: 0,
    totalAmount: 0,
  }

  if (localStorage.getItem('cartItem')) {
    initCart = JSON.parse(localStorage.getItem('cartItem'))
  } else {
    initCart = {
      userCart: [],
      totalItem: 0,
      totalPrice: 0,
      totalAmount: 0,
    }
  }

  const [cartItem, setCartItem] = useState(initCart)

  // 加入購物車
  const handleAddCart = async (prodInfo, prodQty) => {
    // console.log(prodInfo)

    // 確認商品是否已在購物車中
    let index = cartItem.userCart.findIndex((e) => e.sid === prodInfo.id)

    console.log(index)

    if (index === -1) {
      const products = await {
        ...cartItem,
        userCart: [
          ...cartItem.userCart,
          {
            sid: prodInfo.id,
            price: prodInfo.price,
            name: prodInfo.name,
            picture: prodInfo.picture,
            amount: prodQty,
            inventory: prodInfo.inventory,

            // shop_sid: prodInfo.shop_list_sid,
            // prod_sid: prodInfo.sid,
            // name: prodInfo.name,
            // price: Math.round((prodInfo.unit_price * prodInfo.sale_price) / 10),
            // img: prodInfo.picture_url,
            // amount: prodQty,
          },
        ],
        totalItem: cartItem.totalItem + 1,
        totalPrice: cartItem.totalPrice + prodInfo.price * prodQty,
        totalAmount: cartItem.totalAmount + prodQty,
      }

      localStorage.setItem('cartItem', JSON.stringify({ ...products }))
      console.log({ products })
      setCartItem(products)
    } else {
      cartItem.userCart[index] = {
        ...cartItem.userCart[index],
        amount: cartItem.userCart[index].amount + prodQty,
      }

      const newProductState = {
        ...cartItem,
        userCart: cartItem.userCart,
        totalPrice: cartItem.totalPrice + prodInfo.price * prodQty,
        totalAmount: cartItem.totalAmount + prodQty,
      }

      localStorage.setItem('cartItem', JSON.stringify(newProductState))
      console.log({ newProductState })
      setCartItem(newProductState)
    }
  }

  // 購物車數量-1
  const handleReduce = async (prodInfo) => {
    // console.log(prodInfo)

    let index = cartItem.userCart.findIndex((e) => e.sid === prodInfo.id)

    if (index === -1) {
      alert('錯誤，無此商品')
      return
    }
    if (cartItem.userCart[index].amount > 1) {
      cartItem.userCart[index] = {
        ...cartItem.userCart[index],
        amount:
          cartItem.userCart[index].amount > 0
            ? cartItem.userCart[index].amount - 1
            : cartItem.userCart[index].amount,
      }
      const newProductState = {
        ...cartItem,
        userCart: cartItem.userCart,
        totalPrice: cartItem.totalPrice - prodInfo.price,
        totalAmount:
          cartItem.totalAmount > 0
            ? cartItem.totalAmount - 1
            : cartItem.totalAmount,
      }
      localStorage.setItem('cartItem', JSON.stringify(newProductState))
      console.log({ newProductState })
      setCartItem(newProductState)
    } else if (cartItem.userCart[index].amount === 1) {
      const userCartItems1 = cartItem.userCart.slice(0, index)
      // console.log(userCartItems1);
      const userCartItems2 = cartItem.userCart.slice(index + 1)
      // console.log(userCartItems2);
      const productItems = userCartItems1.concat(userCartItems2)
      // console.log(productItems);

      const newProductItems = {
        ...cartItem,
        userCart: [...productItems],
        totalPrice: cartItem.totalPrice - prodInfo.price,
        totalAmount: cartItem.totalAmount - 1,
      }
      localStorage.setItem('cartItem', JSON.stringify(newProductItems))
      // console.log({ newProductItems });
      setCartItem(newProductItems)
    }
  }

  // 清空購物車
  const handleEmptyCart = () => {
    setCartItem({
      userCart: [],
      totalItem: 0,
      totalPrice: 0,
      totalAmount: 0,
    })
    localStorage.removeItem('cartItem')
  }

  return (
    <CartInfoContext.Provider
      value={{
        cartItem,
        setCartItem,
        handleAddCart,
        handleReduce,
        handleEmptyCart,
      }}
    >
      {children}
    </CartInfoContext.Provider>
  )
}
