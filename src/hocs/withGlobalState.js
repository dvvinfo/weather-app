import {useContext} from "react";
import {GlobalContent} from "../App";


export const withGlobalState = Component => (props) => {
    const { state } = useContext(GlobalContent)

    return <Component {...{...props, state}}/>;
}