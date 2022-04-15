import React, {useContext, useRef} from 'react';
import './input.css'
import {GlobalContent} from "../../App";

export const Input = () => {
    const inputRef = useRef(null);
    const {dispatch, state:{inputValue, editingCity}} = useContext(GlobalContent);
    const handleOnAd= () => {
        if (inputValue.length) {
            dispatch({
                type: 'ADD_CITY',
                payload: inputValue
            })
            dispatch({
                type: 'RESET_INPUT_VAlUE'
            })
            inputRef.current.focus();

        }
        }
    const handleOnDone= () => {
        if (inputValue.length) {
            dispatch({
                type: 'EDIT_CITY_DONE',
                payload: inputValue
            })
            dispatch({
                type: 'RESET_INPUT_VAlUE'
            })
            inputRef.current.focus();

        }
    }
    const handleOnChange = (e) => {
        dispatch({
            type: 'CHANGE_INPUT_VAlUE',
            payload: e.target.value
        })
    }

    return (
        <div className="input-wrapper">
            <input className="input"
                   type="text"
                   onChange={handleOnChange} value={inputValue} ref={inputRef}

            />
            {
                editingCity
                    ?
                    <button className="button" onClick={handleOnDone} >done</button>
                    :
                    <button className="button" onClick={handleOnAd} ><img src="./icons/plus-lg.svg" alt=""/></button>
            }


        </div>
    );
};
export default Input