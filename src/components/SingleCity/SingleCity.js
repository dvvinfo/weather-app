import React from 'react';
import './single-city.css'
import Card from "../Card/Card";

const SingleCity = (props) => {
    const { city } = props.match.params;
   return (<Card city={city}/>)
}


export default SingleCity;