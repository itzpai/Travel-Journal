export default function Header(props){
    return(
        <header className="header">
            <nav className="header-nav">
                <img className="header-logo" src={props.logo} alt="logo" />
                <a className="header-brand" href="#">Travel Journal.</a>
            </nav>
        </header>
    )
}