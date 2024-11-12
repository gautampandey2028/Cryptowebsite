import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
export const cryptoData=createAsyncThunk("cryptodata",async()=>{
    const res=await axios.get(`https://api.coincap.io/v2/assets`);
    try {
        const data=await res.data;
        // console.log(data);
        return data;
        
    } catch (error) {
        console.log(error)
    }
})
export const cryptoDataDetails=createAsyncThunk("cryprodatadetails",async(url)=>{
    const res=await axios.get(url);
    try {
        const data=await res.data;
        return data;
    } catch (error) {
        console.log(error);
    }
})
 export const dataSlice=createSlice({
    name:"crypto",
    initialState:{
        isLoading:false,
        apidata:[],
        apidataDetails:{},
    },
    reducers:{
        handleRefresh:(state,action)=>{
            /* window.location.reload(cryptoData) */
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(cryptoData.pending,(state,action)=>{
            state.status="loading";
            state.isLoading=true;
        })
        .addCase(cryptoData.fulfilled,(state,{payload})=>{
            state.status="idle";
            state.apidata=payload?.data;
            state.isLoading=false;
            toast.success("Data Is Fetching");
            
        })
        .addCase(cryptoData.rejected,(state,action)=>{
            state.status="idle";
            state.isLoading=false;
        })
        .addCase(cryptoDataDetails.pending,(state,action)=>{
            state.status="loading";
            state.isLoading=true;
        })
        .addCase(cryptoDataDetails.fulfilled,(state,{payload})=>{
            state.status="idle";
            state.apidataDetails=payload?.data;
            state.isLoading=false;
            toast.success("Details is Ready  ");
        })
        .addCase(cryptoDataDetails.rejected,(state,action)=>{
            state.status="idle";
            state.isLoading=false;
        })
    }
 });
 export const {handleRefresh}=dataSlice.actions;
 export default dataSlice.reducer;