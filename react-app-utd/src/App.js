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

function CardContainer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="your-image-url" className="card-img-top" alt="Image Alt Text" />
            <div className="card-body">
              <h5 className="card-title">Texas businesses, homeowners affected by tornado, severe storm can get help from SBA</h5>
              <p className="card-text">Some text describing Card 1.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src="your-image-url" className="card-img-top" alt="Image Alt Text" />
            <div className="card-body">
              <h5 className="card-title">Card 2</h5>
              <p className="card-text">Some text describing Card 2.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src="your-image-url" className="card-img-top" alt="Image Alt Text" />
            <div className="card-body">
              <h5 className="card-title">Card 3</h5>
              <p className="card-text">Some text describing Card 3.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
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
        <CardContainer/>
        <h2 className='subheaders'>Customer Response Analysis</h2>
      </div>
    </div>
  );
}


export default App;

