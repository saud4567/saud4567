import React, { useState } from 'react'
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import CommonSection from "../components/UI/CommonSection";
import '../styles/checkout.css'
import { useSelector } from 'react-redux';

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

var itemnames = "";
const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount1 = useSelector((state)=> state.cart.totalAmount);

  
  cartItems.map((item,index)=>(
    itemnames = itemnames + item.productName+","
  ))

  

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    address: "",
    number: "",
    city: "",
    postcode: "",
    country: "",
    total:"₹"+totalAmount1,
    items:""+itemnames.slice(itemnames.length / 2, itemnames.length),
  });

  let name, value;
  const postUserdata = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value })
  };

  const navigate = useNavigate()
  const submitData = async (event) => {
    event.preventDefault();
    const { name, email, address, number, city, postcode, country,total,items } = userData;
    const res = fetch(
      "https://nike-ad69d-default-rtdb.firebaseio.com/userDataRecords.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          name,
          email,
          address,
          number,
          city,
          postcode,
          country,
          total,
          items
        }),
      }
    );

    toast.success("Order Placed ")
    navigate("/home")

    itemnames = ""
  };

  const totalQty = useSelector(state => state.cart.totalQuantity)
  const totalAmount = useSelector(state => state.cart.totalAmount)

  
  const orderPlace = async () => {

    
  }

  // const submitdata = async(event) =>{
  //   event.preventDefault();
  //   const {name,email,address,number,city,postcode,country} = userData;
  //   const res = fetch(
  //     "https://reactfirebasewebsite-default-rtdb.firebaseio.com/userDataRecords.json",
  //     {
  //       method:"POST",
  //       headers:{
  //         "Content-Type":"Application/json",
  //       },
  //       body:JSON.stringify({
  //         name,
  //         email,
  //         address,
  //         number,
  //         city,
  //         postcode,
  //         country
  //       }),
  //     }
  //   );

  //   if(res){
  //     alert("fill details");
  //   }else{
  //     alert("order placed");
  //   }
  // };

  return <Helmet title="Checkout">
    <CommonSection title="Checkout" />
    <section>
      <Container>
        <Row>
          <Col lg="8">
            <h6 className="mb-4 fw-bold">Billing Information</h6>
            <Form className="billing__form">
              <FormGroup className="form__group">
                <input type="text" placeholder='Enter Your Name' name="name"
                  value={userData.name}
                  onChange={postUserdata}
                />
              </FormGroup>

              <FormGroup className="form__group">
                <input type="email" placeholder='Enter Your Email' name='email'
                  value={userData.email}
                  onChange={postUserdata}
                />
              </FormGroup>

              <FormGroup className="form__group">
                <input type="number" placeholder='Phone Number' name='number'
                  value={userData.number}
                  onChange={postUserdata}
                />
              </FormGroup>

              <FormGroup className="form__group">
                <input type="text" placeholder='Street Address' name='address'
                  value={userData.address}
                  onChange={postUserdata}
                />
              </FormGroup>

              <FormGroup className="form__group">
                <input type="text" placeholder='City' name='city'
                  value={userData.city}
                  onChange={postUserdata}
                />
              </FormGroup>

              <FormGroup className="form__group">
                <input type="text" placeholder='Postal Code' name='postcode'
                  value={userData.postcode}
                  onChange={postUserdata}
                />
              </FormGroup>

              <FormGroup className="form__group">
                <input type="text" placeholder='Country' name='country'
                  value={userData.country}
                  onChange={postUserdata}
                />
              </FormGroup>
            </Form>
          </Col>
          <Col lg="4">
            <div className='checkout__cart'>
              <h6>Total Qty :<span>{totalQty} items</span></h6>
              <h6>Subtotal :<span>${totalAmount}</span></h6>
              <h6><span>Shipping :<br />free shipping</span><span>$0</span></h6>

              <h4>Total Cost :<span>${totalAmount}</span></h4>
            </div>
            <button className="buy__btn auth__btn w-100" onClick={submitData}>Place Order</button>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Checkout
