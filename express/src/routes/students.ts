import { Router } from "express";
import { studentModel } from "../models/student";

const router = Router();

// Define a route for fetching all items
router.get("/", async (req, res) => {
  try {
    const students = await studentModel.find();
    res.status(200).send(students);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Define a route for fetching a single item
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const student = await studentModel.findById(id);
    if (!student) {
      return res.status(404).send("Student not found");
    }
    res.status(200).send(student);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Define a route for creating an item
router.post("/", async (req, res) => {
  try {
    const student = req.body;
    const newStudent = await studentModel.create(student);
    res.status(201).send(newStudent);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Define a route for updating an item
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const student = await studentModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!student) {
      return res.status(404).send("Student not found");
    }
    res.status(200).send(student);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Define a route for deleting an item
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const student = await studentModel.findByIdAndDelete(id);
    if (!student) {
      return res.status(404).send("Student not found");
    }
    res.status(200).send(student);
  } catch (err) {
    res.status(500).send(err);
  }
});

export default module.exports = router;
