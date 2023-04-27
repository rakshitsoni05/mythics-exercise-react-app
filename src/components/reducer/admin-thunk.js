import {createAsyncThunk} from "@reduxjs/toolkit";
import {adminLogin} from "../../services/admin-service";

export const adminLoginThunk = createAsyncThunk(
    'adminLogin',
    async (admin) => await adminLogin(admin)
)