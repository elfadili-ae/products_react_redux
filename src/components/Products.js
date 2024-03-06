import React from 'react'
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';
import statusCode from '../utils/statusCode';
import { Alert } from 'react-bootstrap';

const Products = () => {

    const dispatch = useDispatch();
    const { data: products, status } = useSelector(state => state.products);
    // const [products, getProducts] = useState([]);
    useEffect(() => {
        dispatch(getProducts())
    }, [])


    if (status === statusCode.LOADING) {
        return <Alert key='default' >Loading...</Alert>
    }
    if (status === statusCode.ERROR) {
        return <Alert key='danger' variant='danger'>Something went wrong, try again later!</Alert>
    }
    const addToCart = (product) => {
        dispatch(add(product));
    }
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
                    <Button variant="primary" onClick={() => { addToCart(product) }}>Add To Cart</Button>
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