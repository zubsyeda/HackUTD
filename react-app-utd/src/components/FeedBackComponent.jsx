import React from 'react'
import { FeedBackBoxComponent } from './FeedBackBoxComponent'

export const FeedBackComponent = ({ business, currentState, incident }) => {

    const [messageResponse, setMessageResponse] = React.useState('');

    async function fetchData (){
        console.log("This function is called!")
        const apiUrl = 'https://hackutd.fly.dev/api/chatgpt';
        
        var jsonData = {
            "state": currentState,
            "businessType": business,
            "incidentStatistic": incident
        }

        try {
            const response = await fetch(apiUrl, {
                mode: 'cors',
                method: 'POST',
                // headers: {
                //     'Content-Type': 'application/json; charset=utf-8',
                //     // 'x-powered-by': 'Express',
                //     // 'content-encoding': 'br',
                //     // 'connection': 'keep-alive',
                //     // 'keep-alive': 'timeout=5',
                //     // 'transfer-encoding': 'chunked',
                //     // 'server': 'Fly/7328d5b5 (2023-10-27)'
                // },
                body: JSON.stringify(jsonData),
            });
            
            if (response.ok) {
                const responseData = await response.json();
                const cleanedResult = responseData.result.replace(/\\n/g, '');
                const resultObject = JSON.parse(cleanedResult);
                setMessageResponse(resultObject);
                console.log(messageResponse);
            } else {
                throw new Error(`Error: ${response.statusText}`);
            }
        } catch (error) {
            console.error('Error fetching data:', error.message);

        }
    }

    React.useEffect(() => {
        fetchData()
    }, [business, currentState, incident])

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

