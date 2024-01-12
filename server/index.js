import express from "express";
import cors from "cors";
import { Connection } from "./db/dbConfig.js";
import userRouter from "./routes/userRoutes.js";
import statusRouter from "./routes/statusRoutes.js";
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/users", userRouter);
app.use("/api/status", statusRouter);
app.use("/api/files", express.static("uploads"));
Connection("user", "faysal12345");
app.listen(9000, () => {
  console.log("Server Running");
});
