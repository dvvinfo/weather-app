import {useEffect, useReducer} from "react";

const initialState = {
    inputValue: '',
    editingCity: '',
    cityList: JSON.parse(localStorage.getItem('cityList')) || []
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CITY': {
            const newState = {...state, cityList: [...state.cityList, action.payload]};
            return newState;
        }
        case 'DELETE_CITY': {
            const oldArray = state.cityList;
            const newArray = oldArray.filter(el => el !== action.payload);
            return {...state, cityList: newArray};
        }
        case 'EDIT_CITY': {
            return {...state, inputValue: action.payload , editingCity: action.payload};
        }
        case 'EDIT_CITY_DONE': {
            const { editingCity } = state;
            const oldArray = state.cityList;
            const filteredArray = oldArray.filter(el => el !== editingCity);
            const newArray = [...filteredArray, action.payload]
            return {...state, cityList: newArray, inputValue: initialState.inputValue, editingCity: initialState.editingCity };
        }
        case 'CHANGE_INPUT_VAlUE': {
            return {...state, inputValue: action.payload};
        }
        case 'RESET_INPUT_VAlUE': {
            return {...state, inputValue: initialState.inputValue};
        }
        default:
            return initialState
    }
}

export const useCitiesList = () => {
    const [state,dispatch] = useReducer(reducer, initialState);
    const {cityList} = state;
    useEffect(() => {
        localStorage.setItem('cityList', JSON.stringify(cityList))

    }, [cityList])
    return [state, dispatch]
}