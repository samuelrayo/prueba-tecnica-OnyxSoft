
import { readBooks } from "../utils/utils.js"
import crypto from 'node:crypto'



const books = readBooks('../books.json')

export class BooksModel {
    static async getAll(){
            return books
    }
    static async createBook({ query }){
        const newBook = {
            id: crypto.randomUUID(),
            ...query
        }
        books.push(newBook)
        return newBook
    }
    static async updateBook({id, query}){
        const findBook = books.findIndex(book => book.id === id)
        if (findBook === -1) return false

        books[findBook] = {...books[findBook] , ...query}  
        
        return books[findBook]
    }

}