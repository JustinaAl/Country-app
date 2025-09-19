import { configureStore } from "@reduxjs/toolkit";
import regionSlice from './regionSlice'
import countrySlice from './countrySlice'
import quizSlice from './quizSlice'


const store = configureStore({
    reducer: {
        regions: regionSlice,
        country: countrySlice,
        quiz: quizSlice,
    }
})

export default store