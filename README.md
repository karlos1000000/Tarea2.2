--Notas para la ejecucion del proyecto

--Dependencias
    utilizar comando npm install [dependencia] para instalarlas.
    "bcrypt": "^5.1.1",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.21.1",
    "mysql2": "^3.11.4",
    "zod": "^3.23.8"

--Ubicacion del archivo 'index.js'
    desplazarse a la carpeta Tarea2.2
    'cd Tarea2.2'

--Conexion a la base de datos
    Modificar las variables de entorno necesarias 
    para poder conectarse a su base de datos local 
    en el archivo '.env'

--Uso de postman
PRODUCTS
GetAll http://localhost:3000/products
GetById http://localhost:3000/products/:id
Create http://localhost:3000/products
Update http://localhost:3000/products/:id
Delete http://localhost:3000/products/:id

CARTS
GetById http://localhost:3000/cart/:id
Create http://localhost:3000/cart
Delete http://localhost:3000/cart

--Objetos recomendados para la prueba del post de la api
PRODUCTS
{
    "nombre": "Ejemplo Nombre",
    "descripcion": "Ejemplo Descripcion",
    "precio": 100,
    "stock": 400,
    "categoria": "Ejemplo Categoria"
}

CARTS
{
    "usuario_id":2,
    "producto_id":3,
    "detalle_id":1,
    "cantidad":4,
}

--Integrantes del proyecto
    Carlos Osegueda
    Gerson Murillo