import { createContext, useState } from 'react'

const CartInfoContext = createContext([])

export default CartInfoContext

export const CartInfoContextProvider = function ({ children }) {
  let initCart = {
    cartProducts: [],
    totalItem: 0,
    totalPrice: 0,
    totalAmount: 0,
  }
  if (localStorage.getItem('cartItem')) {
    initCart = JSON.parse(localStorage.getItem('cartItem'))
  } else {
    initCart = {
      cartProducts: [],
      totalItem: 0,
      totalPrice: 0,
      totalAmount: 0,
    }
  }
  const [cartItem, setCartItem] = useState(initCart)

  return (
    <CartInfoContext.Provider value={{ cartItem, setCartItem }}>
      {children}
    </CartInfoContext.Provider>
  )
}
