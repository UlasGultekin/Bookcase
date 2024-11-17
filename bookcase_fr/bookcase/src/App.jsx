import { useState } from 'react'

import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import Loading from './components/Loading'
import RouterConfig from './config/RouterConfig'
import AuthorSave from './components/author/AuthorSave'
function App() {


  return (
    <>
      <PageContainer>

        <Header />
        <RouterConfig />
        <Loading />

      </PageContainer>
    </>
  )
}

export default App
