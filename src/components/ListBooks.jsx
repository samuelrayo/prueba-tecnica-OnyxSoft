
import CreateBook from './CreateBook'
import useBooks from '../hooks/useBooks'

import { AddIcon } from '../icons/icons'
import { useState } from 'react'
function ListBooks() {
    const { books } = useBooks()
    const [showCreateBook, setShowCreateBook] = useState(false)

    const handlePlus = () => {
        setShowCreateBook(true);
    }
    return (
        <section>
            <ul className='container__books'>
                {books.map(book => (
                    <>
                        <li key={book.id}>
                            <div className='container__text'>
                                <h1 className='title'>{book.title}</h1>
                                <h4>{book.author}</h4>
                                <span>{book.year}</span>
                                <br />
                                <span>{book.genre}</span>
                            </div>
                            <img src={book.image} className='image__book' alt={book.title} />
                        </li>
                    </>
                ))
                }
            </ul>
            <div className='icon__plus' onClick={handlePlus}>
                <AddIcon />
            </div>
            {showCreateBook && <CreateBook />}
        </section>
    )
}

export default ListBooks