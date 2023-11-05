import React from 'react'
import { CardComponent } from './CardComponent';


export const CardDeckContainer = ({ currentState, business }) => {
    
    const [newArticles, setNewArticles] = React.useState(null)
    async function fetchData() {
        console.log("function called");
        const apiUrl = `http://localhost:5001/api/bing/${business}-${currentState}`;
    
        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    },
                }).then(response => {
                if(response.ok){
                    response.json().then(json => {
                        const firstThreeResults= json.result.slice(0, 3);
                        setNewArticles(firstThreeResults)

                        console.log(firstThreeResults)
                    })
                }
            })            
            
    
            const contentType = response.headers.get("content-type");
    
            if (contentType && contentType.includes("application/json")) {
                const data = await response.json();
                console.log(data);
            } else {
                console.log("Response is not in JSON format");
            }
        } catch (error) {
            console.error(error);
        }
    }        
    
    React.useEffect(() => {     
        fetchData()
    }, [currentState, business])
    
    return (
        <div style={{ display:'flex', flexDirection:'row', paddingTop:'50px'}}>
            {newArticles !== null &&
                newArticles.map((item, index) => (
                    <CardComponent
                        key = {index}
                        description = {item.description}
                        image={item.image}
                        name={item.name}
                        url={item.url}
                    />
            ))}
        </div>
    )
}

