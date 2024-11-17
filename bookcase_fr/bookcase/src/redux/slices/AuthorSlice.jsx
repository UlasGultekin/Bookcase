import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    authors: [],
    selectedAuthors: {},
    loading: false

}

const BASE_URL = "http://localhost:8085/author"

export const getAllAuthors = createAsyncThunk("getAllAuthors", async () => {
    const response = await axios.get(BASE_URL)
    return response.data.result;
})

export const authorSlice = createSlice({
    name: "author",
    initialState,
    reducers: {
        setSelectedAuthor: (state, action) => {
            state.selectedAuthors = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllAuthors.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(getAllAuthors.fulfilled, (state, action) => {
            state.loading = false;
            state.authors = action.payload;
        })
    }
})
export const { setSelectedAuthors } = authorSlice.actions

export default authorSlice.reducer