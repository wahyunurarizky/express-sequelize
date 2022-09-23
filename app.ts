import express, {Express} from "express"
import path from "path"
import cookieParser from "cookie-parser"
import logger from "morgan"
import productRouter from "./routes/api/productRouter"

const app: Express = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

//ROUTER
app.use('/api/v1/products', productRouter)

export default app
