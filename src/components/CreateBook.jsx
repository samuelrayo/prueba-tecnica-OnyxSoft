
import CreatedOk from './CreatedOk'
import { useState } from 'react'
function CreateBook() {
    const [created, setCreated] = useState(false);


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
            const responsePost = await fetch('http://localhost:4001/books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: formStringify
            })
            console.log(formStringify)
            if (responsePost.ok) {
                const responseData = await responsePost.json();
                console.log('Respuesta del servidor:', responseData);
                setCreated(true)
            } else {
                console.error('ERRORORORORORO')
            }

        }
        catch (error) {
            console.error(error)
        }
    }
    return (
        <article>
            CreateBook
            <form action="/" method='POST' onSubmit={handleSubmit}>
                <input type="text" name='title' placeholder='De la brevedad de la vida' />
                <input type="text" name='author' placeholder='Séneca' />
                <input type="number" name='year' placeholder='2014' />
                <input type="text" name='genre' placeholder='Familiar' />
                <input type="text" name='image' placeholder='La url de tu imagen ;)' />

                <button type="submit">
                    Enviar!
                </button>
            </form>

            {created && (<CreatedOk />)}
        </article>
    )
}

export default CreateBook