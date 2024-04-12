

import React from 'react'
import { CartProvider , useCart } from 'react-use-cart';
import { Col, Container, Row } from 'reactstrap';
import Subnav from '../Subnav';
import AllNav from "../AllNav";

function Cart() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        emptyCart,
        totalItems,
        cartTotal,
    } = useCart();

    if (isEmpty) return <p className='text-center'>Your cart is empty</p>;

    
    return (
        <div>
            <h1 className="text-center">Cart ({totalUniqueItems})
                <button className="btn btn-danger" onClick={() => emptyCart()}>delete all</button>
            </h1>
            <Container>
                <Row>
                    <Col md="10" className="m-auto">
                        <table className="table">
                            <thead style={{ backgroundcolor: "black"}}>
                                <tr>
                                    <th>images</th>
                                    <th>name</th>
                                    <th>quantity</th>
                                    <th>price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item) => (
                                    <tr key={item.id}>
                                        <th><img src={item.img} alt='' style={{ height: "60px", with: "60px" }}></img></th>
                                        <th>{item.title}</th>
                                        <td>{item.quantity}</td>
                                        <td>{item.price * item.quantity}</td>
                                        <td>
                                            <button
                                                className="btn btn-warning"
                                                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                            >
                                                -
                                            </button>
                                            <button
                                                className="btn btn-success mx-2"
                                                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                            >
                                                +
                                            </button>

                                            <button className="btn btn-danger" onClick={() => removeItem(item.id)}>&times; </button>
                                        </td>
                                    </tr>
                                ))}
                                <tr>
                                    <td>total</td>
                                    <td></td>
                                    <td>{totalItems}</td>
                                    <td>{cartTotal}</td>
                                    <td>
                                        <a href="/shoping" className="btn btn-primary">payment</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
            </div>
    );
    

};


function Carts() {
  return (
    <CartProvider>
        <Subnav />
        <AllNav/>
        <br/>
        <br/>
        <Cart/>
    </CartProvider>
  )
}

export default Carts