import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

import './../styles/RecipePost.scss'

import RecipePic from './../../dotown/toast.png'

function RecipePost({ recipeInfo }) {
  const { sid, member_sid, categories_sid, title, img, content, mb_name } =
    recipeInfo
  return (
    <div className="y-recipe-card-container">
      <Link
        to={`/forum/cook/inner${recipeInfo.sid}`}
        style={{ textDecoration: 'none' }}
      >
        <div className="y-recipe-top">
          <div className="y-recipe-author">
            <p className="y-recipe-author-name">{recipeInfo.mb_name}</p>
            <p className="y-recipe-author-account">{recipeInfo.sid}</p>
          </div>
          <div className="y-recipe-title">
            <p>{title}</p>
          </div>
        </div>
        <div className="y-recipe-text">
          <p>{content}</p>
        </div>
        <div className="y-recipe-pic">
          <img src={RecipePic} alt="recipe banner" />
        </div>
      </Link>
    </div>
  )
}

export default RecipePost
