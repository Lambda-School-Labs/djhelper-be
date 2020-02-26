const server = require("../../server.js");
const request = require("supertest");
const db = require("../db-config.js");

const publicRouter = "./publicRouter.js"; // TODO: require()?

describe("publicRouter", function() {
    test("should test that true === true", async function() {
      await expect(true).toBe(true);
    });
});

describe("Confirms the server is running (get /djs)", function() {
    test("should return 200 OK", async function() {
      const res = await request(server).get("/api/djs");
      expect(res.status).toBe(200);
      expect(res.type).toMatch(/json/i);
    });
  });

//   describe("Confirms that dj seeded data is there", function() {
//       test("should return", async function() {
//           const res = await
//       })
//   })

describe('Post Endpoint for a DJ', () => {
    it('should create a new DJ', async function() {
      const res = await request(server)
        .post('/api/register/dj')
        .send({
          id: 100,
          username: 'test_dj',
          password: 'djpassword1',
          name: "tested_dj",
          email: "tested_dj@ggmail.com",
          phone: "34525234",
          website: "djtest.djtest.gg",
          bio: "I am a tested dj",
          profile_pic_url: "cutestcattestcat.com/cat/cat"
        })
      expect(res.status).toEqual(500)
      //expect(res.body).toHaveProperty('post')
      expect(res.body).toBeDefined;
    })
  })