import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import ModalConfirm from '../../components/ModalConfirm'
import ModalNotification from '../../components/ModalNotification'

import CartInfoContext from '../contexts/CartInfoContext'
import './../styles/EmptyCartBtn.scss'
import TrashCanIcon from './../../dotown/pizza.png'

function EmptyCartBtn({ onClick }) {
  const navigate = useNavigate()

  // modal
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [headerMg, setHeaderMg] = useState('')
  const [bodyMg, setBodyMg] = useState('')

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

  const closeModal = () => {
    setIsOpen1(false)
  }

  // 購物車
  const { cartItem, setCartItem, handleEmptyCart, checkCartempty } =
    useContext(CartInfoContext)

  return (
    <>
      <div
        className="y-empty-cart-border"
        onClick={() => {
          openModalConfirm()
          setHeaderMg('購物車')
          setBodyMg('確定要清空購物車嗎？')
        }}
      >
        <div className="y-empty-cart-icon">
          <i className="fa-solid fa-trash-can"></i>
          {/* <img src={TrashCanIcon} alt="trash can icon" /> */}
        </div>
        <p className="y-empty-cart">清空購物車</p>
      </div>
      <ModalConfirm
        closeModalConfirm={closeModalConfirm}
        closeModalCancel={closeModalCancel}
        isOpen={isOpen2}
        NotificationHeader={headerMg}
        NotificationBody={bodyMg}
      />
      <ModalNotification
        closeModal={closeModal}
        isOpen={isOpen1}
        NotificationHeader={headerMg}
        NotificationBody={bodyMg}
      />
    </>
  )
}

export default EmptyCartBtn
