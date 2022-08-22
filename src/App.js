import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

import AddTask from './component/AddTask'
import GetTask from './component/GetTask'

export default function App() {
    const [tasklist,setTasklist] = useState([])
    const [tasks,setTasks]= useState('')
    const [ids,setIds] = useState('')
    const [isEdit,setIsEdit] =useState(false)

  return (
    <div className='container-fluid'>
    <div className='pt-5' style={{backgroundColor:'rgb(50,100,150)'}}>
     <AddTask tasks={tasks} setTasks={setTasks} setIsEdit={setIsEdit} isEdit={isEdit} ids={ids}/>
   <GetTask tasklist={tasklist} setTasklist={setTasklist} setTasks={setTasks} isEdit={isEdit} setIds={setIds} setIsEdit={setIsEdit}/>
   </div>
    </div>
    )
}
