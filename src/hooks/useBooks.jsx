import { useEffect, useState } from "react"


function useBooks() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        if (!books) return

        fetch('http://localhost:4001/books')
            .then(res => res.json())
            .then(data => {
                setBooks(data)
            })
            .catch(error => console.error(error))

    }, [])
    return {
        books
    }
}

export default useBooks