import cors from "cors";
import "reflect-metadata";
import "express-async-errors";
import express, { Express } from "express";

import { connectDb, disconnectDB } from "@/config/database";
import { loadEnv } from "./config/envs";

loadEnv()

import { adminRouter, coursesRouter } from "@/routers";
import { chairsRouter  } from "./routers/chairs-router";

const app = express();
app
    .use(cors())
    .use(express.json())
    .use("/courses", coursesRouter)
    .use("/chairs", chairsRouter)
    .use("/signUp", adminRouter)


export function init(): Promise<Express> {
    connectDb();
    return Promise.resolve(app);
}

export async function close(): Promise<Express> {
    disconnectDB()
    return Promise.resolve(app);
}

export default app;