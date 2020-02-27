const server = require("../../server.js");
const request = require("supertest");
const db = require("../db-config.js");

const publicRouter = "./publicRouter.js";

describe("publicRouter", function() {
  test("should test that true === true", async function() {
    await expect(true).toBe(true);
  });
});

//-------- GET routes --------\\
//-- Tests to see if /djs route is running
describe("Public Router tests", function() {
  test("get /api/djs should return all djs", async function() {
    const res = await request(server).get("/api/djs");
    expect(res.status).toBe(200);
    expect(res.type).toMatch(/json/i);
  });

  test("get /api/dj/1 should return dj with ID 1", async function() {
    const res = await request(server).get("/api/dj/1");
    expect(res.status).toBe(200);
    expect(res.type).toMatch(/json/i);
  });
});
