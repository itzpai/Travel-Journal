import icon from '../assets/location-icon.png'

export default function ContentCard(props){
    return(
        <main className="main">
            <div className="main-image-container">
                <img src={props.image} alt="bagan" />
            </div>
            <div className="main-content">
                <div className="main-content-location">
                    <img src={icon} alt="location" />
                    <h1>{props.name}</h1>
                    <a href={props.location}>View on Google Maps</a>
                </div>
                <div className="main-content-info">
                    <h3>{props.country}</h3>
                    <p>{props.about}</p>
                </div>
            </div>
        </main>
    )
}