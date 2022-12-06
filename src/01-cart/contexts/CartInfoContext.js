import React, { useState, useContext, createContext, useEffect } from 'react'
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import { set } from 'ramda'

import ModalConfirm from '../../components/ModalConfirm'
import ModalNotification from '../../components/ModalNotification'

const CartInfoContext = createContext([])

export default CartInfoContext

export const CartInfoContextProvider = function ({ children }) {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  // 購物車結構
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

  // Modal

  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)

  const [headerMg, setHeaderMg] = useState('')
  const [bodyMg, setBodyMg] = useState('')

  // 通知
  const openModalNotification = () => {
    setIsOpen1(true)
    setIsOpen2(false)
  }
  const closeModalNotification = () => {
    setIsOpen1(false)
    // console.log(pathname)
    if (pathname === '/cart' && emptyCart) {
      // useEffect = () => {
      // setTimeout(
      document.location.href = `http://localhost:3000/`
      // , 2000)
      // }
    } else {
      return
    }
  }

  // 確認選項
  const closeModalConfirm = () => {
    setIsOpen2(false)
    handleEmptyCart()
  }
  const openModalConfirm = () => {
    setIsOpen2(true)
  }
  const closeModalCancel = () => {
    setIsOpen2(false)
    // navigate('/')
  }

  // 加入購物車（只拿product.sid跟數量，其他去後台找資料）
  // 需要加入庫存判斷！！！
  const handleAddCart = async (shopSid, prodSid, prodQty) => {
    prodSid = +prodSid
    prodQty = +prodQty
    shopSid = +shopSid

    // 確認商品是否已在購物車中
    let index = cartItem.userCart.findIndex((e) => e.prod_sid === prodSid)

    // 購物車找不到該商品（購物車可能為空）
    if (index === -1) {
      // 確認店家是否為同一家（或是空車）才將商品加入購物車

      // console.log(cartItem.userCart[0]?.shop_sid)
      console.log(+shopSid)
      // console.log(+cartItem.userCart[0].shop_sid === shopSid)

      // 購物車不為空（找得到第一個商品的shop_sid）
      if (!!cartItem.userCart[0]?.shop_sid) {
        // 判斷是否為同一家的商品（第一個商品的shop_sid=現在點擊商品的商店sid）
        if (+cartItem.userCart[0].shop_sid === shopSid) {
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
              if (emptyCart) setEmptyCart(false)

              openModalNotification()
              setHeaderMg('購物車')
              setBodyMg('商品成功加入購物車！')
            } else {
              // alert(
              //   `已達本產品購買上限：${prodInfo.inventory}，請重新修改數量！`
              // )
              openModalNotification()
              setHeaderMg('購物車')
              setBodyMg(
                `已達本產品購買上限：${prodInfo.inventory}，請重新修改數量！`
              )
            }
          } catch (err) {
            console.log(err.message)
          }
        }
        // 不同家->發出撞車警告
        else {
          // alert(`撞車了，購物已有其他店家商品！要去瞧瞧嗎？`)
          openModalConfirm()
          setHeaderMg('購物車')
          setBodyMg(`購物已有其他店家商品！要清空現有購物車嗎？`)
        }
      }
      // 購物車是空的話直接加入購物車
      else {
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
            if (emptyCart) setEmptyCart(false)

            openModalNotification()
            setHeaderMg('購物車')
            setBodyMg('商品成功加入購物車！')
          } else {
            openModalNotification()
            setHeaderMg('購物車')
            setBodyMg(
              `已達本產品購買上限：${prodInfo.inventory}，請重新修改數量！`
            )
          }
        } catch (err) {
          console.log(err.message)
        }
      }
    }

    // 找到的話直接改數量金額
    else {
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
      if (emptyCart) setEmptyCart(false)

      openModalNotification()
      setHeaderMg('購物車')
      setBodyMg(`已更新本商品數量！`)
    }
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

    openModalNotification()
    setHeaderMg('購物車')
    setBodyMg(`已更新本商品數量！`)
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
      if (emptyCart) setEmptyCart(false)

      openModalNotification()
      setHeaderMg('購物車')
      setBodyMg(`已刪除商品！`)
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

    openModalNotification()
    setHeaderMg('購物車')
    setBodyMg('戰士，您的購物車是空的！')
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
      handleEmptyCart()
    } else {
      setEmptyCart(false)
      navigate('/cart')
    }
    return emptyCart
  }

  // 購物車收藏商品
  const handleCartSave = (mbSid, prodSid) => {
    prodSid = +prodSid
    mbSid = +mbSid
    console.log('商品加入收藏清單')
    // try {
    //   const { mbSid, prodSid } = await axios.post(
    //     `http://localhost:3004/cart/add-save`
    //   )

    //   // console.log(res.data)
    //   // const prodInfo = res.data.prod_info_rows[0]
    //   // console.log(prodInfo)
    // } catch (error) {
    //   console.log(error.message)
    // }

    openModalNotification()
    setHeaderMg('購物車')
    setBodyMg(`商品加入收藏清單！`)
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
        handleCartSave,
      }}
    >
      {children}
      {/* Modal */}
      <ModalNotification
        closeModal={closeModalNotification}
        isOpen={isOpen1}
        NotificationHeader={headerMg}
        NotificationBody={bodyMg}
      />
      <ModalConfirm
        closeModalConfirm={closeModalConfirm}
        closeModalCancel={closeModalCancel}
        isOpen={isOpen2}
        NotificationHeader={headerMg}
        NotificationBody={bodyMg}
      />
    </CartInfoContext.Provider>
  )
}
