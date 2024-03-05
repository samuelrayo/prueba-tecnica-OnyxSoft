

/* import { fetchData } from './services/fetch' */
import './App.css'
import useBook from './hooks/useBooks'

function App() {
  const { books } = useBook()
  return (
    <>
      <main>

        {books.map((book, key) => (
          <>

            <h1>{book.title}</h1>
            <img src={book.image} alt="image book" key={key} />
          </>
        ))

        }
      </main>
    </>
  )
}

export default App
