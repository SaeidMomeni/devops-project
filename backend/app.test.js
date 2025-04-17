const request = require("supertest");
const app = require("./index");

describe("GET /", () => {
  it("باید متن 'Hello World' برگردونه", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello World");
  });
});

