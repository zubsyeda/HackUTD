import React, { useState } from 'react';
import './App.css';
import { BasicButtonComponent } from './components/BasicButtonComponent';
import { ChartComponent } from './components/ChartComponent';
import { MainComponent } from './components/MainComponent';
import { FeedBackComponent } from './components/FeedBackComponent';
import { CardDeckContainer } from './components/CardDeckContainer';


// function CardContainer() {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-4">
//           <div className="card">
//             <div className="card-body">
//               <h5 className="card-title">70 years later, Waco remembers deadly tornado that reshaped city</h5>
//               <p className="card-text">Potts remembers the wind howling against the old house, bending trees to the ground. Finally, she said, her father managed to shove a couch into the hallway, where she and her brother hunkered down to ride out the storm. Dad made a move toward closing an open door on one end of the house when a nearby window exploded, turning glass shards into missiles.</p>
//               <a href="#" className="btn btn-primary">Learn More</a>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-4">
//           <div className="card">
//             <div className="card-body">
//               <h5 className="card-title">State Farm Continues Catastrophe Response as Tornadoes and Severe Weather Strike Again</h5>
//               <p className="card-text">State Farm is continuing our catastrophe response to severe spring weather and damage following another storm that hit Friday, March 31 across parts of the Southern Great Plains, Midwest and Ohio Valley......</p>
//               <a href="#" className="btn btn-primary">Learn More</a>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-4">
//           <div className="card">
            
//             <div className="card-body">
//               <h5 className="card-title">In Texas after severe storms bring tornadoes and tennis ball-sized hail to western and central US</h5>
//               <p className="card-text">Some text describing Card 3.</p>
//               <a href="#" className="btn btn-primary">Learn More</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


function App() {
    const [business, setBusiness] = useState('');
    const [currentState, setCurrentState] = useState('');
    const [incident, setIncident] = useState('');

    return (
      <div className="App">
        <MainComponent setBusiness={setBusiness} setState={setCurrentState}/>


        {currentState && (
            <ChartComponent currentState={currentState} setIncident={setIncident}/>
            
        )}
        {currentState && (
            <div style={{ width: '100%', paddingTop:'40px'}}>
            <FeedBackComponent businessType={business} state={currentState} incident={incident}/>
            </div>
        )}
       
        {currentState && (
            <div style={{ paddingTop:'30px'}}>
                <div>
                    <span style={{ paddingLeft:'20px', fontWeight:'bold', fontSize: '30px'}}>Recent News Articles</span>
                </div>
                <div>
                <CardDeckContainer currentState={currentState} business={business}/>
                </div>
            </div>
        )}
      </div>
    );
}


export default App;

