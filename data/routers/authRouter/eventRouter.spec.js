test.todo('some test to be written in the future');
// const server = require('../../server.js');
// const request = require('supertest');
// const db = require('../db-config.js');

// const eventRouter = './eventRouter.js';

// describe('eventRouter', function() {
//   test('should test that true === true', async function() {
//     await expect(true).toBe(true);
//   });
// });

// // -------- GET routes -------- \\
// // -- Tests to see if /event route is running
// describe('event router Get all', function() {
//   test('get /api/events should return all events', async function() {
//     const res = await request(server).get('/api/events');
//     expect(res.status).toBe(200);
//     expect(res.type).toMatch(/json/i);
//   });

// // -- Tests to see if /event/:id route is running
//   test('get /api/auth/event/1 should return event with ID 1', async function() {
//     const res = await request(server).get('/api/auth/event/1');
//     expect(res.status).toBe(200);
//     expect(res.type).toMatch(/json/i);
//   });
// });

// // -------- POST route -------- \\
// describe('Post an event', function() {
//     test('An event works if this posts', async function() {
//       const res = await request(server)
//         .post('/api/auth/event')
//         .send({
//             dj_id: "1",
//             name: "Bill and Grace!",
//             date: "2020-04-10",
//             start_time: "14:00",
//             end_time: "20:00",
//             event_type: "wedding",
//             description: "A traditional, peaceful wedding.",
//             location_id: "1",
//             img_url: "https://images.unsplash.com/photo-1508219803418-5f1f89469b50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"

//         });
//       expect(res.status).toBe(200);
//     });
//  });

//  // -------- PUT route -------- \\
// describe('Put an event', function() {
//   test('An event works if this puts', async function() {
//     const res = await request(server)
//       .put('/api/auth/event/1')
//       .send({

//           description: "A traditional, peaceful wedding!",

//       });
//     expect(res.status).toBe(200);
//   });
// });
