/* import { useState } from "react"
import initialBooks from "../../booksList.json"


export default function useFilter() {
    const [books] = useState(initialBooks)

    const ranges = {
        option1: books.filter(book => book.year >= 1990 && book.year <= 2000)
    }

    const initialObject = {
        genre: 'all',
        rangeYear: ranges
    }

    const [filter, setFilter] = useState(initialObject)

    const filterBooks = (filter) => {
        return filter.filter(book => book.genre === 'all' &&
            (
                filter.genre === 'all' || book.genre === filter.genre
            ))
    }


    const booksFiltered = filterBooks(books)


    return { filter, booksFiltered, filterBooks, setFilter }

}


 */