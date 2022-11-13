import './style/ResetPass.scss'

function ResetPass() {
  return (
    <>
      <div className="s-body-resetpass">
        <div className="container">
          <div className="resetBx">
            <form action="">
              <h2>重新輸入密碼</h2>
              <input type="text" placeholder="密碼*" />
              <input type="password" placeholder="二次確認密碼*" />
              <input type="submit" value="確認" className="resetSubmit" />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResetPass
