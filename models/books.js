import { readBooks } from "../utils/utils.js"
import { writeInToJSONPost, writeInToJSON } from '../utils/utils.js'
import crypto from 'node:crypto'



const books = readBooks('../booksList.json')

export class BooksModel {
    static async getAll() {
        const data = await books
        return data

    }
    static async createBook({ query }) {
        const newBook = {
            id: crypto.randomUUID(),
            ...query
        }
        /*         await books.push(newBook) */
        await writeInToJSONPost(newBook)
        return newBook
    }
    static async updateBook({ id, query }) {
        const findBook = books.findIndex(book => book.id === id)
        if (findBook === -1) return false

        const booksUpdated = books[findBook] = { ...books[findBook], ...query }
        console.log(books[findBook])
        writeInToJSON(booksUpdated)
        return books[findBook]
    }
    static async deleteBook({ id }) {
        const deletedBook = books.findIndex(book => book.id === id)
        if (deletedBook === -1) return false
        books.splice(deletedBook, 1)
        writeInToJSON(books)
        return books
    }

}