import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

export const readBooks = (path) => require(path)