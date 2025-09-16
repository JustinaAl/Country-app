import { configureStore } from "@reduxjs/toolkit";
import regionSlice from './regionSlice'

const store = configureStore({
    reducer: {
        regions: regionSlice
    }
})

export default store