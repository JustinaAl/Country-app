import { configureStore } from "@reduxjs/toolkit";
import regionSlice from './regionSlice'
import countrySlice from './countrySlice'


const store = configureStore({
    reducer: {
        regions: regionSlice,
        country: countrySlice,
    }
})

export default store