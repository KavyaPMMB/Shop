import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, Table, Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';

function Cartshoe() {
  const { _id} = useParams();
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState("");

  useEffect(() => {
    axios
      .post(`http://localhost:4000/getshoesingle/${_id}`)
      .then((res) => {
        const item = res.data;
        setCartItems([item]);
        setBrand(item.brand);
        setModel(item.model);
        setPrice(item.price);
      })
      .catch((err) => console.log(err));
    console.log('fetching bag ID', _id);
  }, [_id]);

  

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calculateTotal = () => {
    if (!isNaN(quantity) && !isNaN(price)) {
      return quantity * price;
    }
    return 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post('http://localhost:4000/addtocart', {
      brand,
      model,
      price,
      quantity,
      total: calculateTotal(),
      
    });
    navigate('/commoncart')

    console.log(response.data);

    
  };

  return (
    <div className="container">
      <h2>Add To Cart</h2>
      <Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Brand</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cartItem) => (
              <tr key={cartItem._id}>
                <td>
                  <input
                    type="text"
                    value={cartItem.brand}
                    readOnly 
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={cartItem.price}
                    readOnly 
                  />
                </td>
                <td>
                <div>
                    <Button variant="outline-secondary" onClick={decrementQuantity}>
                      -
                    </Button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => handleQuantityChange(e.target.value)}
                    />
                    <Button variant="outline-secondary" onClick={incrementQuantity}>
                      +
                    </Button>
                  </div>
                </td>
                <td><h3>{calculateTotal()}</h3></td>
                <td>
                <Link to='/cartview'><Button onClick={handleSubmit}>Update Cart</Button></Link>  
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Form>
      <Link to='/'><Button>Cancel</Button></Link>

    </div>
  );
}

export default Cartshoe;
