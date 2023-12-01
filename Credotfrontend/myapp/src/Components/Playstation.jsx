import React from 'react'
import './Style/Playstation.css'

const Playstation = () => {
  return (
    <div style={{display:'flex'}} className='main-section'>
      
        <div className='col-7'>
          <h4 className='playhead'>X-Box For Your Living Room</h4>
          <p className='palypara'> The PlayStation 4 is a gaming console developed by Sony Interactive Entertainment</p>
          <h2 className='headh2'>$ 400</h2>
          <button className='cta1'>Buy Now</button>
        </div>
        <div className='col-5'>
          <img className='playstation' src='https://images.pexels.com/photos/17103032/pexels-photo-17103032/free-photo-of-ps5-dual-sense-edge-in-hand-shot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />
        </div>
    </div>
  );
}

export default Playstation;
