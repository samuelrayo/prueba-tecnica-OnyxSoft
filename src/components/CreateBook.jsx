
import { XIcon } from '../icons/icons';
import CreatedOk from './CreatedOk'
import { useState, useRef } from 'react'
import { useContextCreate } from '../context/context'

function CreateBook() {
    const [created, setCreated] = useState(false);
    const { setShowCreateBook } = useContextCreate()
    const formRef = useRef(null)
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const dataForm = new window.FormData(e.target)
            Object.fromEntries
            const typeOfData = {
                title: dataForm.get('title'),
                author: dataForm.get('author'),
                year: parseInt(dataForm.get('year')),
                genre: dataForm.get('genre'),
                image: dataForm.get('image')
            }

            const formStringify = JSON.stringify(typeOfData)
            if (formStringify === formRef.current) return

            const responsePost = await fetch('http://localhost:4001/books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: formStringify
            })
            if (responsePost.ok) {
                formRef.current = formStringify
                const responseData = await responsePost.json();
                setCreated(true)
                return responseData
            } else {
                console.error(`No se ha podido crear, Error Code: ${ responsePost.status }`);
            }

        }
        catch (error) {
            console.error(error)
        }
    }


    const handleClose = () => {
        setShowCreateBook(false)
    }

    return (
        <article className='article__form'>
            <div className="form__info" onClick={handleClose}>
                Crear libro
                <XIcon />
            </div>
            <form action="/" method='POST' onSubmit={handleSubmit} className='form_container' ref={formRef}>
                <label htmlFor="title">Título</label>
                <input type="text" name='title' placeholder='De la brevedad de la vida' className='inputForm' />

                <label htmlFor="author">Autor:</label>
                <input type="text" name='author' placeholder='Séneca' className='inputForm' />

                <label htmlFor="year">Año</label>
                <input type="number" name='year' placeholder='2014' className='inputForm' />

                <label htmlFor="genre">Género</label>
                <select name={'genre'} className='inputForm'>
                    <option value="Ficción">Ficción</option>
                    <option value="Familiar">Familiar</option>
                    <option value="Biografía">Biografía</option>
                    <option value="Thriller">Thriller</option>
                </select>

                <label htmlFor="image">Imagen</label>
                <input type="text" name='image' placeholder='La url de tu imagen ;)' className='inputForm' />

                <button type="submit" className='submitButton'>
                    Enviar!
                </button>

            </form>

            {created && (<CreatedOk />)}
        </article>
    )
}

export default CreateBook