import { z }  from 'zod'

const booksSchema = z.object({
    title: z.string({required_error: 'El titulo es obligatorio'}).max(20, {message: 'Debe contener  menos de 20 caracteres.'}),
    author: z.string({required_error: "El autor es obligatorio"}),
    year: z.number().int().max(2024),
    genre: z.enum(['Thriller', 'Ficción', 'Familiar', 'Biografía']),
    image: z.string().url({ message: 'La imagen debe ser una url válida'})
    .optional()
})


export function validateData(data){
    return booksSchema.safeParse(data)
}

export function validatePartialData(data){
    return booksSchema.partial().safeParse(data)
}