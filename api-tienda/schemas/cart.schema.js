import {z} from 'zod';


const cartSchema = z.object({

    "id": z.number(
        {
            message: "El id debe ser un número unico"
        }
    ).int(),
    "usuario_id": z.number().int(),
    "producto_id": z.number().int(),
    "detalle_id": z.number().int().optional(),
    "cantidad": z.number().int(),
    "fecha_agregado": z.date(),

}).strict();


export const ValidateCart = (cart) => cartSchema.safeParse(cart);

export const ValidatePartialCart = (cart) => cartSchema.partial().safeParse(cart);