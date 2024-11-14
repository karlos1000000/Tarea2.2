//importaciones importantes
import express, { json } from 'express'
import db from './api-tienda/config/db.js'
//import productRoutes from './api-tienda/routes/products.js';
import cartRouter from './api-tienda/routes/cart.js';

const app = express();
app.use(express.json());

//Middleware
app.disable('x-powered-by')
app.use(json()) //Middleware  para capturar el body


const PORT = process.env.PORT;

//Rutas
//app.use('/api', productRoutes);
app.use('/carts', cartRouter);

//Manejo de error por ruta inexistente
app.use((req, res) => {
    res.status(404).json({
        message: "URL no encontrada"
    })
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en ${PORT}`);
});