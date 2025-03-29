import './Section3.scss'
import Clarity from '../../../assets/homepage/svg/clarity.svg'
import Confidence from '../../../assets/homepage/svg/confidence.svg'
import Community from '../../../assets/homepage/svg/community.svg'
function Section3() {
  return (
    <section className="section3">
        <div className="section3-textbox">
            <h2 className="section3-textbox__title">We are the most trusted cryptocurrency platform.</h2>
            <p className="section3-textbox__text">We believe Cryptolly is here to stay — and that a future worth building is one which opens its doors and invites everyone in.</p>
        </div>
        <div className="section3-container">
            <div className="section3-box">
                <img src={Clarity} alt="Clarity" className="section3-box__img" />
                <div className="section3-box__textbox">
                    <p className="section3-box__textbox-text1">Clarity</p>
                    <p className="section3-box__textbox-text2">We help you make sense of the coins, the terms, the dense charts and market changes.</p>
                </div>
            </div>
            <div className="section3-box">
                <img src={Confidence} alt="Confidence" className="section3-box__img" />
                <div className="section3-box__textbox">
                    <p className="section3-box__textbox-text1">Confidence</p>
                    <p className="section3-box__textbox-text2">Our markets are always up to date, sparking curiosity with real-world relevance.</p>
                </div>
            </div>
            <div className="section3-box">
                <img src={Community} alt="Community" className="section3-box__img" />
                <div className="section3-box__textbox">
                    <p className="section3-box__textbox-text1">Community</p>
                    <p className="section3-box__textbox-text2">We supports the crypto community, putting data in the hands which need it most.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section3