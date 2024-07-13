import { Button, Paper, TextField } from "@mui/material";
import { ChangeEvent, Dispatch, useRef } from "react";
import { student } from "../utils/data";
import { createStudent } from "../api/students";
interface Props{
    setStudents:Dispatch<React.SetStateAction<student[]>>,
    students:student[]
}
export default function AddStudent({setStudents,students}:Props) {
    const formData = {
        id: 0,
        fullName: "",
        email: "",
        age: "",
        class: "",
      };
    
      const nameRef = useRef<HTMLInputElement>(null)
      const ageRef = useRef<HTMLInputElement>(null)
      const emailRef = useRef<HTMLInputElement>(null)
      const classRef = useRef<HTMLInputElement>(null)
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
   formData.fullName= e.target.value
    
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    formData.email=e.target.value
  };
  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    
    formData.age= e.target.value
  };
  const handleClassChange = (e: ChangeEvent<HTMLInputElement>) => {
    formData.class= e.target.value
  };
  const handleSubmit = async () => {
    const student = formData
    const data = await createStudent(student)
    setStudents([...students,data])
    if(nameRef.current){
        nameRef.current.value=""
    }
    if(ageRef.current){
        ageRef.current.value=""
    }
    if(emailRef.current){
        emailRef.current.value=""
    }
    if(classRef.current){
        classRef.current.value=""
    }
  };
  return (
    <Paper
      sx={{
        width: "fit-content",
        padding: 2,
        paddingX: 4,
        marginTop: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <TextField
      inputRef={nameRef}
        id="outlined-basic"
        label="Full Name"
        variant="outlined"
        name="fullName"
        onChange={handleNameChange}
      />
      <TextField
      inputRef={ageRef}
        id="outlined-basic"
        label="Age"
        variant="outlined"
        name="age"
        onChange={handleAgeChange}
      />
      <TextField
      inputRef={emailRef}
        id="outlined-basic"
        label="Email"
        variant="outlined"
        name="email"
        onChange={handleEmailChange}
      />
      <TextField
      inputRef={classRef}
        id="outlined-basic"
        label="Class"
        variant="outlined"
        name="class"
        onChange={handleClassChange}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Add
      </Button>
    </Paper>
  );
}
