import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Student from './Student'
import Contact from './Contact'
import EditStudent from './EditStudent'
import NewStudent from './NewStudent'
import '../style.css'

const RouterCompo = () => {
  return (
    <>
    <BrowserRouter>
    <div className='link_comp'>
    <Link to='/' className='link'>Home</Link>
    <Link to='/student' className='link'>Student</Link>
    <Link to='contact'className='link'>Contact</Link>
    </div>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/student' element={<Student/>}/>
        <Route path='/newstudent' element={<NewStudent/>}/>
        <Route path='/editstudent' element={<EditStudent/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
        
        </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default RouterCompo
