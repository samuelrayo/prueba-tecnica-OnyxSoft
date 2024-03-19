import { readBooks } from "../utils/utils.js"
import { writeInToJSONPost, writeInToJSON } from '../utils/utils.js'
import crypto from 'node:crypto'



const books = readBooks('../booksList.json')

export class BooksModel {
    static async getAll({ genre, year }) {

        if (genre) {
            const filterByGenre = books.filter(book => book.genre === genre)
            return filterByGenre
        } else if (year) {
            const [startYear, endYear] = year.split('-').map(Number)
            const filteredByYear = books.filter(book => book.year >= startYear && book.year <= endYear)

            return filteredByYear
        }

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

        books[findBook] = { ...books[findBook], ...query }
        writeInToJSON(books)
        return books
    }
    static async deleteBook({ id }) {
        const deletedBook = books.findIndex(book => book.id === id)
        if (deletedBook === -1) return false
        books.splice(deletedBook, 1)
        await writeInToJSON(books)
        return books
    }


}