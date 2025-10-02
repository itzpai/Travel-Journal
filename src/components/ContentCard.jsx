import icon from '../assets/location-icon.png'
import binIcon from '../assets/bin.png'

export default function ContentCard({item, onRemove}){

    return(
        <main className="main">
            <div className="main-image-container">
                <img src={item.image} alt={item.name} />
            </div>
            <div className="main-content">
                <div className="main-content-location">
                    <img src={icon} alt="location" />
                    <h1>{item.name}</h1>
                    <a href={item.location}>View on Google Maps</a>
                    <button 
                        className="remove-button" 
                        onClick={onRemove}
                        aria-label={`Remove ${item.name} from travel journal`}
                    >
                        <img src={binIcon} alt="Remove" />
                    </button>
                </div>
                <div className="main-content-info">
                    <h3>{item.country}</h3>
                    <p>{item.about}</p>
                </div>
            </div>
        </main>
    )
}