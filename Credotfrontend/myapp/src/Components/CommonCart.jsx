import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';




function CartView() {
   const [cartView, setCartView] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0); 
  const {_id}=useParams()


  useEffect(() => {
    axios
      .get("http://localhost:4000/getcart")
      .then((res) => {
        console.log("Response from server:", res.data);
        setCartView(res.data.cartItems); 
        setGrandTotal(res.data.grandtotal); 

      })
      .catch((err) => console.log(err));
  }, []);




  return (

    <div className="container">
      <h2>Your Cart</h2>
      <Link to='/'><Button>Back To Home</Button></Link>


      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            

          </tr>
        </thead>
        <tbody>
          {cartView.map((cartItem) => (
            <tr key={cartItem._id}>
                <td>{cartItem.brand}</td>
              <td>{cartItem.model}</td>
              <td>{cartItem.price}</td>
              <td>{cartItem.quantity}</td>
              <td>{cartItem.total}</td>

            </tr>
          ))}
        </tbody>
      </table>
      <h2>Grand Total: ${grandTotal}</h2>

    </div>
  );
}

export default CartView;

