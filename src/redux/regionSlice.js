import { createSlice } from "@reduxjs/toolkit";

const regionSlice = createSlice({
    name: 'regionSlice',
    initialState:{
        regions: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
        selectedRegion: 'Africa',
    },
    reducers:{
        setRegion: (state, action) => {state.selectedRegion = action.payload} 
    }
})


export const {setRegion} = regionSlice.actions
export default regionSlice.reducer