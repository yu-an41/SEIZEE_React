import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { imgReactUrl, imgNodeUrl } from './../../my-config'

import './../styles/RecipePost.scss'
//import RecipePic from './../../dotown/toast.png'

function RecipePost({ recipeInfo }) {
  const { sid, member_sid, title, img, induction, mb_name } = recipeInfo

  return (
    <div className="y-recipe-card-container">
      <Link
        to={`/forum/cook/inner${recipeInfo.sid}`}
        style={{ textDecoration: 'none' }}
      >
        <div className="y-recipe-top">
          <div className="y-recipe-author">
            <p className="y-recipe-author-name">{mb_name}</p>
            <p className="y-recipe-author-account">{`@member_${member_sid}`}</p>
          </div>
          <div className="y-recipe-title">
            <p>{title}</p>
          </div>
        </div>
        <div className="y-recipe-text">
          <p>{induction}</p>
        </div>
        <div className="y-recipe-pic">
          <img
            src={`${imgNodeUrl}/images/02-forum/cook/${img}`}
            alt="recipe banner"
          />
        </div>
      </Link>
    </div>
  )
}

export default RecipePost
