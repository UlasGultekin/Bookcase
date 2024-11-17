import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    books: [],
    selectedBook: {},
    loading: false

}

const BASE_URL = "http://localhost:8085/book"

export const getAllBooks = createAsyncThunk("getAllBooks", async () => {
    const response = await axios.get(BASE_URL)
    return response.data.result;
})

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        setSelectedBook: (state, action) => {
            state.selectedBook = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllBooks.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(getAllBooks.fulfilled, (state, action) => {
            state.loading = false;
            state.books = action.payload;
        })
    }
})
export const { setSelectedBook } = bookSlice.actions

export default bookSlice.reducer