import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux_store/Todo_Slice";
function Tasks(props) {
  const arr = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  function deleteTask(id) {
    dispatch(remove(id));
  }

  return (
    <>
      <div className="task-container mt-8 mx-auto w-4/5 mb-8 h-[400px] flex  flex-col gap-2 overflow-auto">
        {arr?.map((todo,index) => {
          return (
            <div
              className="p-3 flex gap-4 w-9/10 items-center bg-blue  font-bold text-black"
              key={todo.id}
            >
              {todo.text}
              <div className="buttons flex gap-3 ml-auto">
                <button onClick={()=>props.editTask(index,todo.id)} className="bg-green delete p-1 rounded-full text-xl text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </button>
                <button
                  className="bg-red edit p-1 text-white rounded-full"
                  onClick={() => deleteTask(todo.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Tasks;
