import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//creates the front page UI
const Product = ( { product }) => {
    return (
       <Card className='my-3 p-3 rounded prod prodAn'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' /></Link>
               <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title className='cardtitle' as='div'><strong>{product.name}</strong>
                    </Card.Title></Link>

               </Card.Body>
           

       </Card>
    )
}

export default Product