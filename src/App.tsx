import { useEffect, useState } from "react";
import AddStudent from "./components/AddStudent";
import StudentTable from "./components/StudentTable";
import { fetchStudents } from "./api/students";
import { student } from "./utils/data";

function App() {
  const [students,setStudents] = useState<student[]>([])
  useEffect(()=>{
    fetchStudents().then((data)=>{
      setStudents(data)
    })
  },[])
  return (
    <>
      <StudentTable students={students} />
      <AddStudent students={students} setStudents= {setStudents} />
    </>
  );
}

export default App;
