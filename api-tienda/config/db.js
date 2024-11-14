import mysql from 'mysql2';


const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER, 
  password: process.env.PASSWORD,  
  database: process.env.DATABASE, 
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err.stack);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

export default db;