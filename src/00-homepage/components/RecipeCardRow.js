import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './../styles/RecipeCardRow.scss'

import RecipePost from './RecipePost'
import RecipeHead from './../images/homepage-forum-recipe.svg'

function RecipeCardRow({ postNums }) {
  const [recipeCardData, setRecipeCardData] = useState([
    {
      sid: 1,
      member_sid: 1,
      categories_sid: 3,
      title: '',
      img: '',
      content: '',
      mb_name: '',
    },
  ])

  const getRecipeCardRow = async () => {
    try {
      const res = await axios.get(`http://localhost:3004/home/recipe-posts`)

      setRecipeCardData(res.data.recipePostRows)
      console.log(res.data.recipePostRows)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getRecipeCardRow()
  }, [])

  const min = Math.min(postNums, recipeCardData.length)
  return (
    <div className="y-recipe-card-row">
      <div className="y-forum-head y-recipe-head">
        <img src={RecipeHead} alt="recipe posts" />
        <p>美味寶典</p>
      </div>
      <div className="y-forum-card-wrap y-recipe-card-wrap">
        {Array(min)
          .fill(1)
          .map((v, i) => {
            const item = recipeCardData[i]
            return <RecipePost recipeInfo={item} key={item.sid} />
          })}
      </div>
    </div>
  )
}

export default RecipeCardRow
