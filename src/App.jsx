import Nav from './components/Nav'
import ContentCard from './components/ContentCard'
import data from './data'

export default function App() {
  const contentCards = data.map((item) => {
    return(
      <ContentCard 
        key={item.id}
        image={item.image}  
        name={item.name} 
        country={item.country}            
        location={item.location} 
        about={item.about} 
      />
    )
  })

  return (
       <>
          <Nav />
          {contentCards}
       </>   
  )
}
