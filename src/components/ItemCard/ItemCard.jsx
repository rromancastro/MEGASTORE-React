import { Link } from 'react-router'
import {Star, StarBN} from '../Star/Star'

export const printStars = (cantidad) => {
    switch (cantidad) {
        case 1:return (<div id='ratingContainer'><Star/><StarBN/><StarBN/><StarBN/><StarBN/></div>)
        case 2:return (<div id='ratingContainer'><Star/><Star/><StarBN/><StarBN/><StarBN/></div>)
        case 3:return (<div id='ratingContainer'><Star/><Star/><Star/><StarBN/><StarBN/></div>)
        case 4:return (<div id='ratingContainer'><Star/><Star/><Star/><Star/><StarBN/></div>)
        case 5:return (<div id='ratingContainer'><Star/><Star/><Star/><Star/><Star/></div>)
    
        default:
            break;
    }
}

export const ItemCard = ({data}) => {


    return (
        <Link to={`/item/:${data.id}`}>
        <article id='itemCard'>
            <h5 style={{color: ''}}>MEGASTORE</h5>
            <img src={data.thumbnail} alt="" />
            <div id='infoProductCard'>
                <h3>{data.title}</h3>
                <h4>rating</h4>
                {printStars(Math.round(data.rating))}
                <p>{data.shippingInformation} <span>FREE</span></p>
                <h4>${data.price}</h4>
            </div>
        </article>
        </Link>
    )
}