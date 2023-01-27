import supertest from "supertest";
import httpStatus from "http-status";
import { cleanDb } from "../helphers";
// import { faker } from "@faker-js/faker";
import app, { init, close } from "@/app";

beforeEach(async () => {
    await init()
    await cleanDb();
});

afterAll(async () => {
    await close();
});

const server = supertest(app);

describe("GET /courses", () => {

})
