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
                <img src="/05-member/green-book.png" />
                <p className="category-name">我的帳號</p>
              </div>
              <h4>平台相關查詢</h4>
              <div className="category">
                <img src="/05-member/green-book.png" />
                <p className="category-name">收藏</p>
              </div>
              <div className="category">
                <img src="/05-member/green-book.png" />
                <p className="category-name">訂單查詢</p>
              </div>
              <div className="category">
                <img src="/05-member/green-book.png" />
                <p className="category-name">活動查詢</p>
              </div>
            </div>
          </div>
          <div className="main-content">ee</div>
          <div className="container-base-right"></div>
        </div>
        <div className="footer"></div>
      </div>
    </>
  )
}

export default UserProfile
