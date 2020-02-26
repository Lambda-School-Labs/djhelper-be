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
});
