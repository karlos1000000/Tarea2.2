import mysql from 'mysql2';
import 'dotenv/config';

const db = mysql.createConnection({
  host: process.env.HOST2,
  user: process.env.USER2, 
  password: process.env.PASSWORD2,  
  database: process.env.DATABASE2,
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err.stack);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

export default db;