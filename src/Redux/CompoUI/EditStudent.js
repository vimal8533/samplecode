import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { editStudent } from '../Slice/Slice';

const EditStudent = () => {
  const dispatch=useDispatch();
  const index=useLocation().state.index;
  const data=useSelector((state)=>state.Stu_Data);
  const navi=useNavigate()
  const [info,setInfo]=useState({
    name:data[index].name,
    age:data[index].age,
    course:data[index].course,
    batch:data[index].batch
  })
  
    function handlechange(e){
      setInfo({...info,[e.target.name]:e.target.value})
    }
    function handleclick(){
      
      dispatch(editStudent({info,index}))
      navi('/student')
      console.log(info);
      console.log(data[index].name);
    }
    
    
  return (
    <div>
      <h1>Edit Student</h1>
      <form>
      <label>Name:</label>
      <input type='text' placeholder={data[index].name} name='name' onChange={handlechange}/>
      <label>Age:</label>
      <input type='text' placeholder={data[index].age} name='age' onChange={handlechange}/><br/>
      <label>Course:</label>
      <input type='text' placeholder={data[index].course} name='course' onChange={handlechange}/>
      <label>Batch:</label>
      <input type='text' placeholder={data[index].batch} name='batch' onChange={handlechange}/><br/>
      <div className='btn_flx'>      
      <button onClick={()=>navi('/student')} className='btn'>Cancel</button>
      <button onClick={handleclick} className='btn'>Submit</button>
      </div>
      </form>
    </div>
  )
}

export default EditStudent
