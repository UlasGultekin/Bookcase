
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import BookDetail from '../components/book/BookDetail'
import AuthorList from '../components/author/AuthorList'
import AuthorSave from '../components/author/AuthorSave'
import BookList from '../components/book/BookList'
import BookSave from '../components/book/BookSave'



function RouterConfig() {
    return (
        <div>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/book-details/:id' element={<BookDetail />} />
                <Route path='/all-authors' element={<AuthorList />} />
                <Route path='/new-add-author' element={<AuthorSave />} />
                <Route path='/all-book' element={<BookList />} />
                <Route path='/new-add-book' element={<BookSave />} />
            </Routes>
        </div>
    )
}

export default RouterConfig
