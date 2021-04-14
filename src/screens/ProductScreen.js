import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import products from '../products'

//creates individual product pages

const ProductScreen = ({ match }) => {
    
        const product = products.find(p => p._id ===match.params.id)
    return <>
        
        <Row >
            <Col md={4} className='prod'>
                <Image className='prod' src={product.image} alt={product.name} fluid/>
            </Col>
            <Col className ='borderstyle' md={8}>
                <ListGroup className='prod' variant='flush' />
                <ListGroup.Item className='prod' fluid><h3>{product.name}</h3></ListGroup.Item>
                    
                    
                    
                <ListGroup.Item className='prod'><strong>Description: </strong> {product.description}</ListGroup.Item>
                   
                   
                
            
                    <ListGroup variant='flush' />
                    <ListGroup.Item className='prod'><strong>First Appearance:</strong><br/>{product.brand}</ListGroup.Item>
                    
                    <ListGroup.Item className='prod'><strong>Date purchased: </strong> {product.category}</ListGroup.Item>
                    
                    <Link className='btn my-3' to='/'>Go Back</Link>
                       </Col>    
                
                </Row>

        
        
      
    </>
    
}

export default ProductScreen
