/* 

const response = fetch('http://localhost:4001/books', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook)
}).then(res => res.json())
    .then(data => {
        setBooks(data)
    })
    .catch(error => console.error(error)) */


const responsePost = fetch('http://localhost:4001/books', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook)
})

export default responsePost