import express from "express";
import { addStatus, getStatus } from "../controllers/statusController.js";

const statusRouter = express.Router();
statusRouter.post("/register", addStatus);
statusRouter.get("/data", getStatus);
export default statusRouter;
