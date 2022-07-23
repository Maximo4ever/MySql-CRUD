import express from "express";
import { PORT } from "./config.js";
import indexRoute from "./routes/index.routes.js";

const app = express();
app.use(indexRoute);

app.listen(PORT);
console.log("Server is running in port " + PORT);
