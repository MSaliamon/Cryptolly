import './Footer.scss'
import logo from '../../assets/homepage/svg/logo.svg'
import LinkedIn from '../../assets/homepage/svg/LinkedIn.svg'
import Facebook from '../../assets/homepage/svg/Facebook.svg'
import Instagram from '../../assets/homepage/svg/Instagram.svg'

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-container1">
            <div className="footer-box1">
                <div className="footer-box1__cont">
                    <img src={logo} alt="logo" className="footer-box1__cont-img" />
                    <p className="footer-box1__cont-text">Your best crypto partner.</p>
                </div>
                <div className="footer-box1__socials">
                    <img src={LinkedIn} alt="LinkedIn" className="footer-box1__socials-img" />
                    <img src={Facebook} alt="Facebook" className="footer-box1__socials-img" />
                    <img src={Instagram} alt="Instagram" className="footer-box1__socials-img" />
                </div>
            </div>
            <div className="footer-box2">
                <p className="footer-box2__title">Quick Links.</p>
                <div className="nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="" className="nav__link">Buy/Sell</a>
                        </li>
                        <li className="nav__item">
                            <a href="" className="nav__link">Trade Now</a>
                        </li>
                        <li className="nav__item">
                            <a href="" className="nav__link">Pricing</a>
                        </li>
                    </ul>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="" className="nav__link">Wallets</a>
                        </li>
                        <li className="nav__item">
                            <a href="" className="nav__link">Company</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-box3">
                <p className="footer-box3__text1">Submit for updates.</p>
                <p className="footer-box3__text2">Subscribe to get update and notify our exchange and products</p>
                <label className="footer-box3__label">
                    <input type="text" className="footer-box3__label-input" placeholder='Enter your email address' />
                    <button className="footer-box3__label-btn button">Send</button>
                </label>
            </div>
        </div>
        <div className="footer-container2">
            <p className="footer-container2__text">Cryptolly ©. All rights reserved.</p>
            <div className="footer-container2__textbox">
                <p className="footer-container2__textbox-text">Term of Service</p>
                <p className="footer-container2__textbox-text">Privacy Policy</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer