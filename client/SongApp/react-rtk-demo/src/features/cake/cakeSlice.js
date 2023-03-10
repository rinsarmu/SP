import { createSlice} from '@reduxjs/toolkit';
const initialState ={
    numOfCakes: 10,
    listOfSong:[]
}
const cakeSlice = createSlice({
    name: 'cake', //action name
    initialState,
    reducers:{
        ordered:(state, action)=>{
            state.numOfCakes -= action.payload
        },
        restocked:(state, action)=>{
            state.numOfCakes += action.payload
            state.listOfSong = [...state.listOfSong, action.payload]
        }
    }
})

export default cakeSlice.reducer;
export const {ordered, restocked} = cakeSlice.actions;