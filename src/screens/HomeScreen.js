import React from 'react';
import products from'../products';
import Product from '../components/Product'
import { Row, Col } from 'react-bootstrap';
import Loader from '../components/Loader'

export const HomeScreen = () => {
    return (
        <>
        
        <h1>The Current Hoard</h1>
        <Row>
            {products.map(product =>
                <Col key= {product._id}sm={12} md={6} lg={4} xl={3} >
                <Product product = {product}/>
                </Col>)}
        </Row>
            
        </>
    )
    
            }

export default HomeScreen