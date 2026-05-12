const request = require("supertest");
const app = require("../app");

test("GET / should return success message", async () => {
  const response = await request(app).get("/");

  expect(response.statusCode).toBe(200);
  expect(response.text).toBe("GitHub Actions CI/CD Working");
});