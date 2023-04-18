import React from 'react'
import './card.css'
import CardHeader from './cardHeader/cardHeader'
import CardFooter from './cardFooter/cardFooter'
export default function Card() {
  return (
    <div className='card'>
      <CardHeader/>
      <CardFooter/>
    </div>
  )
}
