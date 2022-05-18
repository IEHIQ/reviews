import './App.sass';
import { React, useState } from 'react';
import ProtectedElement from './components/ProtectedElement.js';
import { Outlet, Route, Routes } from "react-router-dom";
import Auth from './pages/auth/Auth';
import Place from './pages/place/Place';
import PlaceList from './pages/placeList/PlaceList';
import PlaceStats from './pages/PlaceStats';
import Users from './pages/Users';
import Navbar from './components/navbar/Navbar';

const tempPlaces = [
    { 
        id : 1,
        img : '', 
        title : 'Place #1', 
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique tincidunt arcu eget lacinia. Fusce dignissim commodo neque et ultricies. Sed condimentum placerat mauris, in efficitur augue lobortis vitae. Phasellus sed risus varius, laoreet erat varius, suscipit neque. Nunc vel augue neque. In hac habitasse platea dictumst. Proin et lobortis tellus. Phasellus a mauris id ex commodo hendrerit. Morbi vel urna rutrum mi commodo ullamcorper. Donec ut semper eros, nec consectetur lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        rating : 3
    },
    { 
        id : 2,
        img : '', 
        title : 'Place #2', 
        desc : 'Pellentesque consequat arcu vel ante ultrices, sit amet fermentum nisi mattis. Ut congue, ligula quis commodo dapibus, mi felis fermentum lacus, in congue neque diam id nisi. Pellentesque iaculis vehicula consectetur. Vestibulum eget dapibus enim. Sed a mi consectetur, mollis nisi nec, aliquam dolor. Phasellus elementum finibus nisl molestie pharetra. Cras in laoreet dolor, eu sodales justo. Cras non vehicula massa, vel laoreet leo. Proin augue nibh, rutrum et rhoncus quis, elementum eu ipsum. Vestibulum consectetur fringilla justo id rhoncus. In aliquam ipsum pretium massa volutpat, in consectetur nisl lacinia. Donec eu est vel lorem faucibus pretium. Quisque hendrerit leo et ex posuere commodo.',
        rating : 5
    },
    { 
        id : 3,
        img : '', 
        title : 'Place #3', 
        desc : 'Nulla facilisi. Cras dapibus rutrum turpis, id pharetra erat iaculis ac. Sed ac dolor faucibus, dapibus nibh eu, volutpat massa. Nam vitae aliquam odio, sit amet pulvinar felis. Fusce sed urna a purus egestas vestibulum. Nullam maximus lacinia lacus ut bibendum. Donec nisi magna, ultrices a ante at, tristique mollis nibh. Curabitur suscipit fermentum neque et suscipit. Fusce rhoncus turpis lectus, ac fringilla neque iaculis non.',
        rating : 4
    },
    { 
        id : 4,
        img : '', 
        title : 'Place #4', 
        desc : 'Vivamus et auctor arcu. Sed pellentesque neque ut ornare placerat. Maecenas rutrum, risus eu sollicitudin tempor, nibh odio semper turpis, ac condimentum tortor nisi et orci. Curabitur ultrices nulla ipsum, ut posuere ante faucibus vel. Fusce ornare turpis a magna venenatis, eu lacinia eros blandit. Maecenas blandit nisi ut ornare ultrices. Vestibulum purus enim, ullamcorper eu pulvinar a, sagittis sit amet mi. Nunc quis eleifend magna. Nunc ultricies hendrerit ex vel congue. Etiam dignissim diam vel blandit imperdiet. Sed quis pharetra lectus, at egestas quam. Maecenas vel neque libero. Sed dapibus nec tellus eu porttitor.',
        rating : 4
    },
]

function App() {
    const [isAuthenticated, setAuthentication] = useState(false);
    const [role, setRole] = useState('admin');

    function handleAuth(value) {
        setAuthentication(value);
    }

    return (
        isAuthenticated === true ?
        <div className="App">
            <Navbar role={ role } />
            <Outlet />
            <Routes>
                <Route 
                    path='*' 
                    element = { <PlaceList places={tempPlaces}/> }
                />
                <Route 
                    path='/places' 
                    element = { <PlaceList places={tempPlaces}/> }
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
                        shouldRedirect={ !(role === 'admin') }
                        redirectPath={ '..' }
                    />  
                    }
                />
            </Routes>
        </div>
        :
        <div className='App'>
            <Routes>
                <Route 
                    path='*' 
                    element = { 
                        <Auth 
                            onAuth={ handleAuth }
                        /> 
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
