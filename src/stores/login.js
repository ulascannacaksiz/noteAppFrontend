import { createSlice } from "@reduxjs/toolkit";

export const login = createSlice({
    name: "login",
    initialState:{
        isLoggedIn:false,
        token:"",
    },
    reducers:{
        setLogin: state => {
            state.isLoggedIn = !state.isLoggedIn
        },
        setToken: (state,action)=>{
            state.token = action.payload
        }
    }
})

export const {setLogin,setToken} = login.actions
export default login.reducer