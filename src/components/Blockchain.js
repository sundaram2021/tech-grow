import React from 'react';
import '../CSS/services.css';

function Blockchain() {
  return (
    <div className='grid-card'>
        <img className='grid-img' src={require('../assets/blockchain.jpg')} alt="" />
        <h3 className='grid-header'>Blockchain</h3>
        <p className='grid-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum aut assumenda vitae ad beatae facilis!</p>
    </div>
  )
}

export default Blockchain