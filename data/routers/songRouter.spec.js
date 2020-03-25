const server = require('../../server.js');
const request = require('supertest');
const db = require('../db-config.js');

const songRouter = './songRouter.js';

describe('songRouter', function() {
  test('should test that true === true', async function() {
    await expect(true).toBe(true);
  });
});

// -------- GET routes -------- \\
// -- Tests to see if /song route is running
describe('song router Get all', function() {
  test('get /api/auth/songs should return all events', async function() {
    const res = await request(server).get('/api/auth/songs');
    expect(res.status).toBe(200);
    expect(res.type).toMatch(/json/i);
  });

// -- Tests to see if /song/:id route is running
  test('get /api/auth/songs/1 should return song with ID 1', async function() {
    const res = await request(server).get('/api/auth/songs/1');
    expect(res.status).toBe(200);
    expect(res.type).toMatch(/json/i);
  });
});

// -------- POST route -------- \\
describe('Post a song', function() {
    test('A song works if this posts', async function() {
      const res = await request(server)
        .post('/api/auth/songs')
        .send({
            name: "Test Song Name",
	        spotify_id: "7lidXGPXPYLNThITAOTlkK"

        });
      expect(res.status).toBe(200);
    });
 });

 // -------- Put route -------- \\
describe('Put a song', function() {
  test('A song works if this posts', async function() {
    const res = await request(server)
      .put('/api/auth/songs/1')
      .send({
          name: "PUT Song Name",
        spotify_id: "7lidXGPXPYLNThITAOTlkK"

      });
    expect(res.status).toBe(200);
  });
});


