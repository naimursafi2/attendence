import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registation from "./pages/Registation"
import AddStudents from "./pages/AddStudents";
import Attendence from "./pages/Attendence";

const App = () => {
  return <div>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registation" element={<Registation/>}/>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/addstudents" element={<AddStudents/>}/>
        <Route path="/attendence" element={<Attendence/>}/>
        </Route>
      </Routes>
   </BrowserRouter>
  </div>;
};

export default App;
