import { validateRequest } from "../middleware";
import { taskSchema } from "../schemas";

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("get tasks");
});

router.post("/", validateRequest(taskSchema), (req, res) => {
  res.send("post tasks");
});

router.put("/:id", (req, res) => {
  res.send("edit task");
});

router.delete("/:id", (req, res) => {
  res.send("delete task");
});

router.patch("/:id/complete", (req, res) => {
  res.send("About birds");
});

module.exports = router;
