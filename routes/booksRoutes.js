import { Router } from 'express'

import { getAll, createBook, updateBook, deleteBook } from '../controllers/booksController.js'

export const booksRouter = Router()


booksRouter.get('/', getAll)
booksRouter.post('/', createBook)
booksRouter.patch('/:id', updateBook)
booksRouter.delete('/:id', deleteBook)