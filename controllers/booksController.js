import { BooksModel } from "../models/books.js"
import { validateData } from "../schema/booksSchema.js"


const getAll = async (req, res) => {
    try{
        const books = await BooksModel.getAll()
        res.json(books)
    }
    catch(e){
        throw new Error(e.message)
    }
}

const createBook = async(req, res) => {
    try{
        const data = validateData(req.body)

        if(!data.success){
            return res.status(422).json({error: data.error})
        }
        const newBook = await BooksModel.createBook({query: data.data})
        console.log(data.data)
       res.status(201).json(newBook)
    }
    catch(e){
        throw new Error(e.message)
    }
}
export { getAll, createBook }