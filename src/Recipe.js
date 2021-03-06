import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import './recipecard.css'

const Recipe = ({title, calories, dietLabels,image, ingredients})=>{
    return(
    <div className="container">
       
        <Card className="recipes">
        
          <CardImg className="image" width="100%" src={image} alt={title} />
          <CardImgOverlay>
            <CardTitle className="title">{title}</CardTitle>
            <h5>{dietLabels}</h5>
            <p>{calories}</p>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
          </CardImgOverlay>
        
      </Card>
       
        </div>
    )
}
export default Recipe; 

 /*    <h1> {title}</h1>
            <h5>{dietLabels}</h5>
            <p>{calories}</p>
            <img src={image} alt='/'></img>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>*/