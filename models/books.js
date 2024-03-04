
import { readBooks } from "../utils/utils.js"

const books = readBooks('../books.json')


export class BooksModel {
    static async getAll(){
            return books
    }
}