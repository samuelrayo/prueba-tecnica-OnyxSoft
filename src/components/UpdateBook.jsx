
import { XIcon } from '../icons/icons';
import { useRef } from 'react'
import { useContextCreate } from '../context/context'

function UpdateBook({ bookId }) {
    const { setSelectedBookId } = useContextCreate()
    const formRef = useRef(null)

    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            const dataForm = new window.FormData(e.target)

            const typeOfData = {
                title: dataForm.get('title') || '',
                author: dataForm.get('author') || '',
                year: dataForm.get('year') || '',
                genre: dataForm.get('genre') || '',
                image: dataForm.get('image') || ''
            }

            const formStringify = JSON.stringify(typeOfData)

            const responsePost = await fetch(`http://localhost:4001/books/${ bookId }`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: formStringify
            })
            console.log(formStringify)
            if (responsePost.ok) {
                const responseData = await responsePost.json();
                return responseData
            } else {
                console.error('error !', responsePost.status);
            }

        }
        catch (error) {
            console.error(error)
        }
    }




    const handleClose = () => {
        setSelectedBookId(false)
    }
    return (
        <article className='article__form'>
            <div className="form__info" onClick={handleClose}>
                Actualizar Libro
                <XIcon />
            </div>
            <form action="/" method='PATCH' onSubmit={handleUpdate} className='form_container' ref={formRef}>
                <label>Título:</label>
                <input type="text" name='title' className='inputForm' />

                <label>Autor:</label>
                <input type="text" name='author' className='inputForm' />

                <label>Año:</label>
                <input type="number" name='year' className='inputForm' />

                <label>Género:</label>
                <input type="text" name='genre' className='inputForm' />

                <label>Imagen:</label>
                <input type="text" name='image' className='inputForm' />

                <button type="submit" className='submitButton'>
                    Actualizar!
                </button>

            </form>

        </article>
    )
}

export default UpdateBook