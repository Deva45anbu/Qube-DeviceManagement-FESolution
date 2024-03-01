import './App.css';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './css/GlobalCSS.css'

// Importing the component responsible for defining routes
import { RoutesData } from './routes/RoutesData';

// Main App component 
function App() {
  return (
    // Wrapping the entire application in BrowserRouter for client-side routing
    <BrowserRouter>
      <RoutesData></RoutesData>
    </BrowserRouter>
  );
}

export default App;
