const request = require('supertest');
const server = require('../../server.js');
const db = require('../db-config.js');

const publicRouter = './publicRouter.js';

describe('publicRouter', function() {
  test('should test that true === true', async function() {
    await expect(true).toBe(true);
  });
});

// -------- GET routes -------- \\
// -- Tests to see if /djs route is running
describe('Public Router tests', function() {
  test('get /api/djs should return all djs', async function() {
    const res = await request(server).get('/api/djs');
    expect(res.status).toBe(200);
    expect(res.type).toMatch(/json/i);
  });
  // -- Tests to see if /dj/:id route is running
  test('get /api/dj/1 should return dj with ID 1', async function() {
    const res = await request(server).get('/api/dj/1');
    expect(res.status).toBe(200);
    expect(res.type).toMatch(/json/i);
  });
});

// -- Tests to see if /events route is running
describe('Public Router tests', function() {
  test('get /api/events should return all events', async function() {
    const res = await request(server).get('/api/events');
    expect(res.status).toBe(200);
    expect(res.type).toMatch(/json/i);
  });
  // -- Tests to see if /event/:id route is running
  test('get /api/event/1 should return event with ID 1', async function() {
    const res = await request(server).get('/api/event/1');
    expect(res.status).toBe(200);
    expect(res.type).toMatch(/json/i);
  });
});

// -- Tests to see if /locations route is running
describe('Public Router tests', function() {
  test('get /api/locations should return all locations', async function() {
    const res = await request(server).get('/api/locations');
    expect(res.status).toBe(200);
    expect(res.type).toMatch(/json/i);
  });
  // -- Tests to see if /location/:id route is running
  test('get /api/location/1 should return location with ID 1', async function() {
    const res = await request(server).get('/api/location/1');
    expect(res.status).toBe(200);
    expect(res.type).toMatch(/json/i);
  });
});
