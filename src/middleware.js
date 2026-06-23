const express = require('express');

// Middleware base de la app — parsea el body de las requests como JSON
function aplicarMiddlewares(app) {
  app.use(express.json());
}

module.exports = { aplicarMiddlewares };
