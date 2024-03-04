import { BooksModel } from "../models/books.js"


const getAll = async (req, res) => {
    try{
        const books = await BooksModel.getAll()
        res.json(books)
    }
    catch(e){
        throw new Error(e.message)
    }
}

export { getAll }