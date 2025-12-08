import React from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

const Home = () => {
  return(
     <div className="h-screen flex items-center justify-center">
    <div className="w-lg bg-slate-200 p-10 rounded-2xl shadow-xl">
      <h1 className="text-2xl font-bold text-primary border-b-2 border-slate-400">
        Create New Batch</h1>
        <div className="mt-5 flex items-center gap-3">
          <Input label="Batch Name"/>
          <Button size="lg">Add</Button>
        </div>
      <h1 className="text-2xl font-bold text-primary mt-10 border-b border-slate-300">
        Batch List</h1>
      <div className="batchList mt-6">
         <div className=" flex items-center justify-between p-3  hover:bg-slate-400 rounded-xl">
          <p className="text xl font-semibold text-primary">U-FDR-2501</p>
        <Button variant="danger" size="sm">Delete</Button>  
        
        </div>
        <div className="flex items-center justify-between p-3 hover:bg-slate-400 rounded-xl">
          <p className="text xl font-semibold text-primary">U-FDR-2502</p>
        <Button variant="danger" size="sm">Delete</Button>  
        
        </div>
        <div className="flex items-center justify-between p-3 hover:bg-slate-400 rounded-xl">
          <p className="text xl font-semibold text-primary">U-FDR-2504</p>
        <Button variant="danger" size="sm">Delete</Button>  
        
        </div>
        <div className="flex items-center justify-between p-3 hover:bg-slate-400 rounded-xl">
          <p className="text xl font-semibold text-primary">MERN-2503</p>
        <Button variant="danger" size="sm">Delete</Button>  
        
        </div>
      </div>
    </div>
  </div>
  )
};

export default Home;
