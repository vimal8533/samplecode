import {createSlice} from '@reduxjs/toolkit'
const initaialState=[
    {name :'vimal',age:30,course:'Mern',batch:'Ea24'},
    {name :'vimal',age:30,course:'Mern',batch:'Ea24'},
    {name :'vimal',age:30,course:'Mern',batch:'Ea24'},
    {name :'vimal',age:30,course:'Mern',batch:'Ea24'},
    {name :'vimal',age:30,course:'Mern',batch:'Ea24'},
    {name :'vimal',age:30,course:'Mern',batch:'Ea24'},
]

const StudentSlice=createSlice({
    name:"Stu_Data",
    initaialState,
    reducers:{
        editStudent :()=>{

        },
        addStudent :()=>{

        }
    }
})
export const {editStudent,addStudent}=StudentSlice.actions;
export default StudentSlice.reducer