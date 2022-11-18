import './style/ForgotPass.scss'

function ForgotPass() {
  return (
    <>
      <div class="s-body-forgotpass">
        <div class="container">
          <div class="forgotBx">
            <form action="">
              <h2>忘記密碼?</h2>
              <h3>
                請在下面輸入您的電子郵件地址，我們將重設密碼的連結寄給您。
              </h3>
              <input type="text" placeholder="電子郵件*" />
              <input type="submit" value="發送重送連結" class="forgotSubmit" />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPass
