import axios from 'axios'
import React, { useState } from 'react'

function ProductComment({setDoRender,doRender}) {
    const [comment, setComment] = useState({
        food_product_sid: 1,
        member_sid:1,
        product_comment	:'',
        created_at: new Date(),
    })

    const addComment = async () => {
        const fd = new FormData()
        fd.append('content', comment.product_comment)
        const {Cdata} = await axios.post('http://localhost:3002/product/comment', fd)
        console.log(Cdata);
        if (Cdata.success) {
            alert('留言成功')
            setDoRender(!doRender)
        }
     }

  return (
    <>
    <div>
       留言區
       <input
        type='text'
        naem='comment'
        placeholder='請輸入留言'
        value={comment.content}
        onChange={(e) => setComment({content: e.target.value})}
      />
    </div>
    <button onClick={addComment}>送出</button>
    </>
  )
}

export default ProductComment
