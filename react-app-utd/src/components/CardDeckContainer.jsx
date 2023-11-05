import React from 'react'

export const CardDeckContainer = ({ currentState, business }) => {
    
    async function fetchData(){
        console.log("function called")
        const apiUrl = `https://hackutd.fly.dev/api/bing/Texas`
        
        try {
            const response = await fetch(apiUrl, {
                method: "GET",
                mode: 'no-cors'
            });
            const movies = await response.json();
            console.log(movies);
            // const response = await fetch(apiUrl, {
            //     mode: 'no-cors',
            //     method: 'GET'
            // })
    
            // if (response.ok) {
            //     console.log(response)
            // }
        } catch(error){
            console.log(error);
        }
    
    }
    React.useEffect(() => {     
        fetchData()
    }, [currentState, business])
    return (
        <div>CardDeckContainer</div>
    )
}

