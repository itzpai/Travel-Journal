import Header from './components/Header'
import ContentCard from './components/ContentCard'
import data from './data'
import { useState } from 'react'

export default function App() {
  const [travelItems, setTravelItems] = useState(data)

  const removeTravelItem = (id) => {
    setTravelItems( prevItems => prevItems.filter(item => item.id !== id) )
  }

  const contentCards = travelItems.map((item) => (
      <ContentCard 
        key={item.id}
        item={item}
        onRemove={() => removeTravelItem(item.id)}
      />
    )
  )

  return (
       <>
          <Header />
          {travelItems.length === 0 ?
           <div className="empty-state">
            <h2>No travel entries yet.</h2>
           </div>
          :<main aria-label="Travel journal entries">
            {contentCards}
          </main>}
       </>   
  )
}
