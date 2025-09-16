import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCountries = createAsyncThunk(
    'countries/fetchCountries',
    async (region) => {
        const response = await fetch(`https://restcountries.com/v3.1/region/${region}?fields=name,flags,languages,currencies,population,capital`);
        return await response.json();
    }
)


const regionSlice = createSlice({
    name: 'regionSlice',
    initialState:{
        regions: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
        selectedRegion: 'Africa',

        countries: [],
        status: 'idle',
        error: null,

        currentPage: 0,
    },
    reducers:{
        setRegion: (state, action) => {state.selectedRegion = action.payload},
        setPage: (state, action) => {state.currentPage = action.payload}
    },

    extraReducers: (builder) =>{
        builder
        .addCase(fetchCountries.fulfilled, (state, action) => {
            state.status = 'Success!';
            state.countries = action.payload;
        })
        .addCase(fetchCountries.pending, (state) => {
            state.status = 'Loading';
        })
        .addCase(fetchCountries.rejected, (state, action) => {
            state.status = 'Failed';
            state.error = action.error.message
        });
    },
});


export const {setRegion,setPage} = regionSlice.actions
export default regionSlice.reducer