import { Router } from 'express'
import { cartController } from '../controllers/cartController.js';


const cartRouter = Router();

cartRouter.get('/:userId', cartController.getCartByUserId);//Obtener todos los items del carrito por usuario
cartRouter.post('/', cartController.createCart);//Crear un item en el carrito
cartRouter.delete('/:userId', cartController.deleteCart);//Eliminar un item del carrito


export default cartRouter;