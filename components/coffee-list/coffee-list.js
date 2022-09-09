import CoffeeListItem from "../coffee-list-item/coffee-list-item"
import './coffee-list.css'

const CoffeeList = ({ data, moreInfo }) => {

    const elements = data.map(item => {
        const { id, ...data } = item;
        return (
            <CoffeeListItem key={id} {...data}
                moreInfo={() => console.log(moreInfo(id))}
            />
        )
    })

    return (
        <div className="beans-shop-container">
            {elements}
        </div>
    )
}

export default CoffeeList;