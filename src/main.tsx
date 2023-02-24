import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Details } from './pages/Details'
import { Search } from './pages/Search'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/details/:media_type/:id' element={<Details />}/>
      <Route path='/search' element={<Search />}/>
    </Routes>
  </BrowserRouter>,
)
