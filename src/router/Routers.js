import React from 'react'
import {Routes , Route, Navigate} from "react-router-dom"
import Home from '../pages/Home';
import Events from '../pages/Events';
import EventDetails from '../pages/EventDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchResultsList from '../pages/SearchResultsList';
import Webinars from '../pages/Webinars';
import Workshops from '../pages/Workshops';
import Conferences from '../pages/Conferences';

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/events/:id' element={<EventDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/events/search' element={<SearchResultsList/>}/>
        <Route path='/events/webinars' element={<Webinars />} />
        <Route path='/events/workshops' element={<Workshops />} />
        <Route path='/events/conferences' element={<Conferences />} />
    </Routes>
  )
}

export default Routers