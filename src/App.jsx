import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Alerts from './Alerts';
import Register from './Register';
import Routes from './Route'; 

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="text-center text-3xl font-bold text-blue-700 mb-6">Stock & Order Management</h1>
          <Alerts />
          <Register />
        </header>
        <Routes />
      </div>
    </Router>
  );
}

export default App;
