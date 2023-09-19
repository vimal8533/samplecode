import React from 'react'
import { BrowserRouter, Link, Route, Router } from 'react-router-dom'
import Home from './Home'
import Student from './Student'
import Contact from './Contact'

const RouterCompo = () => {
  return (
    <>
    <BrowserRouter>
    <Link to='/'>Home</Link>
    <Link to='/student'>Student</Link>
    <Link to='contact'>Contact</Link>
    <Router>
        <Route path='/' element={<Home/>}/>
        <Route path='/student' element={<Student/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
    </Router>
    
    </BrowserRouter>
    
    </>
  )
}

export default RouterCompo
