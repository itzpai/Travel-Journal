import Nav from './components/Nav'
import ContentCard from './components/ContentCard'
import data from './data'
import { useState } from 'react'

export default function App() {
  // Initialize state with the imported data
  const [travelItems, setTravelItems] = useState(data)

  // Remove function using modern best practices
  const removeTravelItem = (id) => {
    setTravelItems( prevItems => prevItems.filter(item => item.id !== id) )
  }

  const contentCards = travelItems.map((item) => {
    return(
      <ContentCard 
        key={item.id}
        item={item}
        onRemove={() => removeTravelItem(item.id)}
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
