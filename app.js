import express from 'express'
import { booksRouter } from './routes/booksRoutes.js'

const app = express()
app.use(express.json())

app.disable('x-powered-by')


app.use('/books', booksRouter)

const PORT = process.env.PORT ?? 8080

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`)
})