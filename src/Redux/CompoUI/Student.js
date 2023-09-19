import React from 'react'
import { useSelector} from 'react-redux'

const Student = () => {
    const data=useSelector((state)=>state.Stu_Data)
  console.log(data);
    return (
    <div>
      Student
    </div>
  )
}

export default Student
