import express from "express";
import {
  createUser,
  getUserBySatus,
  updateUser,
} from "../controllers/userController.js";
import multer from "multer";
const userRouter = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

userRouter.post("/register", createUser);
userRouter.post("/update/:id", upload.any(), updateUser);
userRouter.get("/data", getUserBySatus);
export default userRouter;
