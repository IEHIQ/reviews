import Routing from './Routing.js';
import './App.sass';
import { useState } from 'react';

function App() {
  const [isAuthenticated, setAuthentication] = useState(false);

  return (
    <div className="App">
      <Routing isAuthenticated={ isAuthenticated }/>
    </div>
  );
}

export default App;
