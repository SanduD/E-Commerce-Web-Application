import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {getUserDetails, updateUserProfile} from '../actions/userActions'
import {Eye, EyeSlash} from 'react-bootstrap-icons'

const ProfileScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const [showPassword_1, setShowPassword_1] = useState(false)
  const [showPassword_2, setShowPassword_2] = useState(false)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const {loading, error, user} = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const {userInfo} = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const {success} = userUpdateProfile

  //const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    } else {
      if (!user.name) {
        dispatch(getUserDetails('profile'))
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [navigate, userInfo, dispatch, user])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Parolele nu coincid!')
    } else {
      dispatch(updateUserProfile({id: user._id, name, email, password}))
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
    <Row>
      <Col md={4}>
        <h2 className='text-center'>Profil</h2>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {success && <Message variant='success'>Profil actualizat!</Message>}
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
                placeholder='Parola Noua'
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
                placeholder='Confirma parola'
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
            Update
          </Button>
        </Form>
      </Col>

      <Col md={8}>Comenzi</Col>
    </Row>
  )
}

export default ProfileScreen
