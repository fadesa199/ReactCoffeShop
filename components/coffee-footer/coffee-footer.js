import './coffee-footer.css'
import beans3 from '../main-page/img/beans3.png'
import beans4 from '../main-page/img/beans4.png'

const CoffeeFooter = () => {
    return (
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
    )
}
export default CoffeeFooter;