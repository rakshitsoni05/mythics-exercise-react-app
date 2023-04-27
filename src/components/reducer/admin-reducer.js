import {createSlice} from "@reduxjs/toolkit";
import {adminLoginThunk} from "./admin-thunk";

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        currentAdmin: {},

    },
    reducers: {},
    extraReducers: {
        [adminLoginThunk.fulfilled]: (state, action) => {
            state.currentAdmin = action.payload
            console.log("thunk" , state.currentAdmin)
        }
    }
})

export default adminSlice.reducer