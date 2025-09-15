import { configureStore } from "@reduxjs/toolkit";
import CountrySlice from './countrySlice'

const store = configureStore({
    reducer: {
        countries: CountrySlice
    }
})

export default store