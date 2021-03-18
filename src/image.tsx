import React from "react";
import  galaxys8 from "./phones/galaxys8.png";
import App from "./App";
const imgStyle = {
    maxWidth: '50%',
    height: 'auto',
    display: 'inlineBlock',
}

function image  () {
    return(
        <div>
            <img style={imgStyle} src={galaxys8} alt = "galaxy-s8"/>
        </div>
    )
}
export default image;
