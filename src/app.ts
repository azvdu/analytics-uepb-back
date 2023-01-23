import cors from "cors";
import "reflect-metadata";
import "express-async-errors";
import express, { Express } from "express";

import { connectDb, disconnectDB } from "@/config/database";
import { loadEnv } from "./config/envs";

loadEnv()

import { coursesRouter } from "@/routers";
import { periodsRouter } from "./routers/periods-router";

const app = express();
app
    .use(cors())
    .use(express.json())
    .use("/courses", coursesRouter)
    .use("/periods", periodsRouter)


export function init(): Promise<Express> {
    connectDb();
    return Promise.resolve(app);
}

export async function close(): Promise<void> {
    await disconnectDB()
}

export default app;