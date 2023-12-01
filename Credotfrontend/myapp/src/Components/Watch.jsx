import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import'./Style/Watch.css'
import { useNavigate } from 'react-router-dom';

const Watch = () => {
    
    const [watches, setwatches] = useState([])
    const navigate=useNavigate()

    useEffect(() => {
        axios
          .get("http://localhost:4000/getwatch")
          .then((res) => {
            setwatches(res.data);
          })
          .catch((err) => console.log(err));
      }, []);

      const handleAddToCart = (_id) => {
        navigate(`/cartwatch/${_id}`);
        console.log(`get watch with ID ${_id}`);
      };
    

  return (
    <div className='watch-sec'>
    <h2>Watches</h2>

    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {watches.map((data) => {
        return (
          <Card
            style={{
              width: "18rem",
              margin: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Card.Img
              variant="top"
              src={data.image}
              style={{ height: "200px", objectFit: "cover" }}
              className="card-img"
            />
            <Card.Body>
              <Card.Title>{data.brand}</Card.Title>
              <Card.Text>{data.description}</Card.Text>
              <Card.Text>$ {data.price}</Card.Text>

              <Button variant="primary"  onClick={() => handleAddToCart(data._id)}>Add To Cart</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  </div>
  )
}

export default Watch