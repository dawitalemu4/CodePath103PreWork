import React from 'react';

export default function Creator() {

const Name = "Name";
    const url = "url";
    const description = "description";
    const imageURL = "imageURL";

    return (
        <>
            <div id='Creator'>
                <h1>{Name}</h1>
                <p>{url}</p>
                <p>{description}</p>
                <img src={imageURL}/>
            </div>
        </>
    )
}