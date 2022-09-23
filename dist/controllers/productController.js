"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.showProduct = exports.deleteProduct = exports.createProduct = exports.getAllProduct = void 0;
const Product_1 = __importDefault(require("../db/models/Product"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, quantity } = req.body;
    const data = yield Product_1.default.create({
        name,
        quantity
    });
    res.status(200).json({
        "success": true,
        "message": "Product create successfully",
        data
    });
});
exports.createProduct = createProduct;
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield Product_1.default.findAll();
    res.status(200).json({
        "success": true,
        "message": "get all successfully",
        data
    });
});
exports.getAllProduct = getAllProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield Product_1.default.destroy({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json({
        "success": true,
        "message": "Product deleted successfully",
    });
});
exports.deleteProduct = deleteProduct;
const showProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield Product_1.default.findByPk(req.params.id);
    res.status(200).json({
        "success": true,
        "message": "Product get successfully",
        data
    });
});
exports.showProduct = showProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, quantity } = req.body;
    const data = yield Product_1.default.findByPk(req.params.id);
    data === null || data === void 0 ? void 0 : data.update({
        name, quantity
    });
    res.status(200).json({
        "success": true,
        "message": "Product updated successfully",
        data
    });
});
exports.updateProduct = updateProduct;
