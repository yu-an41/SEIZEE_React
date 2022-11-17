import './style/UserProfile.scss'

function UserProfile() {
  return (
    <>
      <div className="s-body-profile">
        <div className="container">
          <div className="container-base-left"></div>
          <div className="navagator">
            <div className="list">
              <h4>使用者設定</h4>
              <div className="category">
                <img src="/05-member/green-book.png" alt="" />
                <p className="category-name">我的帳號</p>
              </div>
              <h4>平台相關查詢</h4>
              <div className="category">
                <img src="/05-member/thumbs_up.png" alt="" />
                <p className="category-name">收藏</p>
              </div>
              <div className="category">
                <img src="/05-member/wallet.png" alt="" />
                <p className="category-name">訂單查詢</p>
              </div>
              <div className="category">
                <img src="/05-member/flag.png" alt="" />
                <p className="category-name">活動查詢</p>
              </div>

              <div className="category logout">
                <img src="/05-member/key.png" alt="" />
                <p className="category-name">登出</p>
              </div>
            </div>
          </div>
          <div className="main-content">
            <h2>我的帳號</h2>
            <div className="profile-card">
              <div className="profile-top">
                <div className="profile-photo">
                  <img src="/05-member/ghost.png" alt="" />
                </div>
                <div className="username">Sharon Yu</div>
                <button type="button" className="user-edit">
                  編輯個人資料
                </button>
              </div>
              <div className="profile-detail">
                <div className="item">
                  <h4>使用者名稱</h4>
                  <p>Sharon Yu</p>
                </div>
                <div className="item">
                  <h4>電子郵件</h4>
                  <p>yu5286pp@gmail.com</p>
                </div>
                <div className="item">
                  <h4>性別</h4>
                  <p>女</p>
                </div>
                <div className="item">
                  <h4>地址</h4>
                  <p>基隆市</p>
                </div>
                <div className="item">
                  <h4>電話號碼</h4>
                  <p>0922666554</p>
                </div>
                <div className="item">
                  <h4>成為SEIZEE會員</h4>
                  <p>2022/10/30</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="remove-account">
              <div className="remove-section">
                <h3>移除帳號</h3>
                <button type="button" className="removeBtn">
                  刪除帳號
                </button>
              </div>
              <div className='decorate-store'>
                <img src="/05-member/store_only.png" alt="" />
              </div>
            </div>
          </div>
          <div className="container-base-right"></div>
        </div>
        <div className="footer"></div>
      </div>
    </>
  )
}

export default UserProfile
