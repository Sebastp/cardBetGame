import React, { useState, useEffect } from 'react'
import Nav from '@views/components/Nav'

const Home = () => {
  const [desckId, desckIdSet] = useState('')
  const shuffleCards = () => {
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1', {
      method: 'GET',
    })
      .then((data) => {
        console.log('Success:', data)
        // desckIdSet
      })
      .catch((error) => {
        alert('Something went wrong!')
        console.error('Error:', error)
      })
  }
  const drawCard = () => {
    fetch(`https://deckofcardsapi.com/api/deck/${desckId}/draw/?count=1`, {
      method: 'GET',
    })
      .then((data) => {
        console.log('Success:', data)
      })
      .catch((error) => {
        alert('Something went wrong!')
        console.error('Error:', error)
      })
  }

  useEffect(() => {
    shuffleCards()
  }, [])
  return (
    <div>
      <section></section>
      <section className="callToActions">
        <button>Up</button>
        <button>Down</button>
      </section>
    </div>
  )
}

export default Home
