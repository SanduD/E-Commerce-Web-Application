import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import {Link, useParams, useLocation, useNavigate} from 'react-router-dom'
import {Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import {addToCart, removeFromCart} from '../actions/cartActions'

const CartScreen = () => {
  const match = useParams()
  const navigate = useNavigate()

  const productId = match.id

  const location = useLocation()
  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)

  const {cartItems} = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    navigate('/login', {state: {redirect: '/shipping'}})
  }

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            {' '}
            Shopping cart is empty! <Link to='/'>Continue shopping</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>

                  <Col md={3}>
                    <Link
                      to={`/product/${item.product}`}
                      style={{textDecoration: 'none'}}
                    >
                      {item.name}
                    </Link>
                  </Col>

                  <Col md={2}>{item.price} $</Col>

                  <Col md={2}>
                    <Form.Control
                      as='select'
                      className='form-select-sm'
                      value={item.qty}
                      size='5'
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>

                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>

      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                Subtotal (
                {cartItems.reduce(
                  (accumulator, item) => accumulator + item.qty,
                  0
                )}
                ) articles
              </h2>
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
              $
            </ListGroup.Item>

            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default CartScreen
