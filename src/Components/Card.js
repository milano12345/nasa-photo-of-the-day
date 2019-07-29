import React from 'react';
import styled from 'styled-components';

const Body = styled.div`

`
const Intro = styled.h1`
background: url(http://apod.nasa.gov/apod/image/0603/coma_misti.jpg) -80px -80px;
color: red;
-webkit-text-fill-color: transparent;
-webkit-background-clip: text;
font-weight: bold;
font-size: 100px;
font-family: 'Barriecito', cursive;
width: 600px;
margin: 50px auto;
text-align: center;
`

const Title = styled.h1`

`;

const Text = styled.p`
color: #424242;
        font-family: "Adobe Caslon Pro", "Hoefler Text", Georgia, Garamond, Times, serif;
 letter-spacing:0.1em;
 text-align:center;
 margin: 40px auto;
 text-transform: lowercase;
 line-height: 145%;
 font-size: 14pt;
 font-variant: small-caps;
 width: 60%;
`

function Card(props) {
    return <Body>
         <Intro>Welcome Travelers!</Intro>
        <img src={props.nasaData.url} alt="nasa image of the day"></img>
        <Title>{props.nasaData.title}</Title>
        <Text>{props.nasaData.explanation}</Text>
        <Text>{props.nasaData.date}</Text>
        <Text>{props.nasaData.copyright}</Text>
    </Body>

}

export default Card;