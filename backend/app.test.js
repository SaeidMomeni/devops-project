const request = require("supertest");
const app = require("./index"); // مسیر فایل اصلی express app

describe("GET /", () => {
  it("باید متن 'Hello World' برگردونه", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello from backend with MongoDB!");
  });
});

