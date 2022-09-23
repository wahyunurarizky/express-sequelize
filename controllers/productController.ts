import {Request, Response} from "express"
import Product from "../db/models/Product"

const createProduct = async (req: Request, res: Response) => {
    const {name, quantity} = req.body

    const data = await Product.create({
        name,
        quantity
    })

    res.status(200).json({
        "success": true,
        "message": "Product create successfully",
        data
    })
}

const getAllProduct = async (req: Request, res: Response) => {
    const data = await Product.findAll()

    res.status(200).json({
        "success": true,
        "message": "get all successfully",
        data
    })
}

const deleteProduct = async (req: Request, res: Response) => {
    await Product.destroy({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({
        "success": true,
        "message": "Product deleted successfully",
    })
}

const showProduct = async (req: Request, res: Response) => {
    const data = await Product.findByPk(req.params.id)

    res.status(200).json({
        "success": true,
        "message": "Product get successfully",
        data
    })
}

const updateProduct = async (req: Request, res: Response) => {
    const {name, quantity} = req.body

    const data = await Product.findByPk(req.params.id)
    data?.update({
        name, quantity
    })

    res.status(200).json({
        "success": true,
        "message": "Product updated successfully",
        data
    })
}

export {getAllProduct, createProduct, deleteProduct, showProduct, updateProduct}
