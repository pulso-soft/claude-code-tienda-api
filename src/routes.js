const express = require('express');
const router = express.Router();

// Datos en memoria — no hay base de datos real, se reinicia al reiniciar el server
const productos = [
  { nombre: 'Teclado mecánico', precio: 45.99 },
  { nombre: 'Monitor', precio: 189.99 },
  { nombre: 'Mouse', precio: 25.5 }
];

router.get('/productos', (req, res) => {
  res.json(productos);
});

router.post('/productos', (req, res) => {
  const { nombre, precio } = req.body;

  // Validación mínima — se va a reforzar durante el curso
  if (precio < 0) {
    return res.status(400).json({ error: 'precio inválido' });
  }

  productos.push({ nombre, precio });
  res.status(201).json({ nombre, precio });
});

module.exports = router;
