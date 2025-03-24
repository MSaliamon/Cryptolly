import './Section1.scss';
import Bitcoin from '../../../assets/homepage/svg/Bitcoin.svg';
import ETH from '../../../assets/homepage/svg/ETH.svg';
import BNB from '../../../assets/homepage/svg/BNB.svg';
import XRP from '../../../assets/homepage/svg/XRP.svg';
import USDT from '../../../assets/homepage/svg/USDT.svg';
import ACT from '../../../assets/homepage/svg/ACT.svg';
import OGN from '../../../assets/homepage/svg/OGN.svg';
import ITC from '../../../assets/homepage/svg/ITC.svg';
import ArrowDown from '../../../assets/homepage/svg/ArrowDown.svg';
import ArrowUp from '../../../assets/homepage/svg/ArrowUp.svg';
import GraphBTC from '../../../assets/homepage/svg/GraphBTC.svg';
import GraphETH from '../../../assets/homepage/svg/GraphETH.svg';
import GraphBNB from '../../../assets/homepage/svg/GraphBNB.svg';
import GraphXRP from '../../../assets/homepage/svg/GraphXRP.svg';
import GraphUSDT from '../../../assets/homepage/svg/GraphUSDT.svg';
import GraphACT from '../../../assets/homepage/svg/GraphACT.svg';
import GraphOGN from '../../../assets/homepage/svg/GraphOGN.svg';
import GraphITC from '../../../assets/homepage/svg/GraphITC.svg';

function Section1() {
  return (
    <section className="section1">
        <div className="section1-container">
            <div className="section1-textbox">
                <h1 className="section1-textbox__title">A trusted and secure cryptocurrency exchange.</h1>
                <p className="section1-textbox__text">Your guide to the world of an open financial system. Get started with the easiest and most secure platform to buy and trade cryptocurrency.</p>
            </div>
            <button className="section1-container__btn button">Get Started Now</button>
        </div>
        <div className="section1-container2">
          <div className="section1-box">
            <div className="section1-cont">
              <img src={Bitcoin} alt="bitcoin" className="section1-cont__img" />
              <div className="section1-cont__textbox">
                <p className="section1-cont__textbox-title">Bitcoin</p>
                <p className="section1-cont__textbox-text">USD 53,260.20</p>
              </div>
              <p className="section1-cont__text">BTC</p>
            </div>
            <div className="section1-cont2">
              <img src={GraphBTC} alt="Graph" className="section1-cont2__img" />
              <div className="section1-cont2__percent">
                <img src={ArrowUp} alt="Arrow" className="section1-cont2__percent-img" />
                <p className="section1-cont2__percent-text">2.11%</p>
              </div>
            </div>
          </div>
          <div className="section1-box">
            <div className="section1-cont">
              <img src={ETH} alt="ETH" className="section1-cont__img" />
              <div className="section1-cont__textbox">
                <p className="section1-cont__textbox-title">Ethereum</p>
                <p className="section1-cont__textbox-text">USD 1,643.80</p>
              </div>
              <p className="section1-cont__text">ETH</p>
            </div>
            <div className="section1-cont2">
              <img src={GraphETH} alt="GraphETH" className="section1-cont2__img" />
              <div className="section1-cont2__percent">
                <img src={ArrowDown} alt="Arrow" className="section1-cont2__percent-img" />
                <p className="section1-cont2__percent-text2">1.53%</p>
              </div>
            </div>
          </div>
          <div className="section1-box">
            <div className="section1-cont">
              <img src={BNB} alt="BNB" className="section1-cont__img" />
              <div className="section1-cont__textbox">
                <p className="section1-cont__textbox-title">Binance Coin</p>
                <p className="section1-cont__textbox-text">USD 247.71</p>
              </div>
              <p className="section1-cont__text">BNB</p>
            </div>
            <div className="section1-cont2">
              <img src={GraphBNB} alt="GraphBNB" className="section1-cont2__img" />
              <div className="section1-cont2__percent">
                <img src={ArrowUp} alt="Arrow" className="section1-cont2__percent-img" />
                <p className="section1-cont2__percent-text">0.33%</p>
              </div>
            </div>
          </div>
          <div className="section1-box">
            <div className="section1-cont">
              <img src={XRP} alt="XRP" className="section1-cont__img" />
              <div className="section1-cont__textbox">
                <p className="section1-cont__textbox-title">XRP</p>
                <p className="section1-cont__textbox-text">USD 0.5464</p>
              </div>
              <p className="section1-cont__text">XRP</p>
            </div>
            <div className="section1-cont2">
              <img src={GraphXRP} alt="GraphXRP" className="section1-cont2__img" />
              <div className="section1-cont2__percent">
                <img src={ArrowDown} alt="Arrow" className="section1-cont2__percent-img" />
                <p className="section1-cont2__percent-text2">1.49%</p>
              </div>
            </div>
          </div>
          <div className="section1-box">
            <div className="section1-cont">
              <img src={USDT} alt="USDT" className="section1-cont__img" />
              <div className="section1-cont__textbox">
                <p className="section1-cont__textbox-title">Tether</p>
                <p className="section1-cont__textbox-text">USD 0.9999</p>
              </div>
              <p className="section1-cont__text">USDT</p>
            </div>
            <div className="section1-cont2">
              <img src={GraphUSDT} alt="GraphUSDT" className="section1-cont2__img" />
              <div className="section1-cont2__percent">
                <img src={ArrowUp} alt="Arrow" className="section1-cont2__percent-img" />
                <p className="section1-cont2__percent-text">0.11%</p>
              </div>
            </div>
          </div>
          <div className="section1-box">
            <div className="section1-cont">
              <img src={ACT} alt="ACT" className="section1-cont__img" />
              <div className="section1-cont__textbox">
                <p className="section1-cont__textbox-title">Achain</p>
                <p className="section1-cont__textbox-text">USD 40,998.21</p>
              </div>
              <p className="section1-cont__text">ACT</p>
            </div>
            <div className="section1-cont2">
              <img src={GraphACT} alt="GraphACT" className="section1-cont2__img" />
              <div className="section1-cont2__percent">
                <img src={ArrowUp} alt="Arrow" className="section1-cont2__percent-img" />
                <p className="section1-cont2__percent-text">0.87%</p>
              </div>
            </div>
          </div>
          <div className="section1-box">
            <div className="section1-cont">
              <img src={OGN} alt="OGN" className="section1-cont__img" />
              <div className="section1-cont__textbox">
                <p className="section1-cont__textbox-title">Origin Protocol</p>
                <p className="section1-cont__textbox-text">USD 3,464.21</p>
              </div>
              <p className="section1-cont__text">OGN</p>
            </div>
            <div className="section1-cont2">
              <img src={GraphOGN} alt="GraphOGN" className="section1-cont2__img" />
              <div className="section1-cont2__percent">
                <img src={ArrowUp} alt="Arrow" className="section1-cont2__percent-img" />
                <p className="section1-cont2__percent-text">2.11%</p>
              </div>
            </div>
          </div>
          <div className="section1-box">
            <div className="section1-cont">
              <img src={ITC} alt="ITC" className="section1-cont__img" />
              <div className="section1-cont__textbox">
                <p className="section1-cont__textbox-title">IoT Chain</p>
                <p className="section1-cont__textbox-text">USD 1,443.02</p>
              </div>
              <p className="section1-cont__text">ITC</p>
            </div>
            <div className="section1-cont2">
              <img src={GraphITC} alt="GraphITC" className="section1-cont2__img" />
              <div className="section1-cont2__percent">
                <img src={ArrowUp} alt="Arrow" className="section1-cont2__percent-img" />
                <p className="section1-cont2__percent-text">3.44%</p>
              </div>
            </div>
          </div>
          <div className="section1-box2">
            <button className="section1-box2__btn">View All Assets</button>
          </div>
        </div>
    </section>
  )
}

export default Section1