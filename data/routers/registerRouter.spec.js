const server = require("../../server.js");
const request = require("supertest");
const db = require("../db-config.js");

const registerRouter = "./registerRouter.js"; // TODO: require()?

const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/secrets");
const authenticate = require("../../middleware/auth-jest.js");

describe("registerRouter", function() {
  test("runs the tests", async function() {
    await expect(true).toBe(true);
  });

  describe("test environment", function() {
    test("should use the testing environment", async function() {
      await expect(process.env.DB_ENV).toBe("testing");
    });
  });

  describe("confirms the server is running (get /login)", function() {
    test("should return 200 OK", async function() {
      const res = await request(server).get("/api/login");
      expect(res.status).toBe(200);
      expect(res.type).toMatch(/json/i);
    });
  });

  // --------------- DJ Registrations --------------------
  describe("DJ registrations are working", function() {
    test("valid registration returns status 201", async function() {
      const res = await request(server)
        .post("/api/register/dj")
        .send({
          username: "vanilla",
          password: "iceicebaby",
          email: "vanilla@ice.com",
          name: "Vanilla Ice"
        });
      expect(res.status).toBe(201);
    });

    test("attempt to register without required fields fails with status 400", async function() {
      const res = await request(server)
        .post("/api/register/dj")
        .send({
          username: "just_a_username"
        });
      expect(res.status).toBe(400);
    });

    test("attempt to register an existing user fails with status 409", async function() {
      const res = await request(server)
        .post("/api/register/dj")
        .send({
          username: "joe3",
          password: "joe3",
          email: "joe3@gmail.com",
          name: "Joe vs. Volcano"
        });
      expect(res.status).toBe(409); // Conflict
    });
  }); // describe DJ registrations
});
