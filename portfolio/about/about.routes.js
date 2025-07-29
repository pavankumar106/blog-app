import express from "express";
const router = express.Router();

import { getAboutInfo } from "./about.controller.js";

router.get("/about-info", getAboutInfo);

export default router;
