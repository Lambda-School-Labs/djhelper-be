const server = require("../../server.js");
const request = require("supertest");
const db = require("../db-config.js");

const publicRouter = "./publicRouter.js"; // TODO: require()?

describe("publicRouter", function() {
    test("should test that true === true", async function() {
      await expect(true).toBe(true);
    });
});