import DeafaultImage from "/NoImage.png"

const ItemMovie = ({id, type, title, poster, year }) => {

    let image = poster === "N/A" ? DeafaultImage : poster;
    return ( 
        <article>
            <div className="item-movie" style={{backgroundImage: `url (${image})` }}>
                <div className="info">
                    <h4>{title}</h4>
                    <p className="row-info"><span>{type}</span><span>{year}</span></p>
                    
                </div> 
            </div>
        </article>
     );
}
 
export default ItemMovie;