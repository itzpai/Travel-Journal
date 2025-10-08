import logo from '../assets/global-icon.png'

export default function Header(){
    return(
        <header className="header">
            <nav className="header-nav">
                <img className="header-logo" src={logo} alt="logo" />
                <a className="header-brand" href="#">Travel Journal.</a>
            </nav>
        </header>
    )
}