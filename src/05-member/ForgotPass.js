import "./style/ForgotPass.scss";
import { checkEmpty, checkAccount } from "./UserSign_valid";
import { LOGIN, REGISTER, CHECK_USER } from "../my-config";
import React, { useState } from "react";

function ForgotPass() {
  const [signUpFD, setSignUpFD] = useState({
    mbfEmail: "",
  });

  // 輸入信箱 到後端確認是否有信箱的存在 而後發送token
  const forgotHandler = (e) => {
    const id = e.currentTarget.id;
    const val = e.currentTarget.value;
    // console.log({ id, val });

    setSignUpFD({ ...signUpFD, [id]: val });
  };

  
  // const response = await axios.post(CHECK_USER, signUpFD);
  // // console.log(response.data.success);
  // if (response.data.success) {
  //   const { data } = await axios.post(REGISTER, signUpFD);
  //   console.log(data);
  //   if (data.success) {
  //     alert("註冊成功");
  //     navigate("/");
  //   } else {
  //     alert("註冊失敗");
  //   }
  // } else {
  //   alert("帳號重複");
  //   return;
  // }

  return (
    <>
      <div className="s-body-forgotpass">
        <div className="container">
          <div className="forgotBx">
            <form action="">
              <h2>忘記密碼?</h2>
              <h3>
                請在下面輸入您的電子郵件地址，我們將重設密碼的連結寄給您。
              </h3>
              <label>
                電子郵件<span style={{ color: "red" }}> *</span>
              </label>
              <input
                type="text"
                placeholder="請輸入電子郵件"
                id="mbfEmail"
                onChange={forgotHandler}
              />
              <div
                className="errorMg"
                style={{ color: "red" }}
                id="mblEmail_error"
              >
                ddd
              </div>
              <input
                type="submit"
                value="發送重送連結"
                className="forgotSubmit"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPass;
