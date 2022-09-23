import {Router} from "express"
import {
    createProduct,
    deleteProduct,
    getAllProduct,
    showProduct,
    updateProduct
} from "../../controllers/productController"

const router = Router()
router.get('/', getAllProduct)
router.post('/', createProduct)
router.delete('/:id', deleteProduct)
router.get('/:id', showProduct)
router.patch('/:id', updateProduct)

export default router
