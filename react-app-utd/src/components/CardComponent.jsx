import React from 'react'

export const CardComponent = ({ description, image, name, url }) => {

    return (
        <div style={{
            display: 'flex', 
            flexDirection: 'column',
            flex: 1,
            padding:'0px 15px 0 15px',
            border: '1px solid black',
            borderRadius: '15px',
            margin:'0px 10px 5px 10px'
            }}>
            <div style={{
                display:'flex',
                flexDirection: 'row',
                padding:'10px',
            }}>
                <div>
                    <span>{name}</span>
                </div>
                <div>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                    <img src={image}/>
                    </a>
                </div>
            </div>
            <div>
                <p>{description}</p>
            </div>
        </div>
    )
}

