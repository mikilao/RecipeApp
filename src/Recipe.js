import React from 'react'

const Recipe = ({title, calories, dietLabels,image})=>{
    return(
        <div>
            <h1> {title}</h1>
            <h5>{dietLabels}</h5>
            <p>{calories}</p>
            <img src={image} alt='/'></img>
        </div>
    )
}
export default Recipe;