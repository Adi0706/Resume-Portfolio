import React from 'react'
import Home from '../Pages/Home'
import { Routes,Route } from 'react-router-dom'

function Allroutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} ></Route>
        </Routes>

    </div>
  )
}

export default Allroutes