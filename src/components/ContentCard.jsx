import icon from '../assets/location-icon.png'
import binIcon from '../assets/bin.png'

export default function ContentCard({item, onRemove}){

    return(
        <article className="card">
            <div className="image-container">
                <img src={item.image} alt={item.name} />
            </div>
            <div className="content">
                <div className="content-location">
                    <img src={icon} alt="location" />
                    <h2>{item.name}</h2>
                    <a href={item.location}>View on Google Maps</a>
                    <button 
                        className="remove-button" 
                        onClick={onRemove}
                        aria-label={`Remove ${item.name} from travel journal`}
                    >
                        <img src={binIcon} alt="Remove" />
                    </button>
                </div>
                <div className="content-info">
                    <h3>{item.country}</h3>
                    <p>{item.about}</p>
                </div>
            </div>
        </article>
    )
}