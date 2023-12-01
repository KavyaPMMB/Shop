import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import axios from "axios";

import "./Style/Shoes.css";
import { useNavigate } from "react-router-dom";

const Shoes = () => {
  const [shoes, setshoes] = useState([]);
  const navigate=useNavigate()


  useEffect(() => {
    axios
      .get("http://localhost:4000/getshoe")
      .then((res) => {
        setshoes(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleAddToCart = (_id) => {
    navigate(`/cartshoe/${_id}`);
    console.log(`get shoe with ID ${_id}`);
  };


  return (
    <div className="shoe-sec" id="shoeid">
      <h2>SHOES</h2>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {shoes.map((data) => {
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
  );
};

export default Shoes;
