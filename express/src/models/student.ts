import mongoose, { Schema, Document } from "mongoose";

interface IStudent extends Document {
  fullName: string;
  age: number;
  email: string;
  class: string;
}

const studentSchema = new Schema<IStudent>({
  fullName: {
    type: String,
    required: true,
  },
  
  age: {
    type: Number,
  },
  email: {
    type: String,
  },
  class: {
    type: String,
  },
});

export const studentModel = mongoose.model<IStudent>("students", studentSchema);
