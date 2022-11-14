import "./style/ResetPass.scss";

function ResetPass() {
  return (
    <>
      <div className="s-body-resetpass">
        <div className="container">
          <div className="resetBx">
            <form action="">
              <h2>重新輸入密碼</h2>
              <label>
                密碼<span style={{ color: "red" }}> *</span>
              </label>
              <input
                type="text"
                placeholder="請設定8位英數混合密碼(英文大小寫)"
              />
              <div
                className="errorMg"
                style={{ color: "red" }}
                id="mblEmail_error"
              >
                ddd
              </div>
              <label>
                確認密碼<span style={{ color: "red" }}> *</span>
              </label>
              <input type="password" placeholder="請再輸入一次密碼" />
              <div
                className="errorMg"
                style={{ color: "red" }}
                id="mblEmail_error"
              >
                ddd
              </div>
              <input type="submit" value="確認" className="resetSubmit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPass;
