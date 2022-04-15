import  {useEffect, useState} from "react";
import {API_key} from "../settings";

export const useWeacther = (city) => {
    const [ data, setData ]= useState(null);
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`)
            .then(res => res.json())
            .then(setData);

    }, [city]);
    return data;
}