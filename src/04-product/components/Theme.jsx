import React, { useState } from 'react'

function Theme() {
    const [theme, setTheme] = () => {
        setTheme(theme === 'aladdin' ? 'seizee' : 'aladdin')
    }
    const [themeState, setThemeState] = useState(1)
    setThemeState = (themeState === 1 ? 0 : 1)

  return (
    <div>
      <button onClick = {Theme}> 
      {themeState === 1 ? 
      <img src='/04-product/svg/aladdin.png' alt='' /> 
      : 
      <img src='/04-product/svg/avengners.png' alt='' />}
      </button>
    </div>
  )
}

export default Theme
