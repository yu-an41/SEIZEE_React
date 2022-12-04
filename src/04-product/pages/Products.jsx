import React,{useEffect,useState} from 'react'
import axios from 'axios';

const Products = () => {
    
    const [products, setProducts] = useState([])
    const [curFilters, setCurFilteres] = useState(['fiftyPercentOff'])
    

    useEffect(()=>{
        const categories = new URLSearchParams(window.location.search).get("categories")
        async function getFilter() {
            try {
              const response = await axios.get(
                ` http://localhost:3004/product/category?category_sid=${categories}`
              );
              // console.log(data);
              const categoryData = response.data.category_rows;
              console.log("initial",categoryData)
              setProducts(categoryData)
            } catch (e) {
              console.error(e.message);
            }
          }
          getFilter()
    },[])

    const showProducts = products.filter((p)=>{

        const booleanArr = []

        if(curFilters.includes('fiftyPercentOff')){
            booleanArr.push(p.sale_price<=5)
        }

        if(curFilters.includes('qtyEnough')){
            booleanArr.push(p.qty<=3)
        }

        if(curFilters.includes('underHundred')){
            booleanArr.push(p.product_price<100)
        }

        if(curFilters.includes('underFifty')){
            booleanArr.push(p.product_price<50)
        }

        if(curFilters.includes('highestRate')){
            booleanArr.push(p.rating === 5)
        }

        return booleanArr.every(boo=>boo === true)
    })

    const filterOptions = {
        fiftyPercentOff:'5折以下',
        qtyEnough:'庫存告急',
        underHundred:'100元以下',
        underFifty:'50元以下',
        highestRate:'評分5顆星'
    }
    
  return (
    <div>
      Products
    </div>
  )
}

export default Products
