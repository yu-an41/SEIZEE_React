import './style/SignUp.scss'

function SignUp() {
  return (
    <>
      <div className="s-body">
        <div className="container">
          <div className="blueBg">
            <div className="box signin">
              <h3>已經有一個帳號?</h3>
              <button className="signinBtn">登入</button>
            </div>
            <div className="box signup">
              <h3>需要一個帳號嗎?</h3>
              <button className="signupBtn">註冊</button>
            </div>
          </div>
          <div className="formBx">
            <div className="form signinForm">
              <form action="">
                <h2>歡迎回來</h2>
                <h3>我們很高興又見到您了!</h3>
                <input type="text" placeholder="電子郵件*" />
                <input type="password" placeholder="密碼*" />
                <a href="/#" className="forgot">
                  忘記您的密碼?
                </a>
                <input type="submit" value="登入" className="signinSubmit" />
                <div className="gmailBtn">
                  <img className="gmail" src="/05-member/mail.png" alt="" />
                  <input
                    type="submit"
                    value="以Google帳號登入"
                    className="googleSubmit"
                  />
                </div>
              </form>
            </div>
            <div className="form signupForm">
              <form action="">
                <h2>建立新帳號</h2>
                <input type="text" placeholder="電子郵件*" />
                <input type="text" placeholder="使用者名稱*" />
                <input type="password" placeholder="密碼*" />
                <input type="password" placeholder="確認密碼*" />
                <input type="submit" value="註冊" />
                <p>
                  註冊即代表同意惜食的<a href="/#">服務條款</a>及
                  <a href="/#">隱私權政策</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
