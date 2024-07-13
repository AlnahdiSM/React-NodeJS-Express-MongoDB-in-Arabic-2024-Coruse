import express from "express";
import mongoose from "mongoose";
import studentRouter from './routes/students'
import cors from 'cors'
const app = express();
const port = 3000;
app.use(cors({
origin:"http://localhost:5173"
}))
app.use(express.json());
app.use("/students", studentRouter)
mongoose
  .connect("mongodb://127.0.0.1:27017/students")
  .then(() => console.log("Connected!"));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
