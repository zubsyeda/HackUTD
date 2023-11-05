import React, { useState } from 'react';
import './App.css';
import { BasicButtonComponent } from './components/BasicButtonComponent';
import { ChartComponent } from './components/ChartComponent';
import { MainComponent } from './components/MainComponent';


function App() {
    const [ selectedState, setSelectedState] = React.useState('')

    return (
        <div className="App">
            <MainComponent setSelectedState={setSelectedState}/>
            <div className="secondcomponent">
                <h2 className='subheaders'>Customer Response Analysis</h2>
            </div>
            {selectedState && (
                <ChartComponent selectedState={selectedState}/>
            )}
        </div>
    );
}


export default App;

