const express = require('express');
const { aplicarMiddlewares } = require('./middleware');
const routes = require('./routes');

const app = express();
aplicarMiddlewares(app);
app.use('/', routes);

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`tienda-api corriendo en http://localhost:${PORT}`);
  });
}

module.exports = app;
