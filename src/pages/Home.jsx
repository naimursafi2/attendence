import React, { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
  update,
} from "firebase/database";
import ListLoading from "../components/ui/ListLoading";
import { toast, ToastContainer } from "react-toastify";

const Home = () => {
  const [batchName, setBatchName] = useState("");
  const [batchList, setBatchList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [enabelEdit, setEnabelEdit] = useState("");
  const [updateData, setUpdateData] = useState("");
  const db = getDatabase();
  const handleAdd = () => {
    if (!batchName) {
      return toast.info("Batch name is required");
    }
    console.log(batchName);
    set(push(ref(db, "batchList/")), {
      batchName,
    }).then(() => {
      setBatchName("");
    });
  };
  const handleDelete = (id) => {
    remove(ref(db, "batchList/" + id));
  };
  const handleUpdate = () => {
    update(ref(db, "batchList/" + enabelEdit), {
      batchName: updateData,
    }).then(() => {
      setUpdateData("");
      setEnabelEdit("");
    });
  };
  useEffect(() => {
    onValue(ref(db, "batchList"), (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push({ ...item.val(), id: item.key });
      });
      setBatchList(arr);
      setLoading(false);
    });
  }, []);
  // console.log(batchList);

  return (
    <div className="h-screen flex items-center justify-center">
      <ToastContainer />
      <div className="w-lg bg-slate-200 p-10 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-primary border-b-2 border-slate-400">
          Create New Batch
        </h1>
        <div className="mt-5 flex items-center gap-3">
          <Input
            onChange={(e) => setBatchName(e.target.value)}
            label="Batch Name"
            value={batchName}
          />
          <Button onClick={handleAdd} size="lg">
            Add
          </Button>
        </div>
        <h1 className="text-2xl font-bold text-primary mt-10 border-b border-slate-300">
          Batch List
        </h1>

        {loading ? (
          <ListLoading />
        ) : batchList.length > 0 ? (
          <div className="batchList mt-6">
            {batchList.map((item) => (
              <div
                key={item.id}
                className=" flex items-center justify-between p-3  hover:bg-slate-400 rounded-xl"
              >
                {enabelEdit == item.id ? (
                  <input
                    type="text"
                    onChange={(e) => setUpdateData(e.target.value)}
                    value={updateData}
                  />
                ) : (
                  <p className="text xl font-semibold text-primary">
                    {item.batchName}
                  </p>
                )}
                {enabelEdit == item.id ? (
                  <Button
                    className="bg-green-500 hover:bg-green-700"
                    onClick={handleUpdate}
                  >
                    Update
                  </Button>
                ) : (
                  <div className="flex items-center">
                    <Button
                      onClick={() => {
                        setEnabelEdit(item.id), setUpdateData(item.batchName);
                      }}
                      className="bg-yellow-300 hover:bg-yellow-600 mr-4  "
                      size="sm"
                      variant="secondary"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleDelete(item.id)}
                      variant="danger"
                      size="sm"
                    >
                      Delete
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center mt-5">No Batch Founded</p>
        )}
      </div>
    </div>
  );
};

export default Home;
