import React  from 'react'
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { auths, db, } from "../fire_config";


export default function AddTask({tasks,setTasks,isEdit,ids,setIsEdit}) {

 const dbCollection = collection(db,`${auths.currentUser?.email}`)
    /* const imgref = ref(stores, `${currentUser.email}`)
 */
    async function AddTask(){
       await addDoc(dbCollection,{Task:tasks,createdAt:serverTimestamp()})
    }
  return (
    <div className='container card' style={{backgroundColor:'rgb(50,100,150)',textAlign:'center',justifyContent:'center',alignItems:'center'}}>
     <form className='card-body d-flex' style={{textAlign:'center'}} onSubmit={(e)=>{
       e.preventDefault()
       AddTask()
       setTasks('')
     }}>
     <div className="form-group ">
      <input type="text" value={tasks} onChange={(e)=>setTasks(e.target.value)} required className="form-control" placeholder="Enter Task" aria-describedby="helpId"/>
     </div>
   {isEdit ?   <button onClick={ async(e)=>{
     e.preventDefault()
     var coll = doc(db,`${auths.currentUser?.email}`,ids)
    await updateDoc(coll,{Task:tasks,createdAt:serverTimestamp()})
    setIsEdit(false)
     setTasks('')
   }} className="btn btn-primary">Update Task</button> :  <button type="submit" className="btn btn-primary">Add Task</button>}
     </form>
    </div>
  )
}
