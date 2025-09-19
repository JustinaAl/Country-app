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
        itemsPerPage: 12,

        savedCountries: [],
    },
    reducers:{
        setRegion: (state, action) => {state.selectedRegion = action.payload},
        setPage: (state, action) => {state.currentPage = action.payload},
        setSavedCountries: (state, action) => {
            if (localStorage.getItem('savedList')) {
                state.savedCountries = JSON.parse(localStorage.getItem('savedList'));
            } else {
                state.savedCountries = [];
            }
        },
        addCountry: (state, action) => {
            state.savedCountries = [...state.savedCountries, action.payload]
            localStorage.setItem('savedList', JSON.stringify(state.savedCountries));
        },
        removeCountry: (state, action) => {
            state.savedCountries = state.savedCountries.filter(obj => obj.name.common !== action.payload.name.common);
            localStorage.setItem('savedList', JSON.stringify(state.savedCountries));
        },
        resetPage: (state, action) => {state.currentPage = 0},


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


export const {setRegion,setPage, setSavedCountries, addCountry, removeCountry, resetPage} = regionSlice.actions
export default regionSlice.reducer