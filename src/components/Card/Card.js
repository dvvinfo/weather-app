import React, {memo, useContext} from 'react';
import './card.css'
import {useWeacther} from "../../hooks/useWeacther";
import {GlobalContent} from "../../App";
import {Link, useNavigate, useMatch} from "react-router-dom";
const Card = memo( ({city}) => {
    const  data = useWeacther(city);
    const {dispatch} = useContext(GlobalContent);
    const navigate= useNavigate();
    if (!data) return null;
    const { name, weather, main} = data;
    const { description, icon } = weather[0]
    const { temp,humidity, feels_like } = main
    const handleOnDelete = () => {
        dispatch({
            type: 'DELETE_CITY',
            payload: city,
        })
    }
    const handleOnEdit = () => {
        dispatch({
            type: 'EDIT_CITY',
            payload: city,
        })
        navigate.push('/home')
    }
    return (

        <div className="card">
            <div className="card__btn-wrapper">
            <button className="btn-edit" onClick={handleOnEdit}><img src="./icons/pencil-fill.svg" alt=""/></button>
            <button className="btn-delete" onClick={handleOnDelete}><img src="./icons/x.svg" alt=""/></button>
            </div>
           <div className="card__info">
               <div className="card__img">
                   <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/>
               </div>
               <h4 className="card__title"> {name}</h4>
               <div className="card__description">{description}</div>
               <div className="card__temperature">{temp.toFixed()}</div>
           </div>
            <div className="card__info info">
                <div>Humidity: {humidity}</div>
                <div>Feels like: {feels_like}</div>
            </div>
        </div>

    );
});

export default Card;