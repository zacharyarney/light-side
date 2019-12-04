const request = require('supertest');
const server = require('../../server.js');
const generateToken = require('../../utils/generateToken.js');

describe('usersRoutes', () => {
  const token = generateToken({ username: 'test', password: 'test' });
  describe('GET /', () => {
    it('should return 200 OK', () => {
      return (
        // run the server
        request(server)
          // make a GET request
          .get('/users/')
          .set({ auth: token })
          // check that the HTTP response is correct
          .then((res) => expect(res.status).toBe(200))
      );
    });

    it('should return JSON', () => {
      return request(server)
        .get('/users/')
        .set({ auth: 'token' })
        .then((res) => expect(res.type).toBe('application/json'));
    });
  });

  describe('GET /:username', () => {
    it('should return 200 OK', () => {
      return request(server)
        .get('/users/zach')
        .set({ auth: token })
        .then((res) => expect(res.status).toBe(200));
    });

    it('should return JSON', () => {
      return request(server)
        .get('/users/zach')
        .set({ auth: token })
        .then((res) => expect(res.type).toBe('application/json'));
    });

    it('should return specified user', () => {
      return request(server)
        .get('/users/zach')
        .set({ auth: token })
        .then((res) => expect(res.body.user.username).toBe('zach'));
    });
  });

  describe('GET /:username/notes', () => {});
  describe('GET /:username/notes', () => {});
  describe('POST /:username/comments', () => {});
  describe('PUT /:username', () => {});
  describe('DELETE /:username', () => {});
});
