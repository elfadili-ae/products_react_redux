import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { remove } from '../store/cartSlice';

const Cart = () => {
    const products = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const removeFromCart = (id) => {
        dispatch(remove(id));
    }
    const cards = products.map((product) => {
        return <div className='col-md-12 my-3'>
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
                    <Button variant="danger" onClick={() => removeFromCart(product.id)}>Remove Item</Button>
                </Card.Footer>
            </Card>
        </div>
    })
    return (
        <div>
            <h1>Cart</h1>
            <div>
                {cards}
            </div>
        </div>
    )
}

export default Cart