import './Section4.scss'
import ArrowLeft from '../../../assets/homepage/svg/ArrowLeft.svg'
import ArrowRight from '../../../assets/homepage/svg/ArrowRight.svg'
function Section4() {
  return (
    <section className="section4">
        <img src={ArrowLeft} alt="ArrowLeft" className="section4-img" />
        <div className="section4-slider">
            <div className="section4-slider__slide">
                <p className="section4-slider__slide-text1">Forbes</p>
                <p className="section4-slider__slide-text2">“Derivative exchange America-based Cryptolly believes they will continue to grow in 2020.”</p>
            </div>
        </div>
        <img src={ArrowRight} alt="ArrowRight" className="section4-img" />
    </section>
  )
}

export default Section4