import React from 'react'
function Card(props) {
    return  <div>
    <div>{props.nasaData.title}</div>
    <img src={props.nasaData.url} alt="nasa image of the day"></img>
    <div>{props.nasaData.explanation}</div>
    <div>{props.nasaData.date}</div>
    <div>{props.nasaData.copyright}</div>
</div>

}

export default Card;