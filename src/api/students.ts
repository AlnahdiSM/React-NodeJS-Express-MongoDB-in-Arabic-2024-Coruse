import { student } from "../utils/data";

export const fetchStudents = async () => {
  const response = await fetch("http://localhost:3000/students");
  const data = response.json();
  return data;
};
export const createStudent = async (student:student) => {
  const response = await fetch("http://localhost:3000/students", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  })
  const data = await response.json()
  return data
}

