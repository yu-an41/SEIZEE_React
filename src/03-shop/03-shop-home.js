import './styles/03-shop-home.scss'
// import './../00-homepage/styles/YellowWave.scss'
import YellowWave from '../00-homepage/components/YellowWave'




function ShopHome(){
    return<>
        <div className="r-shop-home-container">
            <YellowWave/>
            <div className="r-shop-home-main">
            <div className="r-shop-home-main-inner">
                <div class="r-shop-home-main-text">
                    <p>Creating a better future through food.</p>
                    <span>An idea, a way of living, a way of eating.</span>
                    <div className="r-shop-home-main-btn">
                          <a href="/#">
                          <i className="fa-solid fa-caret-right"></i>
                          <span>探索更多美味</span>
                          </a>
                    </div>
                </div>
            </div>
            <div className="r-shop-home-main-visual">
            </div>
            </div>
        </div>
    </>
}
export default ShopHome