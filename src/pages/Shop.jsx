import React, {useState} from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from "reactstrap";
import '../styles/shop.css';

import products from '../assets/data/products'
import ProductsList from '../components/UI/ProductsList'

const Shop = () => {

  const [productsData, setProductsData] = useState(products)

  const handleFilter = e=>{
    const filterValue = e.target.value
      if(filterValue==="AirForce"){
        const filteredProducts = products.filter((item)=> item.category === "AirForce");
        setProductsData(filteredProducts);
      }
      if(filterValue==="Air Jordan High"){
        const filteredProducts = products.filter((item)=> item.category === "Air Jordan High");
        setProductsData(filteredProducts);
      }
      if(filterValue==="Air Jordan Low"){
        const filteredProducts = products.filter((item)=> item.category === "Air Jordan Low");
        setProductsData(filteredProducts);
      }
      if(filterValue==="Air Max"){
        const filteredProducts = products.filter((item)=> item.category === "Air Max");
        setProductsData(filteredProducts);
      }
      if(filterValue==="Jordan"){
        const filteredProducts = products.filter((item)=> item.category === "Jordan");
        setProductsData(filteredProducts);
      }
      

  }



  const handleSearch = e =>{
    const searchTerm = e.target.value

    const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

    setProductsData(searchedProducts)
  }

  return <Helmet title='Shop'>
    <CommonSection title='Products'/>
 
    <section>
      <Container>
        <Row>
          <Col lg='3' md='6'>
            <div className="filter__widget">
              <select onChange={handleFilter}>
                <option>Filter by Category</option>
                <option value="AirForce">AirForce</option>
                <option value="Air Jordan High">Air Jordan High</option>
                <option value="Air Jordan Low">Air Jordan Low</option>
                <option value="Air Max">Air Max</option>
                <option value="Jordan">Jordan</option>
              </select>
            </div>
          </Col>
          <Col lg='3' md='6' className='text-end'>
          <div className="filter__widget">
              <select>
                <option>Sort by </option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </Col>
          <Col lg='6' md='12'>
            <div className="search__box">
              <input type='text' placeholder='Search...' onChange={handleSearch}/>
              <span><i class="ri-search-line"></i></span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className='pt-0'>
      <Container>
        <Row>
          {
            productsData.length ===0? <h1 className='text-center fs-3'>No Products Found..!!</h1>
            :<ProductsList data={productsData}/>
          }
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Shop
