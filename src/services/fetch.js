export const fetchData = async () => {

    fetch('https://localhost:4001').then(res => res.json())
        .then(data => {
            setBooks(data)
        })
        .catch(error => console.error(error))
}
fetchData()