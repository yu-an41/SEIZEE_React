import { Link } from 'react-router-dom'
import './../styles/ContinueShoppingBtn.scss'

function ContinueShoppingBtn({ linkTo, btnText }) {
  const ContinueShopping = () => {
    console.log('Continue Shopping')
  }

  return (
    <div className="y-continue-shopping-border">
      <a href={linkTo}>
        <p className="y-continue-shopping">{btnText}</p>
      </a>
    </div>
  )
}

export default ContinueShoppingBtn
