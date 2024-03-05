import React from 'react'
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Products = () => {

    const [products, getProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((data) => data.json())
            .then((result) => getProducts(result));
    })

    const cards = products.map((product) => {
        return <div className='col-md-3 my-3'>
            <Card key={product.id} className='h-100' style={{ width: '18rem' }}>
                <div>
                    <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        DH: {product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='bg-white border-0'>
                    <Button variant="primary">Add To Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    })
    return (
        <div>
            <h1>Products</h1>
            <div className='row'>
                {cards}
            </div>
        </div>
    )
}

export default Products