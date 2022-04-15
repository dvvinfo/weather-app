import React from 'react';
import Input from "../input/Input";
import {ErrorBoundary} from "../../ErrorBoundary/ErrorBoundary";
import CardList from "../CardList/CardList";
import {GlobalContent} from "../../App";
import {useCitiesList} from "../../hooks/useCitiesList";

const Wrapper = () => {
    const [state, dispatch] = useCitiesList();
    return (
        <GlobalContent.Provider value={{state, dispatch }}>
                    <div className="main">

                        <Input />
                        <ErrorBoundary>
                            <CardList cityList = {state.cityList} />
                        </ErrorBoundary>
                    </div>
        </GlobalContent.Provider>
    );
};

export default Wrapper;