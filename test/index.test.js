// api.test.js
import { expect } from 'chai';
import request from 'supertest';
import app from '../app.js'; // Importar la aplicación Express

// Describir el conjunto de pruebas
describe('API de register y de manga', () => {
  // Definir un requerimiento o conjunto de pruebas para agregar una tarea
  describe('POST /api/auth/register', () => {
    it('Debería crear un usuario', async () => {
      const userBody = { 
        email: 'pepito6000@gmail.com', 
        password: 'hola1234', 
        photo: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Pepito_de_ternera_Punk_Bach.jpg'    
    };
      const respuesta = await request(app)
        .post('/api/auth/register')
        .send(userBody);
      expect(respuesta.status).to.equal(201);
    });
  });

  // Definir un requerimiento o conjunto de pruebas para obtener la lista de tareas
  describe('GET /api/mangas/:id', () => {
    it('Debería obtener el manga solicitado', async () => {
      const respuesta = await request(app).get('/api/mangas/64a632ed371773eb1edebcaa');
      expect(respuesta.status).to.equal(200);
      expect(respuesta.body).to.be.an('object');
    });
  });
});