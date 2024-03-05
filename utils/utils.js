import { createRequire } from 'node:module'
import fs from 'node:fs'
const require = createRequire(import.meta.url)

export const readBooks = (file) => require(file)


export const writeInToJSON = async (data) => {
    try {
        const oldData = await readBooks('../booksList.json')

        const allData = [...oldData, data]

        fs.writeFile('../booksList.json', JSON.stringify(allData), (err) => {
            if (err) {
                console.error('Error:', err)
            }
        })
    } catch (error) {
        console.error(error)
    }

}
