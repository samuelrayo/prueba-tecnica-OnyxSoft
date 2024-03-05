import { Router } from 'express'

import  { getAll, createBook}  from '../controllers/booksController.js'

export const booksRouter = Router()


booksRouter.get('/', getAll)
booksRouter.post('/', createBook)