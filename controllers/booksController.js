import { BooksModel } from "../models/books.js"
import { validateData, validatePartialData } from "../schema/booksSchema.js"


const getAll = async (req, res) => {
    try {
        const { genre } = req.query;
        if (genre) {
            const genreBooks = await BooksModel.getAll({ genre });
            if (genreBooks.length === 0) {
                return res.status(404).json({ Error: `No se encontraron libros para el género "${ genre }"` });
            }
            return res.status(200).json(genreBooks);
        } else {
            const books = await BooksModel.getAll();
            return res.status(200).json(books);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
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
        const { id } = req.params
        const data = validatePartialData(req.body)

        if (!data.success) {
            return res.status(400).json({ error: data.error })
        }
        const updatedData = await BooksModel.updateBook({ id, query: data.data })

        if (updateBook === false) {
            return res.status(404).json({ error: `Este libro con el id ${ id } no existe` })
        }

        return res.status(201).json(updatedData)
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
        return res.status(201).json(deletedBook)
    } catch (e) {
        throw new Error(e.message)
    }
}


/* const getByGenre = async (req, res) => {
    try {
        const { genre } = req.query
        const genreBooks = await BooksModel.getByGenre({ genre })
        if (genreBooks.length === 0) {
            return res.status(404).json({ Error: `El genero ${ genre } no coincide` })
        }

        return res.status(201).json(genre)

    } catch (e) {
        throw new Error(console.error(e))
    }
} */
export { getAll, createBook, updateBook, deleteBook }