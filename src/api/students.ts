export const fetchStudents = async () => {
  const response = await fetch("http://localhost:3000/students");
  const data = response.json();
  return data;
};
