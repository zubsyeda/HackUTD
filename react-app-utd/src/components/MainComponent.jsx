import React from 'react'
import { BasicButtonComponent } from './BasicButtonComponent'

export const MainComponent = ({setSelectedState}) => {
  return (
    <div>
        <div>
            <h1>InsuranceHelper</h1>
            <p>This web application will output the top natural disasters that happen in your state to help you get an idea of the insurance your small business may need</p>
        </div>
        <div>
            <BasicButtonComponent setSelectedState={setSelectedState}/>
        </div>
    </div>
  )
}

