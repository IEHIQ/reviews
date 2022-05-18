import React from 'react';
import { Route, Routes } from "react-router-dom";
import ProtectedElement from './components/ProtectedElement';
import Auth from './pages/auth/Auth';
import Place from './pages/place/Place';
import PlaceList from './pages/placeList/PlaceList';
import PlaceStats from './pages/PlaceStats';
import Users from './pages/Users';

function Routing(props) {
    return (
        props.isAuthenticated === true ?
            <Routes>
                <Route 
                    path='*' 
                    element = { <PlaceList /> }
                />
                <Route 
                    path='/places' 
                    element = { <PlaceList /> }
                />
                <Route 
                    path='/places/:id' 
                    element = { <Place /> } 
                />
                <Route 
                    path='/places/:id/stats' 
                    element = { <PlaceStats /> }
                />
                <Route 
                    path='/users' 
                    element = {
                        <ProtectedElement 
                            element={
                            <Users />
                            }
                            shouldRedirect={ !(props.role === 'admin') }
                            redirectPath={ '..' }
                        />  
                    }
                />
            </Routes>
            :
            <Routes>
                <Route 
                    path='*' 
                    element = { 
                    <Auth 
                        onAuth={ props.handleAuth }
                    /> 
                    }
                />
            </Routes>
    )
}

export default Routing;