import { createRequire } from 'node:module'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, '../booksList.json');

console.log('Ruta del archivo:', filePath);

const require = createRequire(import.meta.url)

export const readBooks = (file) => require(file)


export const writeInToJSONPost = async (data) => {
    try {
        const oldData = await readBooks(filePath)
        const allData = [...oldData, data]

        fs.writeFile(filePath, JSON.stringify(allData), (err) => {
            if (err) {
                console.error('Error:', err)
            }
        })
    } catch (error) {
        console.error(error)
    }

}

export const writeInToJSON = async (data) => {
    try {
        fs.writeFile(filePath, JSON.stringify(data), (err) => {
            if (err) {
                console.error('Error en la escritura')
            }
        })
    } catch (error) {
        console.error(error)
    }
}