import React from 'react'

const Recipe = ({title,calories,image})=> {
    return (
        <div>
            <h1>Title:{title}</h1>
            <p>Calories:{calories}</p>
            <img src={image} alt="" />
        </div>
    )
}

export default Recipe
