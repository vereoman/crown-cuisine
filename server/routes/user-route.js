import express from "express";
import * as userController from "../controllers/user-controller.js";

const router = express.Router();

router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);

export default router;
