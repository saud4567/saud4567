import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Helmet from "../components/Helmet/Helmet";
import heroImg from "../assets/images/airforce3.webp";
import "../styles/home.css";
import Services from "../services/Services";

import { Container, Row, Col } from "reactstrap";
import ProductsList from "../components/UI/ProductsList";

import counterImg from "../assets/images/countershoe.png";
import Clock from "../components/UI/Clock";

import useGetData from "../custom-hooks/useGetData";

const Home = () => {

  const { data: products, loading } = useGetData("products")

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [tableProducts, setTableProducts] = useState([]);

  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "AirForce"
    );

    const filteredBestsalesProducts = products.filter(
      (item) => item.category === "Air Jordan High"
    );

    const filteredTableProducts = products.filter(
      (item) => item.category === "Air Jordan Low"
    );

    const filteredPopularProducts = products.filter(
      (item) => item.category === "Air Max"
    );

    setTrendingProducts(filteredTrendingProducts);

    setBestSalesProducts(filteredBestsalesProducts);

    setTableProducts(filteredTableProducts);

    setPopularProducts(filteredPopularProducts);
  }, [products]);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending Sneaker in {year}</p>
                <h2>STEP INTO WHAT
                  FEELS GOOD</h2>
                <p>
                The radiance lives on in the Nike Air Force 1 '07, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold colours and the perfect amount of flash to make you shine. Textured, pebbly leather with classic blue and fresh white adds heritage style, durability and support.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />

      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>

            {
              loading ? <h4 className="fw-bold">Loading......</h4> :
                <ProductsList data={trendingProducts} />
            }

          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Best Sales</h2>
            </Col>

            {
              loading ? <h4 className="fw-bold">Loading......</h4> :
                <ProductsList data={bestSalesProducts} />
            }
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className='count__down-col'>
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limited offers</h4>
                <h3 className="text-white fs-5 mb-3">SNEAKERS</h3>
              </div>
              <Clock />

              <motion.button
                whileHover={{ scale: 1.1 }}
                className="buy__btn store__btn"
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>

            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">New Arrivals</h2>
            </Col>
            {
              loading ? <h4 className="fw-bold">Loading......</h4> :
                <ProductsList data={tableProducts} />
            }

          </Row>
        </Container>
      </section>

      <section className="popular__catrgory">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Popular Products</h2>
            </Col>
            {
              loading ? <h4 className="fw-bold">Loading......</h4> :
                <ProductsList data={popularProducts} />
            }

          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
