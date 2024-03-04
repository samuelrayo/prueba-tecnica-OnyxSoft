import { Router } from 'express'

import  { getAll }  from '../controllers/booksController.js'

export const booksRouter = Router()


booksRouter.get('/', getAll)