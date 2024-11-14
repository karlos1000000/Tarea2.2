import {z} from 'zod';


const cartSchema = z.object({

    "usuario_id": z.number().int(),
    "producto_id": z.number().int(),
    "detalle_id": z.number().int().optional(),
    "cantidad": z.number().int(),
    "fecha_agregado": z.date(),

}).strict();


export const ValidateCart = (cart) => cartSchema.safeParse(cart);

export const ValidatePartialCart = (cart) => cartSchema.partial().safeParse(cart);