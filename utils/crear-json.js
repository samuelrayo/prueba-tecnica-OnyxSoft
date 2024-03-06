import fs from 'node:fs'

const json = [
    {
        "id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        "title": "The Silent Patient",
        "author": "Alex Michaelides",
        "year": "2019",
        "genre": "Thriller",
        "image": "https://m.media-amazon.com/images/I/91lslnZ-btL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": "0c2b8d03-16b6-4b3f-a9b8-531a2c3d479e",
        "title": "Where the Crawdads Sing",
        "author": "Delia Owens",
        "year": "2018",
        "genre": "Ficción",
        "image": "https://m.media-amazon.com/images/I/81e+mSqZvnL._AC_UF894,1000_QL80_.jpg"
    },
    {
        "id": "e4eaa5e6-2e2a-4b0f-8e3a-3d4d2c1b479a",
        "title": "Educated",
        "author": "Tara Westover",
        "year": "2018",
        "genre": "Biografía",
        "image": "https://m.media-amazon.com/images/I/71KCV+h6tzL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": "9e2f7d4c-5c5a-4b1f-8c6a-7a8b9c0d1e2f",
        "title": "Becoming",
        "author": "Michelle Obama",
        "year": "2018",
        "genre": "Biografía",
        "image": "https://images.cdn1.buscalibre.com/fit-in/360x360/b1/be/b1be523738c134b8bcbc32bc81661b97.jpg"
    },
    {
        "id": "3f4e5d6c-7b7a-4e4d-8c8b-9a9b0c1d2e3f",
        "title": "The Testaments",
        "author": "Margaret Atwood",
        "year": "2019",
        "genre": "Ficción",
        "image": "https://i.weltbild.de/p/the-testaments-341201810.jpg?v=1&wp=_max"
    },
    {
        "id": "5a4b3c2d-1e1f-4c4d-8b8a-9c9d0e1f2a3b",
        "title": "Normal People",
        "author": "Sally Rooney",
        "year": "2018",
        "genre": "Ficción",
        "image": "https://images.cdn3.buscalibre.com/fit-in/360x360/2b/c3/2bc3b954b5e7caeca998ec9ccdd1ea95.jpg"
    },
    {
        "id": "7c8d9e0f-1a2b-3c4d-5e6f-7a8b9c0d1e2",
        "title": "Circe",
        "author": "Madeline Miller",
        "year": "2018",
        "genre": "Ficción",
        "image": "https://nidodelibros.com/wp-content/uploads/2023/12/9789586890946.jpeg"
    },
    {
        "id": "b1a2b3c4-d5e6-7f8a-9b0c-1d2e3f4a5b6",
        "title": "The Institute",
        "author": "Stephen King",
        "year": "2019",
        "genre": "Ficción",
        "image": "https://images.cdn2.buscalibre.com/fit-in/360x360/40/8d/408db87547b912fa04941f838c366c65.jpg"
    },
    {
        "id": "c2d3e4f5-a6b7-8c9d-0e1f-2a3b4c5d6e",
        "title": "The Dutch House",
        "author": "Ann Patchett",
        "year": "2019",
        "genre": "Familiar",
        "image": "https://images.cdn3.buscalibre.com/fit-in/360x360/08/00/080028dbc617fc94d4fa37f7b100a33f.jpg"
    },
    {
        "id": "d3e4f5g6-b7a8-c9d0-e1f2-a3b4c5d6e7f",
        "title": "City of Girls",
        "author": "Elizabeth Gilbert",
        "year": "2019",
        "genre": "Ficción",
        "image": "https://m.media-amazon.com/images/I/81PlTDfGcbL._AC_UF1000,1000_QL80_.jpg"
    }
]

export const jsonData = JSON.stringify(json)

fs.writeFile('../booksList.json', jsonData, (err) => {
    if (err) {
        console.error(err)
        return
    }
})