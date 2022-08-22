import { onAuthStateChanged } from 'firebase/auth'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import {auths, db } from '../fire_config'

export default function GetTask({tasklist,setTasklist,setTasks,setIsEdit,setIds}) {
const [currentUser,setCurrentUser] = useState('')
var dbcol = collection(db,`${currentUser?.email}`)

async function GetTasks(){
    var tasks = await getDocs(dbcol)
    var listTask = tasks.docs.map((task)=>({...task.data(),id:task.id}))
    setTasklist(listTask)
}
    useEffect(()=>{
        return ()=>{
            onAuthStateChanged(auths, user=>setCurrentUser(user))
            GetTasks()
        }
    })
  return (
    <div className='container card p-3' style={{backgroundColor:'rgb(50,100,150)'}}>
     <table className="table card-body">
         <thead>
             <tr>
                 <th>#</th>
                 <th>Task Name</th>
                 <th>Actions</th>
             </tr>
         </thead>
         <tbody>
            {tasklist.map((tasks,index)=> <tr key={tasks.id}>
                <td>{index +1}</td>
                 <td>{tasks.Task}</td>
                 <td>
                   <button onClick={()=>{
                       setIsEdit(true)
                       setTasks(tasks.Task)
                       setIds(tasks.id)
                   }} className="btn btn-success btn-sm">Edit</button>
                   <button onClick={async()=>{
                    const docTodel = doc(db,`${auths.currentUser?.email}`,tasks.id)
                    await deleteDoc(docTodel)
                   }} className="btn btn-danger btn-sm">Delete</button>
                 </td>
             </tr>)}
         </tbody>
     </table>
    </div>
  )
}
