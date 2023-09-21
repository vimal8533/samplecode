import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addStudent } from '../Slice/Slice'

const NewStudent = () => {
  const navi=useNavigate()
  const dispatch=useDispatch();
  const [info,setInfo]=useState({
    name:"",
    age:"",
    course:"",
    batch:""
  })
    function handlechange(e){
      setInfo({...info,[e.target.name]:e.target.value})
        
    }
    function handleclick(){
      dispatch(addStudent(info))
      navi('/student')
    }
    
  return (
    
    <div>
      <h1>Add New Student</h1>
      <form>
      <label>Name:</label>
      <input type='text' name='name' onChange={handlechange}/>
      <label>Age:</label>
      <input type='text' name='age' onChange={handlechange}/><br/>
      <label>Course:</label>
      <input type='text' name='course' onChange={handlechange}/>
      <label>Batch:</label>
      <input type='text' name='batch' onChange={handlechange}/><br/>
      <div className='btn_flx'>
      <button onClick={()=>navi('/student')} className='btn'>Cancel</button>
      <button onClick={handleclick} className='btn'>Submit</button>
      </div>
      </form>
    </div>
  )
}

export default NewStudent
