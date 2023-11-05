import React, { useState } from 'react'
import { BasicButtonComponent } from './BasicButtonComponent'

export const MainComponent = ({ setBusiness, setState}) => {
    const [ inputState, setInputState] = useState('');
    const [ selectedState, setSelectedState] = React.useState('')

    const handleInputChange = (e) => {
        setInputState(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setBusiness(inputState);
        setState(selectedState);
    }
    
    return (
        <div className="maincomponent">
            <div>
                <h1>SafeBiz</h1>
                <p>This web application will output the top natural disasters that happen in your state to help you get an idea of the insurance your small business may need</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'row'}}>
                        <input onChange={handleInputChange}/>
                        <BasicButtonComponent setSelectedState={setSelectedState}/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

