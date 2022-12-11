import './../styles/RemoveItemBtn.scss'
import RemoveItemIcon from './../../dotown/pizza.png'

function RemoveItemBtn({ onClick }) {
  return (
    <div className="y-remove-item-border">
      <div className="y-remove-item-icon">
        <i className="fa-sharp fa-solid fa-xmark"></i>
      </div>
      <p className="y-remove-item" onClick={onClick}>
        移除商品
      </p>
    </div>
  )
}

export default RemoveItemBtn
