import React, { useState } from "react";
import { useToDo } from "../Contexts";

function TodoItem({ todo }) { //this todo is a single object
    const [IsToDoEditable,setIsTodoEditable]=useState(false)
    const [ToDoMsg,setTodoMsg]=useState(todo.todo) 
    const {updateToDo, deleteToDo, toggleComplete} =useToDo() 

    const editToDo=()=>{
        updateToDo(todo.id,{...todo,todo:ToDoMsg})
        setIsTodoEditable(false)   
    }

    const toggleCompleted=()=>{
        toggleComplete(todo.id)               
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    IsToDoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={ToDoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!IsToDoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (IsToDoEditable) {
                        editToDo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {IsToDoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteToDo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;

