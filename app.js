import express from 'express'
import { booksRouter } from './routes/booksRoutes.js'
import corsMiddleware from './middlewares/corsMiddleware.js'
import methodOverride from 'method-override';

const app = express()
app.use(corsMiddleware)
app.use(express.json())
app.disable('x-powered-by')
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }))


app.use('/books', booksRouter)

const PORT = process.env.PORT ?? 4001


app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${ PORT }`)
})