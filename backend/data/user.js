import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Dragos Sandu',
    email: 'dragos@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Radu Toader',
    email: 'radut@yahoo.com',
    password: bcrypt.hashSync('123456', 10),
  },
]
export default users
