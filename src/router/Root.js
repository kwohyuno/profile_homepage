import React from "react";
import {HashRouter} from "react-router-dom";
import RouteMain from "./RouteMain";

function Root(props){

    return (
        <HashRouter>
            <RouteMain/>
        </HashRouter>
    );
}

export default Root;