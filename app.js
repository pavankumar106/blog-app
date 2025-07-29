import express from "express";
import routes from "./routes/index.js";
import aboutRoutes from "./portfolio/about/about.routes.js";

const app = express();

app.use(express.json());

app.use("/api", routes);
app.use("/api/about", aboutRoutes);

export default app;
