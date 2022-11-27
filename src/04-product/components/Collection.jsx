import { useState, useEffect, useContext } from "react";
import { useParams, useLocation } from 'react-router-dom'
import axios from 'axios'

function Collection() {
    const [collection, setCollection] = useState([])
    const member_sid = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')).member_sid : '尚未登入'

    const getCollection = async() => {
      if (member_sid === '尚未登入') {
      console.log('未登入！無法加入收藏');
      return;
      }
      const response = await axios.get(`http://localhost:3002/product/collection?member_sid=${member_sid}`)
      //   console.log(response);
      const collectData = response.data.collection_rows
      const collect = collection.map((collection, i) => {
          return {p_sid: collection.food_produt_sid, m_sid: collection.member_sid, collect:true}
      })
      
    setCollection(collectData)
    console.log(collectData);
    }

    useEffect(() => { 
        getCollection()
    },[])

    const addCollect = async(food_produt_sid) => {
        if (member_sid === '尚未登入') {
            console.log('未登入！無法加入收藏');
            return;
    }

    const response = await axios.get(`http://localhost:3002/product/add?food_produt_sid=${food_produt_sid}&member_sid=${member_sid}`)

    const newCollect = [
      ...Collection,
      {p_sid: food_produt_sid, m_sid: member_sid, collect:true},
    ]
    
    setCollection(newCollect)
    // setCollect(true)
    }
}

export default Collection
