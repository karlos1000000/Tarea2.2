import {z} from 'zod';

const productSchema = z.object({
    "id": z.number(
        {
            message: "El id debe ser un número unico"
        }
    ),
    "nombre": z.string().max(50).trim(),
    "descripcion": z.string().maxLength(200).optional().trim(),
    "precio": z.number().min(0),
    "stock": z.number().min(0),
    "categoria": z.string().max(50).optional().trim(),
    "fecha_Creacion": z.date(),

}).strict();

export const ValidateProduct = (product) => productSchema.safeParse(product);

export const ValidatePartialProduct = (product) => productSchema.partial().safeParse(product);