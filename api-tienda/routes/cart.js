import express from 'express';
//import cartController from '../controllers/cartController.js';


const router = express.Router();

router.get('/cart/:userId', cartController.getCartByUserId);//Obtener todos los items del carrito por usuario
router.post('/cart', cartController.createCart);//Crear un item en el carrito
router.delete('/cart/:id', cartController.deleteCart);//Eliminar un item del carrito


export default router;