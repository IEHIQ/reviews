import React from 'react';
import { Route, Routes } from "react-router-dom";
import Auth from './pages/auth/Auth';
import Place from './pages/Place';
import PlaceList from './pages/PlaceList';
import PlaceStats from './pages/PlaceStats';
import Users from './pages/Users';

function Routing(props) {
    if (props.isAuthenticated) {
        return (
            <Routes>
                <Route path='*' element = { <Users /> }/>
                <Route path='/places' element = { <PlaceList /> }/>
                <Route path='/places/:id' element = { <Place /> } />
                <Route path='/places/:id/stats' element = { <PlaceStats /> }/>
                <Route path='/users' element = { <Users /> }/>
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path='*' element = { <Auth /> }/>
        </Routes>
    );
}

export default Routing;