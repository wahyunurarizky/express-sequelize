import {DataTypes, Model, Optional} from 'sequelize'
import sequelizeConnection from '../config'

interface ProductAttributes {
    id: number;
    name: string;
    quantity: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface ProductInput extends Optional<ProductAttributes, 'id'> {
}

export interface ProductOutput extends Required<ProductAttributes> {
}

class Product extends Model<ProductAttributes, ProductInput> implements ProductAttributes {
    public id!: number
    public name!: string
    public quantity!: number

    public readonly createdAt!: Date
    public readonly updatedAt!: Date
    public readonly deletedAt?: Date
}

Product.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
}, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
})

export default Product