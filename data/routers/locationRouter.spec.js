const server = require('../../server.js');
const request = require('supertest');
const db = require('../db-config.js');

const locationRouter = './locationRouter.js';

describe('locationRouter', function() {
  test('should test that true === true', async function() {
    await expect(true).toBe(true);
  });
});

// -------- GET routes -------- \\
// -- Tests to see if /location route is running
describe('Location router Get all', function() {
  test('get /api/location should return all locations', async function() {
    const res = await request(server).get('/api/locations');
    expect(res.status).toBe(200);
    expect(res.type).toMatch(/json/i);
  });

// -- Tests to see if /location/:id route is running
  test('get /api/location/1 should return event with ID 1', async function() {
    const res = await request(server).get('/api/location/1');
    expect(res.status).toBe(200);
    expect(res.type).toMatch(/json/i);
  });
});

// -------- POST route -------- \\
describe('Post a location', function() {
    test('A location works if this posts', async function() {
      const res = await request(server)
        .post('/api/auth/location')
        .send({
            address_line_1: "34 Street",
            address_line_2: "Suite 1", 
            city: "Dallas",
            state: "Texas",
            zip: "11111",
            name: "A House",
            phone: "999-999-9999",
            email: "ahouse@ggggmail.com",
            website: "http://www.ahouse/",
            img_url:
            "https://images.squarespace-cdn.com/content/v1/5c6c7155f4755a6a9a21e221/1550702772662-9XB6C8MAK7KCBNQA6G0T/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/wadleyfarmsspring18-485.jpg?format=1500w"
        });
      expect(res.status).toBe(200);
    });
 });

 // -------- Put route -------- \\
describe('Put a location', function() {
  test('A location works if this posts', async function() {
    const res = await request(server)
      .put('/api/auth/location/1')
      .send({
          address_line_1: "PUT  Street",
          address_line_2: "PUT Suite 1", 
          city: "Dallas",
          state: "Texas",
          zip: "11111",
          name: "A House",
          phone: "999-999-9999",
          email: "ahouse@ggggmail.com",
          website: "http://www.ahouse/",
          img_url:
          "https://images.squarespace-cdn.com/content/v1/5c6c7155f4755a6a9a21e221/1550702772662-9XB6C8MAK7KCBNQA6G0T/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/wadleyfarmsspring18-485.jpg?format=1500w"
      });
    expect(res.status).toBe(200);
  });
});

