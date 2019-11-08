import React from 'react'

const DisplayGame = ({ image, name, id}) => {
    return (
        <div key={id}>
            <h1>{name}</h1>
            <p>{id}</p>
            <img src={image} alt={name} ></img>
        </div>
    )
}

export default DisplayGame