import './App.css'
import { useContextCreate } from './context/context'
import LandBook from './components/LandBook'
import ListBooks from './components/ListBooks'
import CreateBook from './components/CreateBook'
import UpdateBook from './components/UpdateBook'
function App() {
  const { showCreateBook, selectedBookId } = useContextCreate()
  return (
    <>

      <main className='container__main'>
        <div className={`landBooks ${ showCreateBook || selectedBookId ? 'blur' : '' }`}>
          <LandBook />
          <ListBooks />
        </div>
        {showCreateBook && <CreateBook />}
        {selectedBookId && <UpdateBook bookId={selectedBookId} />}
      </main>

    </>
  )
}

export default App
