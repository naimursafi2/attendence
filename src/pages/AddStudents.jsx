import React, { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import { getDatabase, onValue, ref, set, push, remove } from "firebase/database";
import { toast, ToastContainer } from "react-toastify";

const AddStudents = () => {
  const [batchList, setBatchList] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [batchId, setBatchId] = useState("")
  const [studentList, setStudentList] = useState([])
  
  const db = getDatabase();

  useEffect(() => {
    onValue(ref(db, "batchList"), (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push({ ...item.val(), id: item.key });
      });
      setBatchList(arr);
    });
  }, []);

const handleAddStudents = ()=>{
  if(!batchId) return toast.info("Select the Batch")
  if(!studentName) return toast.info("Enter the Student Name")  
  console.log(batchId,studentName);
  set(push(ref(db, "studentList/"+batchId)),{
    studentName,
    // batch: batchId
  }).then(
    setStudentName("")
  )
}
const handleDelete =(id)=>{
  remove(ref(db, `studentList/${batchId}/${id}`))     // delete kaj korse  na
}
 useEffect(() => {
  if(!batchId)
    return;
    onValue(ref(db, "studentList/"+ batchId), (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push({ ...item.val(), id: item.key });
      });
      setStudentList(arr);
    })
  }, [batchId]);
  // console.log(studentList);
  
  return (
    <div className="h-screen flex items-center justify-center ">
      <ToastContainer/>
      <div className="w-lg bg-slate-200 p-10 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-primary border-b-2 border-slate-400">
          Add New Students
        </h1>
        <Select onChange={(e)=>setBatchId(e.target.value)} option={batchList} />
        <div className="mt-5 flex items-center gap-3">
          <Input
            onChange={(e) => setStudentName(e.target.value)}
            label="Student Name"
           value={studentName}
          />
          <Button onClick={handleAddStudents} size="lg">Add</Button>
        </div>
        <h1 className="text-2xl font-bold text-primary mt-10 border-b border-slate-300">
          Student List
        </h1>
        {
          studentList.length > 0
          ?
        <div className="batchList mt-6">
          {
            studentList.map((item)=>(

          <div key={item.id} className=" flex items-center justify-between p-3  hover:bg-slate-400 rounded-xl">
            <p className="text xl font-semibold text-primary">{item.studentName}</p>
            <Button onClick={()=>{handleDelete(item.id)}} variant="danger" size="sm">
              Delete
            </Button>
          </div>
            ))
          }
        </div>
          :
          <p className="mx-auto mt-5 bg-red-500 px-3 w-fit text-white rounded-2xl">Add New Students</p>
        }
      </div>
    </div>
  );
};

export default AddStudents;
