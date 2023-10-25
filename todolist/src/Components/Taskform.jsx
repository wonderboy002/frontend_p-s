import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux_store/Todo_Slice";
import { update } from "../redux_store/Todo_Slice";
import Tasks from "./Tasks";


function Taskform() {
  const [task, setTask] = useState("");
  const [editing, setEditing] = useState(false);
  const [editIndex,seteditIndex]=useState(1);
  const [editId,seteditId]=useState("");
  const dispatch = useDispatch();
  const arr = useSelector((state) => state.todos);
  
  useEffect(()=>{
     console.log(arr);
  },[arr])
  function addTask(e) {
    if (task.length !== 0 && editing === false) {
      dispatch(add(task));
      setTask("");
    } else if (editing === true) {
      dispatch(update({text : task,i : editIndex,editId : editId }));
      setEditing(false);
      setTask("");
      seteditId("");
    }
  }

  function editTask(index,id) {
    setTask(arr[index].text);
    seteditIndex(index);
    setEditing(true);
    seteditId(id);
  }

  return (
    <div className="App">
      <div className="mainApp flex flex-col w-full items-center gap-6">
        <h1 className="text-white mt-32 font-bold text-4xl">Get Things Done</h1>
        <div className="form flex gap-3 justify-center w-full">
          <input
            type="text"
            placeholder="Enter Your Task"
            className="p-3  rounded-md w-3/5"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTask} className="bg-green p-3 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>
      <Tasks editTask={editTask} />
    </div>
  );
}

export default Taskform;
