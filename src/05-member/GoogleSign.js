import axios from 'axios'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { GOOGLE_AUTH } from '../my-config'

function GoogleSign() {
  const location = useLocation()
  const usp = new URLSearchParams(location.search)
  // const usp_code = usp.get('code')

  async function GoogleAuth() {
    const { data } = await axios.get(GOOGLE_AUTH + `?` + usp.toString())
    console.log(data)
  }
  useEffect(() => {
    GoogleAuth()
  }, [])
  return <></>
}

export default GoogleSign
