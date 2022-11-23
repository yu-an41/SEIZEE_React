import { useState, useEffect } from 'react'
import { PRODUCT } from '../my-config'
import axios from 'axios'
import ProductCard from './components/ProductCard'
import HeadWave from '../components/HeadWave'
import YellowWave2 from './components/YellowWave2'

function ProductList() {
  const [allProduct, setAllProduct] = useState([])
  const [errorMessage, setErrorMessage] = useState([])

  // const location = useLocation()
  // console.log(location)

  async function getProductCard() {
    try { 
      const response = await axios.get(
        'http://localhost:3002/product?shop_list_sid=3'
      )
      console.log(response)
      const Pdata = response.data
      setAllProduct(Pdata)}
    catch(e) {
      console.error(e.message)
      setErrorMessage(e.message)
    }
  }
  useEffect(() => {
    getProductCard()
  }, [])

    return (

      <ProductCard allProduct={allProduct}
        style={{display: 'flex' }}
      />
    )
    }

export default ProductList
