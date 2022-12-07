import React, { useState } from 'react'

function Theme() {
    const [theme, setTheme] = () => {
        setTheme(theme === 'seizee' ? 'aladdin' : 'seizee')
    }
    const [themeState, setThemeState] = useState(1)
    setThemeState = (themeState === 1 ? 0 : 1)

  return (
    // <div>
    //   <button onClick={Theme}>{theme === 1 ? }</button>
    // </div>
    <></>
  )
}

export default Theme
