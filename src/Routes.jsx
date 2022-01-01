import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from './components/home/Home'
import Profile from './components/profile/Profile'

const myRoutes = props => 
<Routes>
    <Route path="*" element={<Home/>}/>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/profile/:username" element={<Profile/>}/>
</Routes>

export default myRoutes