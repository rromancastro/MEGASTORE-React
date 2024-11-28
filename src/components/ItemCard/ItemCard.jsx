import {Star, StarBN} from '../Star/Star'

export const ItemCard = ({data}) => {

    const printStars = (cantidad) => {
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


    return (
        <article id='itemCard'>
            <img src={data.thumbnail} alt="" />
            <div id='infoProductCard'>
                <h3>{data.title}</h3>
                <h4>rating</h4>
                {printStars(Math.round(data.rating))}
                <h4>${data.price}</h4>
            </div>
        </article>
    )
}