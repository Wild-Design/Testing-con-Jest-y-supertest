const app = require('../src/app');
const request = require('supertest');

describe('Cuando haga un GET a /tasks', () => {
  test('Debería responder un codigo de estado 200', async () => {
    const response = await request(app).get('/tasks').send();
    expect(response.statusCode).toBe(200);
  });
  test('Debería responder con un array', async () => {
    const response = await request(app).get('/tasks').send();
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe('Cuando haga un POST a /tasks', () => {
  describe('Cuando se es dado un titulo y una descripcion', () => {
    const newTask = {
      title: 'New Task',
      description: 'Test Description',
    };

    test('Debería responder un codigo de estado 200', async () => {
      const response = await request(app).post('/tasks').send(newTask);
      expect(response.statusCode).toBe(200);
    });

    test('Debería responder con un content-type application/json en el header', async () => {
      const response = await request(app).post('/tasks').send(newTask);
      expect(response.header['content-type']).toEqual(
        expect.stringContaining('json')
      );
    });

    test('Debería responder con un task ID', async () => {
      const response = await request(app).post('/tasks').send(newTask);
      expect(response.body.id).toBeDefined();
    });
  });
  describe('Cuando el titulo y la descripción faltan', () => {
    test('Debe responder con un codigo de estado 400', async () => {
      const fields = [
        {},
        { title: 'Test Task' },
        { description: 'Test Description' },
      ];
      for (const body of fields) {
        const response = await request(app).post('/tasks').send(body);
        expect(response.statusCode).toBe(400);
      }
    });
  });
});

describe('Cuando haga un GET a /coso', () => {
  test('Debe responder con un codigo de estado 200', async () => {
    const response = await request(app).get('/coso');
    expect(response.statusCode).toBe(200);
  });
  test('Debe responder con el mensaje: XD', async () => {
    const response = await request(app).get('/coso');
    expect(response.text).toBe('XD');
  });
});
