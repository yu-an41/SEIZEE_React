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
    console.log(prodInfo)

    // 確認商品是否已在購物車中
    let index = cartItem.userCart.findIndex((e) => e.sid === prodInfo.sid)

    console.log(index)

    if (index === -1) {
      const products = await {
        ...cartItem,
        userCart: [
          ...cartItem.userCart,
          {
            sid: prodInfo.sid,
            price: prodInfo.price,
            name: prodInfo.name,
            picture: prodInfo.picture,
            amount: prodQty,

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
      // console.log({ products })
      setCartItem(products)
    } else {
      cartItem.userCart[index] = {
        ...cartItem.userCart[index],
        prodQty: cartItem.userCart[index].prodQty + prodQty,
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

  return (
    <CartInfoContext.Provider
      value={{
        cartItem,
        setCartItem,
        handleAddCart,
      }}
    >
      {children}
    </CartInfoContext.Provider>
  )
}
