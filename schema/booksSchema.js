import { z } from 'zod'

const booksSchema = z.object({
    title: z.string({ required_error: 'El titulo es obligatorio' }).max(60, { message: 'Debe contener  menos de 60 caracteres.' }).or(z.literal('')),
    author: z.string({ required_error: "El autor es obligatorio" }).max(40, { message: 'El nombre del autor debe ser menor de 40 caracteres ' }).or(z.literal('')),
    year: z.number().int().min(1000).max(2024).or(z.literal('')),
    genre: z.enum(['Thriller', 'Ficción', 'Familiar', 'Biografía']).or(z.literal('')),
    image: z.string().url({ message: 'La imagen debe ser una url válida' }).or(z.literal(''))
})


export function validateData(data) {
    return booksSchema.safeParse(data)
}

export function validatePartialData(data) {
    return booksSchema.partial().safeParse(data)
}