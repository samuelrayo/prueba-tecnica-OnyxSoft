import { BooksModel } from "../models/books.js"
import { validateData, validatePartialData } from "../schema/booksSchema.js"


const getAll = async (req, res) => {
    try {
        const books = await BooksModel.getAll()
        await res.json(books)
    }
    catch (e) {
        throw new Error(e.message)
    }
}

const createBook = async (req, res) => {
    try {
        const data = validateData(req.body)

        if (!data.success) {
            return res.status(422).json({ error: data.error })
        }
        const newBook = await BooksModel.createBook({ query: data.data })
        res.status(201).json(newBook)
    }
    catch (e) {
        throw new Error(e.message)
    }
}

const updateBook = async (req, res) => {
    try {
        const data = validatePartialData(req.body)

        if (!data.success) {
            return res.status(400).json({ error: data.error })
        }
        const { id } = req.params

        const updatedData = await BooksModel.updateBook({ id, query: data.data })

        return res.json(updatedData)
    }
    catch (e) {
        throw new Error(e.message)
    }
}

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params
        const deletedBook = await BooksModel.deleteBook({ id })

        if (deletedBook === false) {
            return res.status(404).json({ error: `Este libro con el id ${ id } no existe` })
        }
        return res.json({ message: 'Libro  eliminado correctamente' })
    } catch (e) {
        throw new Error(e.message)
    }
}
export { getAll, createBook, updateBook, deleteBook }