import React from 'react'
import './Coin.css';

function Coin({ name, icon, price, symbol }) {
  return (
    <div className='coin'>
      <div className="coinDetails">
        <h1>{name}</h1>
        <img className='coinImg' src={icon} alt=""/>
        <h2>{price}</h2>
        <h3>{symbol}</h3>
         <button className='btn'>Buy</button>
      </div> 
    </div>
  )
}

export default Coin

