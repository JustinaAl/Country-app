import { createSlice } from "@reduxjs/toolkit";

const CountrySlice = createSlice({
    name: 'countrySlice',
    initialState:{
        countries: ['Lt', 'Se']
    },
    reducers:{

    }
})

export default CountrySlice.reducer