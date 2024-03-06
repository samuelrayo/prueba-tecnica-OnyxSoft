import './App.css'
import { useContextCreate } from './context/context'
import LandBook from './components/LandBook'
import ListBooks from './components/ListBooks'
import CreateBook from './components/CreateBook'
function App() {
  const { showCreateBook } = useContextCreate()
  return (
    <>

      <main className='container__main'>
        <div className={`landBooks ${ showCreateBook ? 'blur' : '' }`}>
          <LandBook />
          <ListBooks />
        </div>
        {showCreateBook && <CreateBook />}
      </main>

    </>
  )
}

export default App
