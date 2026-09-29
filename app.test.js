const request = require("supertest");
const app = require("./app");

describe("GET /", () => {
    test("returns Hello, DevOps!", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("Hello, DevOps!");
    });
});
