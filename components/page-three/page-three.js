import './page-three.css'
import background from '../main-page/img/main-page-bg.png'
import beans1 from '../main-page/img/beans1.png';
import beans3 from '../main-page/img/beans3.png';
import productlarge from '../main-page/img/product-large.jpg';
import CoffeeFooter from '../coffee-footer/coffee-footer';

const PageThree = ({ data }) => {
    const { country, value } = data;
    return (
        <div>
            <section className='page-two-header' style={{ backgroundImage: `url(${background})` }}>
                <div className="link-bar">
                    <img src={beans1} alt="logo" />
                    <a href="">Coffee house</a>
                    <a href="">Our coffee</a>
                    <a href="">For your pleasure</a>
                </div>
                <h2>Our Coffee</h2>
            </section>
            <section className='about-it'>
                <div className='beans-info3'>
                    <div className='beans3-img'>
                        <img src={productlarge} alt="" />
                    </div>
                    <div className='beans-text'>
                        <h2>About it</h2>
                        <span></span>
                        <img src={beans3} alt="logo2" />
                        <span></span>
                        <div className='beans-descr'>
                            <div className='beans-country'><strong>Country:</strong>{country}</div>
                            <div className='beans-product-info'> <strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quis. Exercitationem possimus quod adipisci libero voluptatem accusamus eius error quisquam, et eveniet beatae quia earum ratione aspernatur illo cupiditate tenetur?</div>
                            <div className='beans-price'><strong>Price:</strong>{value}</div>
                        </div>
                    </div>
                </div>
            </section>
            <CoffeeFooter />
        </div>
    )
}
export default PageThree;