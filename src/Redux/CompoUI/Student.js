import React from 'react'
import { useSelector} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import '../style.css'


const Student = () => {
    const data=useSelector((state)=>state.Stu_Data)
    const navi=useNavigate()
  // console.log(data);
    return (
    <div>
        <h1>Student</h1>
      <button onClick={()=>navi('/newstudent')} className='btn2'>Add new Student</button>

      <table >
                <thead>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </thead>
                    <tbody>
                        {data.map((item, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.course}</td>
                                    <td>{item.batch}</td>
                                    <td><Link to='/editstudent' state={{index}} >Edit</Link></td>

                                </tr>
                            )
                        })}
                    </tbody>
            </table>
    </div>
  )
}

export default Student
