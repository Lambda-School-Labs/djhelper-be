const server = require('../../server.js');
const request = require('supertest');
const db = require('../db-config.js');

const authRouter = './authRouter.js';
const authenticate = require('../../middleware/auth-jest.js');

describe('authRouter', function() {
  test('runs the tests', async function() {
    await expect(true).toBe(true);
  });
  describe('test environment', function() {
    test('should use the testing environment', async function() {
      await expect(process.env.DB_ENV).toBe('testing');
    });
  });
  describe('confirms the server is running (get /auth)', function() {
    test('should return 200 OK', async function() {
      const res = await request(server).get('/api/auth');
      expect(res.status).toBe(200);
      expect(res.type).toMatch(/json/i);
    });
  });

  // TODO:
  // ------------ PUT tests -------------
  // 1. Modify fields for an existing user.
  // 2. Try to modify fields for a user that doesn't exist.
  // 3. Try to modify invalid fields.

  // ----------- Delete tests -----------
  // 1. Delete an entry that exists -> 200
  // 2. Try to delete an entry that doesn't -> 400
});

// TODO: Copy tests from publicRouter into here.
