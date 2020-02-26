const server = require("../../server.js");
const request = require("supertest");
const db = require("../db-config.js");

const loginRouter = "./loginRouter.js"; // TODO: require()?

const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/secrets");
const authenticate = require("../../middleware/auth-jest.js");

describe("loginRouter", function() {
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

  // --------------- DJ Logins --------------------
  describe("DJ logins are working", function() {
    test("valid login returns status 200 and token", async function() {
      const res = await request(server)
        .post("/api/login/dj")
        .send({
          username: "joe3",
          password: "joe3"
        });
      expect(res.status).toBe(200);
      expect(res.body.token).toBeDefined;
    });
    test("invalid login name returns 401 and no JWT", async function() {
      const res = await request(server)
        .post("/api/login/dj")
        .send({
          username: "fake_username",
          password: "12345"
        });
      expect(res.status).toBe(401);
      expect(res.body.token).not.toBeDefined();
    });
    test("invalid password returns status 401 and no JWT", async function() {
      const res = await request(server)
        .post("/api/login/dj")
        .send({
          username: "joe3",
          password: "wrong_password"
        });
      expect(res.status).toBe(401);
      expect(res.body.token).not.toBeDefined();
    });
    test("missing fields return 401 and no JWT", async function() {
      const res = await request(server)
        .post("/api/login/dj")
        .send({
          username: "",
          password: ""
        });
      expect(res.status).toBe(401);
      expect(res.body.token).not.toBeDefined();
    });
  }); // describe DJ logins
});
