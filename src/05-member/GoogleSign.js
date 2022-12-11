import axios from 'axios'
import React, { useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { GOOGLE_AUTH } from '../my-config'
import AuthContext from '../contexts/AuthContext'

function GoogleSign() {
  const location = useLocation()
  const { setMyAuth } = useContext(AuthContext)
  const usp = new URLSearchParams(location.search)
  // const usp_code = usp.get('code')

  async function GoogleAuth() {
    console.log('search:', location.search)

    if (usp.get('code')) {
      const { data } = await axios.get(GOOGLE_AUTH + `?` + usp.toString())

      console.log(data)

      if (data && data.success) {
        console.log('Google Auth: true')

        localStorage.setItem('auth', JSON.stringify(data.auth))
        setMyAuth({ ...data.auth, authorised: true })
      } else {
        console.log('Google Auth: false')

        localStorage.removeItem('auth')
      }
    }
  }

  useEffect(() => {
    GoogleAuth()
  }, [])

  return <></>
}

export default GoogleSign
