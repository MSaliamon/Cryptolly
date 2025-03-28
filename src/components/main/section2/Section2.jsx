import './Section2.scss';
import portfolio from '../../../assets/homepage/svg/portfolio.svg';
import mobile from '../../../assets/homepage/svg/mobile.svg';
import protection from '../../../assets/homepage/svg/protection.svg';

function Section2() {
  return (
    <section className="section2">
      <div className="section2-textbox">
        <h2 className="section2-textbox__title">The most trusted cryptocurrency platform.</h2>
        <p className="section2-textbox__text">Cryptolly has a variety of features that make it the best place to start trading</p>
      </div>
      <div className="section2-container">
        <div className="section2-box">
          <img src={portfolio} alt="portfolio" className="section2-box__img" />
          <div className="section2-box__textbox">
            <p className="section2-box__textbox-text1">Portfolio Manager</p>
            <p className="section2-box__textbox-text2">Buy and sell popular digital currencies, keep track of them in the one place.</p>
          </div>
        </div>
        <div className="section2-box section2-box--more-bottom">
          <img src={mobile} alt="mobile" className="section2-box__img" />
          <div className="section2-box__textbox">
            <p className="section2-box__textbox-text1">Mobile Apps</p>
            <p className="section2-box__textbox-text2">Stay on top of the markets with the Cryptolly app for Android or iOS.</p>
          </div>
        </div>
        <div className="section2-box">
          <img src={protection} alt="protection" className="section2-box__img" />
          <div className="section2-box__textbox">
            <p className="section2-box__textbox-text1">Vault protection</p>
            <p className="section2-box__textbox-text2">For added security, store your funds in a vault with time delayed withdrawals.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section2