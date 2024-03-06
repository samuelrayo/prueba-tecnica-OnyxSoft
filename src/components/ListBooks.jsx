
import useBooks from '../hooks/useBooks'

import { useContextCreate } from '../context/context'
import { AddIcon, XIcon } from '../icons/icons'
function ListBooks() {
    const { books } = useBooks()
    const { setShowCreateBook } = useContextCreate()

    const handlePlus = () => {
        setShowCreateBook(true)
    }

    const handleX = async (id) => {
        try {
            const result = await fetch(`http://localhost:4001/books/${ id }`, {
                method: 'DELETE',
            })
            if (result.ok) {
                console.log('Eliminado', result)
            } else {
                console.error('ERRORORORORORO')
            }
        }
        catch (e) {
            console.error(e)
        }

    }


    return (
        <section className='section__books'>
            <ul className='container__books'>
                {books.map(book => (
                    <>
                        <li key={book.id} className='bookLi'>
                            <div className='container__text'>
                                <h1 className='title'>{book.title}</h1>
                                <h4 className='author'>{book.author}</h4>
                                <span>{book.year}</span>
                                <br />
                                <span className='genre__book'>{book.genre}</span>
                            </div>
                            <div className='container__image'>
                                <img src={book.image} className='image__book' alt={book.title} />
                                <div className="container__icon" onClick={() => handleX(book.id)}>
                                    <XIcon />
                                </div>
                            </div>

                        </li>
                    </>
                ))
                }
            </ul>
            <div className='icon__plus' onClick={handlePlus}>
                <AddIcon />
            </div>

        </section>
    )
}

export default ListBooks