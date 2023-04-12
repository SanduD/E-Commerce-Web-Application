import express from 'express'
import {
  getProducts,
  getProductById,
  getTopProducts,
} from '../controllers/productController.js'

const router = express.Router()

router.route('/').get(getProducts)
router.get('/top', getTopProducts)

router.route('/:id').get(getProductById)

export default router
