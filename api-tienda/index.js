//importaciones importantes
import express, { json } from 'express'
import db from './config/db'
import productRoutes from './routes/products.js';
import cartRoutes from './routes/cart.js';

const app = express();
app.use(express.json());

//Middleware
app.disable('x-powered-by')
app.use(json()) //Middleware  para capturar el body
app.use(corsMiddleware())

const PORT = process.env.PORT || 3000;

//Rutas
app.use('/api', productRoutes);
app.use('/api', cartRoutes);

//Manejo de error por ruta inexistente
app.use((req, res) => {
    res.status(404).json({
        message: "URL no encontrada"
    })
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en ${PORT}`);
});