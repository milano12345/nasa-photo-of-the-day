import React, { useState, useEffect } from "react";
import axios from 'axios';
import Card from './Card';
const CardContent = () => {
    const [nasaData, setNasaData]= useState([]);
    console.log(nasaData)
    useEffect(() => {
        const fetchData = () => {
          axios
            .get('https://api.nasa.gov/planetary/apod?api_key=9blwVFUnMed89wkaL9X8zjE5hJe5mtDnczkcQwg9&date=2019-07-01')
            .then(res => setNasaData(res.data))
           
        };
      
        fetchData();
      }, []);
    
    return <Card nasaData={nasaData}/>
}

export default CardContent;