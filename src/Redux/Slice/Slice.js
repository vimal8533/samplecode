import {createSlice} from '@reduxjs/toolkit'
const initialState=[
    {name :'vimal',age:30,course:'Mern',batch:'Ea24'},
    {name :'Dablo0',age:28,course:'Java',batch:'EA17'},
    {name :'Vishal Saw',age:25,course:'Tech',batch:'EA18'},
    {name :'Aman',age:40,course:'Gate',batch:'EA25'},
    {name :'Prince',age:22,course:'HTML',batch:'EA23'},
    {name :'Deep',age:23,course:'Mern',batch:'EA14'},
]

const StudentSlice=createSlice({
    name:"Stu_Data",
    initialState,
    reducers:{
        editStudent :(state,action)=>{
            state[action.payload.index]=action.payload.info;
            // console.log(action.payload.index);
            // console.log(action.payload.info);
        },
        addStudent :(state,action)=>{
            state.push(action.payload)
        }
    }
})
export const {editStudent,addStudent}=StudentSlice.actions;
export default StudentSlice.reducer