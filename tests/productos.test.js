const request = require('supertest');
const app = require('../src/app');

describe('GET /productos', () => {
  it('devuelve la lista de productos', async () => {
    const res = await request(app).get('/productos');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe('POST /productos', () => {
  it('crea un producto válido', async () => {
    const res = await request(app)
      .post('/productos')
      .send({ nombre: 'Webcam', precio: 60 });
    expect(res.status).toBe(201);
    expect(res.body.nombre).toBe('Webcam');
  });
});
