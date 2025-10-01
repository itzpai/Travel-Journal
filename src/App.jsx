import Header from './components/Header'
import logo from './assets/global-icon.png'
import Main from './components/Main'
import image from './image/bagan.jfif'
import icon from './assets/location-icon.png'

function App() {
  return (
       <>
        <Header logo={logo} />
        <Main image={image} icon={icon} />
       </>   
  )
}

export default App
