import React from 'react'
import { FeedBackBoxComponent } from './FeedBackBoxComponent'

export const FeedBackComponent = ({ businessType, state, incident }) => {

    const [messageResponse, setMessageResponse] = React.useState('');

    async function fetchData (){
        console.log("This function is called!")
        //const apiUrl = `http://localhost:5001/api/chatgpt/${state}/${businessType}/${incident}`;
        const apiUrl = `http://localhost:5001/api/chatgpt`;

        console.log(apiUrl)
        var jsonData = {
            "state": state,
            "businessType": businessType,
            "incidentStatistic": incident
        }

        try {
            const response = await fetch(apiUrl, {
                // mode: 'no-cors',
                method: 'POST',
           
                body: JSON.stringify(jsonData),
            }).then(response => {
                if(response.ok){
                  
                    // console.log(response)
                    response.json().then(json => {
                        console.log(json.result)
                    })
                } else{
                
                }
            });
            
            // if (response.ok) {
            //     const responseData = await response.json();
            //     const cleanedResult = responseData.result.replace(/\\n/g, '');
            //     const resultObject = JSON.parse(cleanedResult);
            //     setMessageResponse(resultObject);
            //     console.log(messageResponse);
            // } else {
            //     throw new Error(`Error: ${response.statusText}`);
            // }
        } catch (error) {
            console.error('Error fetching data:', error.message);

        }
    }

    React.useEffect(() => {
        fetchData()
    }, [businessType, state, incident])

   return(
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', padding: '10px', backgroundColor: '#0E538C'}}>
            <div style={{padding: '20px 0px 30px 60px'}}>
                <span style={{ color:'White', fontSize: '35px'}}>OpenAI FeedBack</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', padding: '0px 0px 0px 70px' }}>
                <div style={{ flex: 1 }}>
                {/* Content for the first div */}
                <FeedBackBoxComponent />
                </div>
                <div style={{ flex: 1 }}>
                {/* Content for the second div */}
                <FeedBackBoxComponent />
                </div>
                <div style={{ flex: 1 }}>
                {/* Content for the third div */}
                <FeedBackBoxComponent />
                </div>
            </div>
        </div>
   )
}

