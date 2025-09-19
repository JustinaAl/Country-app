import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCountry = createAsyncThunk(
    'country/fetchCountry',
    async (countryName) => {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fields=name,flags,languages,currencies,population,capital`);
        return await response.json();
    }
)


const countrySlice = createSlice({
    name: 'countrySlice',
    initialState:{
        selectedCountry: '',

        countryInfo: [],
        status: 'idle',
        error: null,
    },
    reducers:{
        
    },

    extraReducers: (builder) =>{
        builder
        .addCase(fetchCountry.fulfilled, (state, action) => {
            state.status = 'Success!';
            console.log(action.payload);
            state.countryInfo = action.payload;
        })
        .addCase(fetchCountry.pending, (state) => {
            state.status = 'Loading';
        })
        .addCase(fetchCountry.rejected, (state, action) => {
            state.status = 'Failed';
            state.error = action.error.message
        });
    },
});


export const {} = countrySlice.actions
export default countrySlice.reducer