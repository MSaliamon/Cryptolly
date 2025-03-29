import './Section5.scss'

function Section5() {
  return (
    <section className="section5">
        <div className="section5-textbox">
            <p className="section5-textbox__text">Ready to start trading cryptocurrency?</p>
            <h2 className="section5-textbox__title">New users can earn up to $80 in crypto rewards.</h2>
        </div>
        <label className="section5-container">
            <input type="text" className="section5-container__input" placeholder='Enter your email address' />
            <button className="section5-container__btn button">Get Started</button>
        </label>
    </section>
  )
}

export default Section5