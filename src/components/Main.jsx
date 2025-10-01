export default function Main(props){
    return(
        <main className="main">
            <div className="main-image-container">
                <img src={props.image} alt="bagan" />
            </div>
            <div className="main-content">
                <div className="main-content-location">
                    <img src={props.icon} alt="location" />
                    <h1>Bagan</h1>
                    <a href="https://www.google.com/maps/place/Bagan/@21.1670641,94.9314111,13z/data=!4m6!3m5!1s0x30acd5e91d398285:0x4743048365411392!8m2!3d21.1670641!4d94.9314111!16s%2Fg%2F11f4g4_m20?entry=ttu&g_ep=EgoyMDI1MDIyMi4wIKXMDSoASAFQAw%3D%3D">View on Google Maps</a>
                </div>
                <div className="main-content-info">
                    <h3>24 Oct, 2021 - 03 Nov, 2021</h3>
                    <p>Bagan is a city in the Mandalay Region of Myanmar. It is located on the eastern bank of the Irrawaddy River. Bagan is known for its many temples and pagodas, which are some of the most iconic landmarks in Myanmar.</p>
                </div>
            </div>
        </main>
    )
}