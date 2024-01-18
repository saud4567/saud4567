import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";



const year = new Date().getFullYear()
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='4' md='6' className='mb-4'>
            <div className="logo">
              <div>
                <h1 className="text-white">NIKE</h1>
              </div>
            </div>
            <p className="footer__text">Air technology consists of pressurised air inside a tough yet flexible bag, and provides more flexibility and spring without compromising structure.</p>
          </Col>

          <Col lg='3'md='3' className='mb-4'>
            <div className="footer__quick-links">
              <h4 className="quick-links-title">Top Categories</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0 mt-1">
                  <Link to='#'>SNEAKERS</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 mt-1">
                  <Link to='#'>RUNNING SHOES</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 mt-1">
                  <Link to='#'>GYM SHOES</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 mt-1">
                  <Link to='#'>JORDAN SHOES</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='2' md='3' className='mb-4'>
          <div className="footer__quick-links">
              <h4 className="quick-links-title">Useful Links</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0 mt-1">
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 mt-1">
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 mt-1">
                  <Link to='/login'>Login</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 mt-1">
                  <Link to='#'>Privacy & Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='3' md='4'>
          <div className="footer__quick-links">
              <h4 className="quick-links-title">Contact</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 mt-1 d-flex align-items-center gap-2">
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>xyz, Random Address, India</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 mt-1 d-flex align-items-center gap-2">
                <span><i class="ri-phone-line"></i></span>
                <p>+91 0123456789</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 mt-1 d-flex align-items-center gap-2">
                <span><i class="ri-mail-line"></i></span>
                <p>nikeshoesmail@mail.com</p>
                </ListGroupItem>

                </ListGroup>
            </div>
          </Col>

          <Col  lg='12'>
            <p className="footer__copyright">
              Copyright @{year} developed by Sarvesh Dusane. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
