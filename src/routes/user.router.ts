import express from "express";
import UserController from "../controllers/user.controller";
const controller = new UserController();

const router = express.Router();

router.get("/", async (req, res) => {
  const response = await controller.getUsers();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const response = await controller.createUser(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const response = await controller.getUser(req.params.id);
  if (!response) res.status(404).send({ message: "Nothing found" });
  return res.send(response);
});

export default router;
