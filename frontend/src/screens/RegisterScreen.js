import React, {useState, useEffect} from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {register} from '../actions/userActions'
import {Eye, EyeSlash} from 'react-bootstrap-icons'

const RegisterScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const [showPassword_1, setShowPassword_1] = useState(false)
  const [showPassword_2, setShowPassword_2] = useState(false)

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)

  const {loading, error, userInfo} = userRegister
  const location = useLocation()
  const navigate = useNavigate()

  const redirect = location.search ? location.search.split('=')[1] : '/'
  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Parolele nu coincid!')
    } else {
      dispatch(register(name, email, password))
      setMessage(null)
    }
  }

  const togglePasswordVisibility_1 = () => {
    setShowPassword_1(!showPassword_1)
  }
  const togglePasswordVisibility_2 = () => {
    setShowPassword_2(!showPassword_2)
  }

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Nume si Prenume</Form.Label>
          <Form.Control
            type='name'
            placeholder='Introduceti numele si prenumele'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Adresa de email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Introduceti adresa de email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Parola</Form.Label>
          <div className='d-flex'>
            <Form.Control
              type={showPassword_1 ? 'text' : 'password'}
              placeholder='Introduceti parola'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
            <Button
              variant='dark'
              onClick={togglePasswordVisibility_1}
              className='ml-2'
            >
              {showPassword_1 ? <EyeSlash /> : <Eye />}
            </Button>
          </div>
        </Form.Group>

        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirma Parola</Form.Label>
          <div className='d-flex'>
            <Form.Control
              type={showPassword_2 ? 'text' : 'password'}
              placeholder='Introduceti parola din nou'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
            <Button
              variant='dark'
              onClick={togglePasswordVisibility_2}
              className='ml-2'
            >
              {showPassword_2 ? <EyeSlash /> : <Eye />}
            </Button>
          </div>
        </Form.Group>

        <Button type='submit' variant='primary' className='mt-3'>
          Register
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          Aveti deja un cont?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default RegisterScreen
