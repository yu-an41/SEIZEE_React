import React, { useState, useEffect, useRef, useContext } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import CartInfoContext from '../contexts/CartInfoContext'
import AuthContext from '../../contexts/AuthContext'

import CartNavBar from '../components/CartNavBar'
import YellowWave from '../../00-homepage/components/YellowWave'
import YellowWaveLight from '../../00-homepage/components/YellowWaveLight'
import NewsCrawl from '../../00-homepage/components/NewsCrawl'
import Footer from '../../components/Footer'

import './../styles/TapPay.scss'

function TapPay() {
  const navigate = useNavigate()
  const { cartItem, setCartItem } = useContext(CartInfoContext)
  const { myAuth } = useContext(AuthContext)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [searchParams] = useSearchParams()
  // const id = searchParams.get('id')

  const cardNumber = useRef(null)
  const cardExpirationDate = useRef(null)
  const ccv = useRef(null)

  const paymentSetUp = () => {
    getTPDirect().then((TPDirect) => {
      console.log(TPDirect)
      TPDirect.setupSDK(
        126731,
        'app_hAm9bvjoYZIeXqoD930BQ9pZ2MNdHeDG5TCJvoVG74yHfDvzulVX1TGae3Qj',
        'sandbox'
      )
      TPDirect.card.setup({
        // Display ccv field
        fields: {
          number: {
            // css selector
            element: cardNumber.current,
            placeholder: '**** **** **** ****',
          },
          expirationDate: {
            // DOM object
            element: cardExpirationDate.current,
            placeholder: 'MM / YY',
          },
          ccv: {
            element: ccv.current,
            placeholder: 'ccv',
          },
        },
        styles: {
          // Style all elements
          input: {
            color: 'gray',
          },
          // Styling ccv field
          'input.cardCcv': {
            // 'font-size': '16px'
          },
          // Styling expiration-date field
          'input.cardExpirationDate': {
            // 'font-size': '16px'
          },
          // Styling card-number field
          'input.cardNumber': {
            // 'font-size': '16px'
          },
          // style focus state
          ':focus': {
            // 'color': 'black'
          },
          // style valid state
          '.valid': {
            color: 'green',
          },
          // style invalid state
          '.invalid': {
            color: 'red',
          },
          // Media queries
          // Note that these apply to the iframe, not the root window.
          '@media screen and (max-width: 400px)': {
            input: {
              color: 'orange',
            },
          },
        },
        // 此設定會顯示卡號輸入正確後，會顯示前六後四碼信用卡卡號
        isMaskCreditCardNumber: true,
        maskCreditCardNumberRange: {
          beginIndex: 6,
          endIndex: 11,
        },
      })
    })
  }

  const onSubmit = () => {
    getTPDirect().then((TPDirect) => {
      console.log('onSubmit')
      setError('')

      if (!myAuth.mb_sid) {
        return setError('請登入')
      }

      const tappayStatus = TPDirect.card.getTappayFieldsStatus()

      if (tappayStatus.canGetPrime === false) {
        return setError('信用卡資料有誤')
      }

      if (myAuth.authorise) {
        setError('請先登入，畫面即將跳轉至登入頁')
        setTimeout(() => {
          navigate('/login')
        }, 3000)
        return
      }

      TPDirect.card.getPrime(async (result) => {
        if (result?.status !== 0) {
          return setError('交易失敗')
        }
        // console.log(result.card.prime);

        const data = {
          prime: result.card.prime,
          order: {
            shipping: 'delivery',
            payment: 'credit_card',
            // subtotal: product.price * counter,
            freight: 20,
            // total: product.price * counter + 20,
            recipient: {
              // name: name,
              // phone: phone,
              // email: email,
              // address: address,
              // time: time,
            },
            list: [
              {
                // id: product.id,
                // name: product.title,
                // price: product.price,
                // color: {
                //   code: selectedColor.code,
                //   name: selectedColor.name,
                // },
                // size: selectedSize,
                // qty: counter,
              },
            ],
          },
        }
        // console.log("data", data);

        const headers = {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        }

        axios
          .post('https://claudia-teng.com/api/1.0/order/checkout', data, {
            headers: headers,
          })
          .then((response) => {
            setSuccess('購買成功！')
            navigate('/thankyou', { replace: true })
          })
          .catch((error) => {
            setError('購買失敗！')
          })
      })
    })

    return (
      <>
        <div className="y-tappay-container">
          <div className="y-tappay-nav-bg">
            <CartNavBar />
            <div className="y-Cart-wave-base"></div>
            <YellowWave />
          </div>
          <div className="y-tappay-form-wrap">
            <form className="y-tappay-form">
              <div id="cardview-container"></div>
              <label
                htmlFor="cardNumber"
                onClick={() => {
                  document.querySelector('#cardNumber').innerText =
                    '4242 4242 4242 4242'
                }}
              >
                卡號
              </label>
              <div id="cardNumber" className="tpfield" ref={cardNumber}></div>
              {/* <small>(可填入： 4242 4242 4242 4242)</small> */}

              <label htmlFor="cardExpirationDate">卡片到期日</label>
              <div
                id="cardExpirationDate"
                className="tpfield"
                ref={cardExpirationDate}
              ></div>
              {/* <small>(可填入： 01/23)</small> */}

              <label htmlFor="cardCcv">後三碼</label>
              <div id="cardCcv" className="tpfield" ref={ccv}></div>
              {/* <small>(可填入： 123)</small> */}

              <button type="button" id="submit" onClick={onSubmit}>
                送出
              </button>
            </form>
          </div>
          <div className="y-tappay-bottom">
            <div className="y-tappay-bottom-wave">
              {/* <YellowWaveLight /> */}
              {/* <NewsCrawl /> */}
            </div>
            <div className="y-tappay-footer">
              <Footer />
            </div>
          </div>
        </div>
      </>
    )
  }

  useEffect(() => {
    paymentSetUp()
  }, [])
}

export default TapPay

export function getTPDirect() {
  return new Promise((resolve, reject) => {
    if (typeof window.TPDirect !== 'undefined') {
      return resolve(window.TPDirect)
    } else {
      const script = window.document.createElement('script')
      script.src = 'https://js.tappaysdk.com/sdk/tpdirect/v5.14.0'
      script.async = true
      script.onload = () => {
        if (typeof window.TPDirect !== 'undefined') {
          resolve(window.TPDirect)
        } else {
          reject(new Error('failed to load TapPay sdk'))
        }
      }
      script.onerror = reject
      window.document.body.appendChild(script)
    }
  })
}
