import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Tutorial1 from './Tutorial1'
import Tutorial2 from './Tutorial2'
import Tutorial3 from './Tutorial3'
import Tutorial4 from './Tutorial4'

const Component: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/tutorial1'} element={<Tutorial1 />} />
        <Route path={'/tutorial2'} element={<Tutorial2 />} />
        <Route path={'/tutorial3'} element={<Tutorial3 />} />
        <Route path={'/tutorial4'} element={<Tutorial4 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Component
