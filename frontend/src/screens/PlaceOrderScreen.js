import React, {useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Button, Row, Col, ListGroup, Image, Card} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import CheckoutSteps from '../components/CheckoutSteps'
import {createOrder} from '../actions/orderActions'

const PlaceOrderScreen = () => {
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)

  const navigate = useNavigate()

  if (!cart.shippingAddress.address) {
    navigate('/shipping')
  } else if (!cart.paymentMethod) {
    navigate('/payment')
  }

  // Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }

  const itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  )
  const shippingPrice = addDecimals(itemsPrice > 100 ? 0 : 6)
  const taxPrice = addDecimals(Number((0.01 * itemsPrice).toFixed(2)))
  const totalPrice = (
    Number(itemsPrice) +
    Number(shippingPrice) +
    Number(taxPrice)
  ).toFixed(2)

  const updatedCart = {
    ...cart,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  }

  const orderCreate = useSelector((state) => state.orderCreate)
  const {order, success, error} = orderCreate

  useEffect(() => {
    if (success) {
      navigate(`/order/${order._id}`)
    }
  }, [navigate, success, order])

  const placeOrderHandler = () => {
    console.log('order placed')
    dispatch(
      createOrder({
        orderItems: updatedCart.cartItems,
        shippingAddress: updatedCart.shippingAddress,
        paymentMethod: updatedCart.paymentMethod,
        itemsPrice: updatedCart.itemsPrice,
        shippingPrice: updatedCart.shippingPrice,
        taxPrice: updatedCart.taxPrice,
        totalPrice: updatedCart.totalPrice,
      })
    )
  }

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Adresa de livrare</h2>
              <p>
                <strong>Adresa: </strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.city}{' '}
                {cart.shippingAddress.postalCode},{' '}
                {cart.shippingAddress.country}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Metoda de plata</h2>
              <strong>Metoda: </strong>
              {cart.paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Produse comandate</h2>
              {cart.cartItems.length === 0 ? (
                <Message>Cosul tau este gol</Message>
              ) : (
                <ListGroup variant='flush'>
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x {item.price * 4} = RON{' '}
                          {item.qty * item.price * 4}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Rezumat comanda</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Produse</Col>
                  <Col>{cart.itemsPrice * 4} RON</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Taxa livrare</Col>
                  <Col>{cart.shippingPrice * 4} RON</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Alte taxe</Col>
                  <Col>{cart.taxPrice * 4} RON</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>{cart.totalPrice * 4} RON</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {error && <Message variant='danger'>{error}</Message>}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn-block'
                  disabled={cart.cartItems === 0}
                  onClick={placeOrderHandler}
                >
                  Plaseaza comanda
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default PlaceOrderScreen
