import React from "react";
import Select from "../components/ui/Select";
import Input from "../components/ui/Input";
import Switch from "../components/ui/Switch";
import Button from "../components/ui/Button";

const Attendence = () => {
  return (
    <section className="mt-7">
      <div className="container max-w-5xl">
        <div className=" bg-brand p-10 rounded-2xl shadow">
          <h2 className="text-white text-xl uppercase border-b pb-3">
            Select Batch & Date
          </h2>
          <div className="flex items-center gap-4 mt-4">
            <Select />
            <Input type="date" className="py-4!" />
          </div>
        </div>
        <div className=" bg-slate-100 p-10 rounded-2xl shadow mt-7 border">
          <table className="w-full">
            <thead>
              <tr>
                <td className="pb-6 w-[10%]">SL.</td>
                <td className="pb-6 w-full">Student Name</td>
                <td className="pb-6 w-[10%]">Attendence</td>
              </tr>
            </thead>
            <tbody className="table-bdy">
              <tr>
                <td>1</td>
                <td>Naimur Safi Tasin</td>
                <td>
                  <Switch />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Naimur Safi Tasin</td>
                <td>
                  <Switch />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Naimur Safi Tasin</td>
                <td>
                  <Switch />
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Naimur Safi Tasin</td>
                <td>
                  <Switch />
                </td>
              </tr>
              
            </tbody>
          </table>
         <div className="flex justify-end mt-5">
            <Button>Submit</Button>
         </div>
        </div>
      </div>
    </section>
  );
};

export default Attendence;
