import './main-page.css';
import CoffeeFooter from '../coffee-footer/coffee-footer';
import beans1 from './img/beans1.png';
import beans2 from './img/beans2.png';
import beans3 from './img/beans3.png';
import beans4 from './img/beans4.png';
import background from './img/main-page-bg.png';
import coffee1 from './img/coffee1.png';
import coffee2 from './img/coffee2.png';
import coffee3 from './img/coffee3.png';
import ourbest from './img/our-best-bg.png';

const MainPage = () => {
    return (
        <div>
            <section className='main-page-header' style={{ backgroundImage: `url(${background})` }} >
                <div className="link-bar">
                    <img src={beans1} alt="logo" />
                    <a href="">Coffee house</a>
                    <a href="">Our coffee</a>
                    <a href="">For your pleasure</a>
                </div>
                <div className='container'>
                    <h1>Everything You Love About Coffee</h1>
                    <span></span>
                    <img src={beans2} alt="logo2" />
                    <span></span>
                    <h2>We makes every day full of energy and taste <br />Want to try our beans?</h2>
                    <button>more</button>
                </div>
            </section >
            <section className='about-us'>
                <h2>About Us</h2>
                <span></span>
                <img src={beans3} alt="logo2" />
                <span></span>
                <p>
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                    <br /> <br />

                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    repair day ladies now.
                </p>

            </section>
            <section className="our-best" style={{ backgroundImage: `url(${ourbest})` }}>
                <h2>Our best</h2>
                <div className="coffee-container">
                    <div className='coffee-block'>
                        <div className="coffee-img">
                            <img src={coffee1} alt="coffee1" />
                        </div>
                        <span className='coffee-name'>Solimo Coffee Beans 2 kg</span>
                        <div className='coffee-price'>10.73$</div>
                    </div>
                    <div className='coffee-block'>
                        <div className="coffee-img">
                            <img src={coffee2} alt="coffee2" />
                        </div>
                        <span className='coffee-name'>Presto Coffee Beans 1 kg</span>
                        <div className='coffee-price'>15.99$</div>
                    </div>
                    <div className='coffee-block'>
                        <div className="coffee-img">
                            <img src={coffee3} alt="coffee3" />
                        </div>
                        <span className='coffee-name'>AROMISTICO Coffee 1 kg</span>
                        <div className='coffee-price'>6.99$</div>
                    </div>
                </div>
            </section>
            <section className='footer'>
                <div className="link-bar-footer">
                    <img src={beans4} alt="logo" />
                    <a href="">Coffee house</a>
                    <a href="">Our coffee</a>
                    <a href="">For your pleasure</a>
                </div>
                <div className='footer-divider'>
                    <span></span>
                    <img src={beans3} alt="logo2" />
                    <span></span></div>
            </section>
            {CoffeeFooter}
        </div >
    )
}

export default MainPage;