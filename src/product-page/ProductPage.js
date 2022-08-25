import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from "../context/shopContext";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from 'react-bootstrap/esm/Button';

import './ProductPage.css';


const ProductPage = () => {
  let {handle} = useParams();
  const { fetchProductWithId, addItemToCheckout, product } = useContext(ShopContext)

  useEffect(() => {
    fetchProductWithId(handle)
    
    // fetchData()
    return () => {
        // setProduct(null)
    };
}, [ fetchProductWithId, handle])

if (!product.title) return <div>Loding...</div>
  return (
    <>
      <Container className='productSingle'>
        <Row>
          <Col xl={7} className='produtimagediv'>
            <img src={product.images[0].src}/>
           
          </Col>
          <Col className='proddetail'>
            <h2>{product.title}</h2> 
            <div className='prod-description'>
              {product.description}
            </div>
             <div className='pricediv'> {product.variants[0].priceV2.currencyCode} {product.variants[0].price} </div>   
             <Button onClick={() => addItemToCheckout(product.variants[0].id, 1)}>Add To Cart</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ProductPage