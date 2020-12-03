import React from 'react';
import './App.css';
import BmrCalc from './components/BmrCalc';
function App() {
  return (
    <div className="App text-center">
     <h1 className="p-4">BMR and Daily Calorie Calculator</h1>
     <BmrCalc />
    </div>
  );
}

export default App;
