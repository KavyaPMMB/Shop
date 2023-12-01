import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import'./Style/Bag.css'

const Bagpack = () => {
    const [bags, setbags] = useState([]);
    const navigate=useNavigate()


    useEffect(() => {
        axios
          .get("http://localhost:4000/getbag")
          .then((res) => {
            setbags(res.data);
          })
          .catch((err) => console.log(err));
      }, []);


      const handleAddToCart = (_id) => {
        navigate(`/cartbag/${_id}`);
        console.log(`get bag with ID ${_id}`);
      };


  return (
    <div className='bag-sec' id='bagid'>
    <h2>Bags</h2>

    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {bags.map((data) => {
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

export default Bagpack