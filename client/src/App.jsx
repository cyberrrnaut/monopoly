import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Profile from './pages/Profile'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Signin from './pages/Signin'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'


function App() {
  
  return (
  
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/sign-in' element={<Signin/>}/>
    <Route path='/sign-up' element={<SignUp/>}/>
    <Route path='/about' element={<About/>}/>
    <Route element={<PrivateRoute />}>
    <Route path='/profile' element={<Profile/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
