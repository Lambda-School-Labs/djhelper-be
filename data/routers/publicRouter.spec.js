const server = require("../../server.js");
const request = require("supertest");
const db = require("../db-config.js");

const publicRouter = "./publicRouter.js"; 

describe("publicRouter", function() {
    test("should test that true === true", async function() {
      await expect(true).toBe(true);
    });
});

//--------GET routes--------\\
//--Tests to see if /djs route is running 
describe("Tests to see if GET dj route is running (get /dj)", function() {
    test("should return 200 OK", async function() {
      const res = await request(server).get("/api/djs");
      expect(res.status).toBe(200);
      expect(res.type).toMatch(/json/i);
    });
  });

  //--Tests to see if /djs route is running 
describe("Tests to see if GET dj by id route is running (get /dj/1)", function() {
    test("should return 200 OK", async function() {
      const res = await request(server).get("/api/dj/1");
      expect(res.status).toBe(200);
      expect(res.type).toMatch(/json/i);
    });
  });

  //--------POST routes--------\\ 
//--Tests to see if a DJ can POST to our backend *READING 500 but works
//***NOTE BELOW READ BEFORE TESTING***
/*IF YOU RUN THIS TEST TWICE IN A ROW WITHOUT DELETING ID # 100 IN YOUR BACKEND TEST WILL FAIL */
describe('Post Endpoint for a DJ', () => {
    it('Should create a new DJ ', async function() {
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
      expect(res.status).toEqual(200)
      //expect(res.body).toHaveProperty('post')
      expect(res.body).toBeDefined;
    })
  })

  //--------PUT routes--------\\  
  //--Tests to see if a DJ can PUT to our backend
  //--Test works when you check endpoint 100 and see these values below.
describe('PUT Endpoint for a DJ', () => {
    it('Should update an existing DJ', async function() {
      const res = await request(server)
        .put('/api/update-dj/100')
        .send({
          id: 100,
          username: 'test_update_dj_username',
          password: 'djpassword1_update',
          name: "tested_dj_update",
          email: "tested_dj_update@ggmail.com",
          phone: "3452523784",
          website: "djtest.djtest_update.gg",
          bio: "I am a tested d_update_j",
          profile_pic_url: "cutestcattestcat.com/cat/update_cat"
        })
      expect(res.status).toEqual(200)
      //expect(res.body).toHaveProperty('post')
      expect(res.body).toBeDefined;
    })
  })

  //--------DELETE routes--------\\
  //--Tests to see if a DJ can be DELETED from our backend -- reading as intended for now
  describe('Post Endpoint for a DJ', () => {
    it('Should DELETE an existing DJ', async function() {
      const res = await request(server)
        .delete('/api/update-dj/100')
        .send()
      expect(res.status).toEqual(404)
      expect(res.body).toBeDefined;
    })
  })