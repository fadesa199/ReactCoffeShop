import './coffee-list-item.css'
import coffee3 from '../main-page/img/coffee3.png';

const CoffeeListItem = (props) => {

    const { name, country, value, moreInfo } = props;

    return (
        <div className='coffee-block'
            onClick={moreInfo}>
            <div className="coffee-img">
                <img src={coffee3} alt="coffee3" />
            </div>
            <span className='coffee-name'>{name}</span>
            <div className='coffee-country'>{country}</div>
            <div className='coffee-price'>{value}</div>
        </div>
    )
}

export default CoffeeListItem;