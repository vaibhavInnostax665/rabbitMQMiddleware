import express from "express";
import { getAll } from "../controller/consumer.controller.js";

const router = express.Router();

router.get('/',getAll);

export default router;