import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    users: [],
    error: ''
}

// Generate pending, fulfiled, rejected action types
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
//    return  axios.get('http://127.0.0.1:8000/api/v1/users')

   return  axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.data)

})

const userSlice = createSlice({
    name:'user',
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchUsers.pending, state =>{
            state.loading = true
        })

        builder.addCase(fetchUsers.fulfilled, (state, action)=>{
            state.loading =false
            state.users = action.payload
            state.error = ''

        })

        builder.addCase(fetchUsers.rejected, (state, action)=>{
            state.loading = false
            state.users = []
            state.error = action.error.message
        })


    }
    
})

export default  userSlice.reducer