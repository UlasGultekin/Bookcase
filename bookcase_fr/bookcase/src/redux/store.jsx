import bookReducer from "../redux/slices/BookSlice";
import { configureStore } from '@reduxjs/toolkit'
import authorReducer from "../redux/slices/AuthorSlice";

export const store = configureStore({
    reducer: {

        book: bookReducer,
        author: authorReducer


    },
})