import React from 'react'
import { FeedBackBoxComponent } from './FeedBackBoxComponent'

export const FeedBackComponent = ({ businessType, state, incident }) => {

    const [messageResponse, setMessageResponse] = React.useState('');

    async function fetchData() {
        console.log("This function is called!");
        const apiUrl = 'http://localhost:5001/api/chatgpt';
    
        const jsonData = {
          state: state,
          businessType: businessType,
          incidentStatistic: incident,
        };
    
        try {
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
          })

          if (response.ok){
            const responseData = await response.json()
            console.log(responseData.result)
            if (!messageResponse){
                setMessageResponse(responseData.result)

            }
          }
            // console.log(response)
        //     const responseText = await response.text(); // Get the response as text
        //     const responseData = JSON.parse(responseText); // Parse the text if neede
        //   if (response.ok) {
        //     const responseData = await response.json();
        //     const cleanedResult = responseData.result.replace(/\\n/g, '');
        //     const resultObject = JSON.parse(cleanedResult);
        //     setMessageResponse(resultObject);
        //     console.log(messageResponse);
        //   } else {
        //     throw new Error(`Error: ${response.statusText}`);
        //   }
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      }

    React.useEffect(() => {
        fetchData()
    }, [])

   return(
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', padding: '10px', backgroundColor: '#0E538C'}}>
            <div style={{padding: '20px 0px 30px 60px'}}>
                <span style={{ color:'White', fontSize: '35px'}}>OpenAI FeedBack</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', padding: '0px 0px 0px 70px' }}>
                {messageResponse && (
                      <p>
                        {messageResponse}
                      </p>
                )}
              

            </div>
        </div>
   )
}

