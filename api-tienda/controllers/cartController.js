import db from '../config/db.js';
import { ValidateCart } from '../schemas/cart.schema.js';

export class cartController{

    static getCartByUserId = (req, res) => {
        
        const { userId } = req.params;
        const consulta =  "select c.producto_id, p.nombre as Nombre, p.precio as Precio, c.cantidad as Cantidad from carrito as c inner join productos as p on c.producto_id = p.id WHERE c.usuario_id =  ?";

        try {
            db.query(consulta, [userId], (err, results) => {
                
                if(err)
                {
                    return res.status(400)
                                .json({
                                    message: "Error al obtener el carrito (error en el query)" + err,
                                    error: true
                                });
                }

                if(results.length == 0)
                {
                    return res.status(400)
                                .json({
                                    message: "No se encontraron elementos en el carrito",
                                    error: true
                                });
                }

                return res  .header("Content-Type", "application/json")
                            .status(200)
                            .json(results);

            });
        } catch (error) {
            return res.status(400)
                        .json({
                            message: "Error al obtener el carrito (error en el catch)",
                            error: true
                        });
        } 

    }

    static createCart = (req, res) => {
        const consulta = "INSERT INTO carrito (usuario_id, producto_id, detalle_id, cantidad, fecha_agregado) VALUES (?, ?, ?, ?, ?)";
        const data = req.body;
       
        const { success, error } = ValidateCart(data);

        if(!success){
            return res.status(400)
                        .json({
                            message: "Error al crear el carrito",
                            error: true
                        });
        }

        try {
            const { usuarioId, productoId, detalle_id, cantidad } = data;
            const fecha = new Date().toISOString().slice(0, 19).replace('T', ' ');
            db.query(consulta, [usuarioId, productoId, detalle_id, cantidad, fecha], (err, results) => {
                
                if(error)
                {
                    return res.status(400)
                                .json({
                                    message: "Error al crear el carrito (error en el query)",
                                    error: true
                                });
                }

                return res  .header("Content-Type", "application/json")
                            .status(200)
                            .json(data);

            });
        } catch (error) {
            return res.status(400)
                        .json({
                            message: "Error al crear el carrito (error en el catch)",
                            error: true
                        });
        } 
    }

    static deleteCart = (req, res) => {
        const { id } = req.params;
        const consulta = "DELETE FROM carrito WHERE id = ?";

        try {
            db.query(consulta, [id], (err, results) => {
                
                if(error)
                {
                    return res.status(400)
                                .json({
                                    message: "Error al eliminar un articulo del carrito",
                                    error: true
                                });
                }

                return res  .header("Content-Type", "application/json")
                            .status(200)
                            .json({data});

            });
        } catch (error) {
            return res.status(400)
                        .json({
                            message: "Error al eliminar el carrito",
                            error: true
                        });
        } 
    }
}
