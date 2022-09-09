import './page-four.css';
import page4img from '../main-page/img/page-four-img.png';
import beans1 from '../main-page/img/beans1.png';
import beans3 from '../main-page/img/beans3.png';
import background from '../main-page/img/page-four-bg.png'

const PageFour = () => {
    return (
        <div>
            <section className='page-two-header' style={{ backgroundImage: `url(${background})` }}>
                <div className="link-bar">
                    <img src={beans1} alt="logo" />
                    <a href="">Coffee house</a>
                    <a href="">Our coffee</a>
                    <a href="">For your pleasure</a>
                </div>
                <h2>For your pleasure</h2>
            </section>
            <section className="">
                <div className='beans-info'>
                    <div className='beans-img'>
                        <img src={page4img} alt="" />
                    </div>
                    <div className='beans-text'>
                        <h2>About our goods</h2>
                        <span></span>
                        <img src={beans3} alt="logo2" />
                        <span></span>
                        <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. <br /> <br />

                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions.
                            As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.</p>
                    </div>
                </div>
                <div className='divider-four'></div>
            </section>
        </div>
    )
}

export default PageFour;