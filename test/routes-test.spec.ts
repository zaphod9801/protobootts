import { assert } from "chai";
import request from 'supertest';
import express from 'express';
import { router } from '../src/routes';

describe('router', () => {
  const app = express();
  app.use('/', router);

  it('Test GET /', async () => {
    const response = await request(app).get('/');
    assert.strictEqual(response.status, 200);
    assert.strictEqual(response.text, 'Bienvenido! Esta aplicación ayuda a elevar números a sus potencias y a entender AWS.');
  });

  it('Test Hola', async () => {
    const response = await request(app).get('/hola');
    assert.strictEqual(response.status, 200);
    assert.equal(response.text, 'Hola Mundo');
  });

  it('Test Square', async () => {
    const response = await request(app).get('/cuadrado');
    assert.strictEqual(response.status, 200);
  });

  it('Test Cube', async () => {
    const response = await request(app).get('/cubo');
    assert.strictEqual(response.status, 200);
  });
});





