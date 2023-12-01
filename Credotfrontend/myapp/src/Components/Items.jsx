


import React from 'react';
import './Style/Item.css'
import { Link } from 'react-router-dom';

const Items = () => {
  return (
    <div className="items-container">
     
   <Link to='/watch'>
   <div className="item" style={{ backgroundColor: '#F8C146' }}> 
        <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" alt="Watch" className="item-image" />
        <span className="item-name">Watch</span>
      </div>
</Link>  
      
      
      <Link to='/bag'><div className="item" style={{ backgroundColor: '#EC407A' }}> 
        <img src="https://images.jdmagicbox.com/quickquotes/images_main/blue-nike-school-bag-386084223-03zlt.png" alt="Bag" className="item-image" />
        <span className="item-name">Bagss</span>
      </div></Link>

      <Link to='/shoe'>
      <div className="item" style={{ backgroundColor: '#29B6F6' }}> 
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww" alt="Shoes" className="item-image" />
        <span className="item-name">Shoes</span>
      </div></Link>
    </div>
  );
};

export default Items;

