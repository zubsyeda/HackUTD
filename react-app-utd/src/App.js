import React from 'react';
import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function BasicButtonExample() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
  );
}

function App() {
  return (
    <div className="App">
      <div className='maincomponent'>

        <h1>InsuranceHelper</h1>
        <p>This web application will output the top natural disasters that happen in your state to help you get an idea of the insurance your small business may need</p>
        <BasicButtonExample/>
        <div>
          <p> </p>
        </div>
      </div>
      <div className="secondcomponent">
        <h2 className='subheaders'>Customer Response Analysis</h2>
      </div>
    </div>
  );
}


export default App;

