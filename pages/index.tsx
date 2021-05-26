import React, { useState, useEffect } from 'react'
import Nav from '@views/components/Nav'

const Home = () => {
  const [desckId, desckIdSet] = useState(''),
    [currentCard, currentCardSet] = useState({ image: '', code: '' }),
    [remainingCards, remainingCardsSet] = useState(1),
    [userBet, userBetSet] = useState<'string' | void>(null)

  const shuffleCards = () => {
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(response => response.json())
      .then(data => {
        console.log('Success:1')
        desckIdSet(data.deck_id)
        drawCard(data.deck_id)
      })
      .catch(error => {
        alert('Something went wrong!')
        console.error('Error:', error)
      })
  }
  const drawCard = id => {
    if (remainingCards < 1) {
      shuffleCards()
      return
    }
    fetch(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        currentCardSet(data.cards[0])
        remainingCardsSet(data.remaining)
        console.log('Success:2')
      })
      .catch(error => {
        alert('Something went wrong!')
        console.error('Error:', error)
      })
  }

  useEffect(() => {
    shuffleCards()
  }, [])

  return (
    <div className="cardPage">
      <section></section>
      <section className="callToActions">
        <button
          onClick={() => {
            userBetSet('up')
          }}
        >
          Up
        </button>
        <button
          onClick={() => {
            userBetSet('down')
          }}
        >
          Down
        </button>
      </section>
    </div>
  )
}

export default Home
