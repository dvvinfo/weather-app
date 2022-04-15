import React from "react";
import './App.css';
import Input from "./components/input/Input";
import CardList from "./components/CardList/CardList";
import {useCitiesList} from "./hooks/useCitiesList";
import {ErrorBoundary} from "./ErrorBoundary/ErrorBoundary";
export const GlobalContent = React.createContext()
function App() {
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
}

export default App;
