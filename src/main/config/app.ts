import express from "express";
import cors from "cors";
import favicon from "serve-favicon";
import { setupRoutes } from "./routes";
import path from "path";
import mongoConfig from "@/infra/mongodb/config"

const app = express()
mongoConfig()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(favicon(path.join('public', 'favicon.ico')))

setupRoutes(app)

export default app