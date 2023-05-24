import React from 'react'
import {BrowserRouter as Router, Routes, Route }  from 'react-router-dom'
import { Home } from '../pages/Home'
import {Login} from '../pages/Login'
import { Registre } from '../pages/Registre'
import { Senha } from '../pages/Senha'

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={ <Login />  } />
        <Route path="/Login"  element={ <Login />  } />
        <Route path="/Register"  element={ <Registre />  } />
        <Route path="/Senha"  element={ <Senha />  } />
        <Route path="/Home"  element={ <Home />  } />
        </Routes>  
    </Router>
    
  )
}
