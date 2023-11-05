import React from 'react'

export const FeedBackBoxComponent = ({ name, explaination }) => {


    
    return (
        <div style={{
            height: '450px',
            width: '300px',
            flex: 1, 
            backgroundColor: 'White',
            borderRadius: '15px'
        }}>
            <div style={{ padding:'10px'}}>
                <div>
                    <span style={{ fontWeight: 'bold'}}>{name} </span>
                </div>
                <div style={{
                    wordWrap: 'break-word',
                }}>
                    <span>
                        {explaination}
                    </span>
                </div>
            </div>

        </div>
    )
}

