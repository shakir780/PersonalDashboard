import React, { useState } from 'react'
import {AiFillDelete} from 'react-icons/ai'
import { useStateContext } from '../Contexts/ContextProvider'
const AddTaskForm = ({addTask}) => {
    const[value,setValue]=useState("")
    const handleSubmit = e => {
        e.preventDefault();
        value && addTask(value)
        setValue("");
      };
  return (
  <form className='border-solid flex pt-3 mt-3 ' onSubmit={handleSubmit}>
    <input
    type="text"
    value={value}
    placeholder="Write new item and hit enter"
    onChange={e=>setValue(e.target.value)}/>
<button className='box-shadow' type='submit'>+</button>
  </form>
  )
}

const TodoList=()=>{
  const{currentColor}=useStateContext()

    const [tasks, setTasks] = useState([{
        text: "Talk to hr",
        isCompleted: false
      },{
        text: "Hire",
        isCompleted: false
      },{
        text: "Advertise",
        isCompleted: false
      },
      {
        text: "Marketing",
        isCompleted: false
      },
      {
        text: "video",
        isCompleted: false
      }
    ]);

      const addTask=text =>setTasks([...tasks,{text}])
      const toggleTask=index=>{
        const newTasks=[...tasks];
        newTasks[index].isCompleted=!newTasks[index].isCompleted;
        setTasks(newTasks)
      }
      const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
      };

      return (
        <div className="pt-2 ">
          <p className="text-lg font-extra-bold text-slate-500">Todo</p>
          {tasks.map((task, index) => (
            <div className="p-1 pt-3 text-xs mb-2 m-4 rounded-sm flex items-center justify-between text-dark">
              <span onClick={() => toggleTask(index)} className={task.isCompleted ? "todo-text todo-completed border-bottom text-lg text-bold" : "todo-text border-bottom text-lg text-bold"}>
                {task.text}
              </span>
              <hr />
              <button  className='border-0 outline-0 cursor-pointer text-lg decoration-red-600' onClick={() => removeTask(index)}><AiFillDelete style={{fill:currentColor}} /></button>
            </div>
          ))}
          <AddTaskForm addTask={addTask} />
        </div>
      );
}

export default TodoList
