import db from '../config/db.js';
import bcrypt from 'bcrypt'
//import del esquema si usamos

export const getAllProducts = (req, res) => {
    db.query('SELECT * FROM productos', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

export const getProductById = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM productos WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.json(results[0]);
    });
};

export const createProduct = (req, res) => {
    const newProduct = req.body;
    db.query('INSERT INTO productos SET ?', newProduct, (err, results) => {
        if (err) throw err;
        res.json({ id: results.insertId, ...newProduct });
    });
};

export const updateProduct = (req, res) => {
    const { id } = req.params;
    const updatedProduct = req.body;
    db.query('UPDATE productos SET ? WHERE id = ?', [updatedProduct, id], (err) => {
        if (err) throw err;
        res.json({ id, ...updatedProduct });
    });
};

export const deleteProduct = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM productos WHERE id = ?', [id], (err) => {
        if (err) throw err;
        res.sendStatus(204);
    });
};
