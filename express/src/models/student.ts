import mongoose, { Schema, Document } from "mongoose";

interface IStudent extends Document {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  class: string;
}

const studentSchema = new Schema<IStudent>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
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
