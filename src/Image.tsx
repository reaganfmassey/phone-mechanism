import React from "react";
import  galaxys8 from "./phones/galaxys8.png";
import styles from "./mystyle.module.css";
/*
const imgStyle = {
    maxWidth: '50%',
    height: 'auto',
    display: 'inlineBlock',
}

 */


function Image  () {
    return(
        <div>
            <img className={styles.root} src={galaxys8} alt = "galaxy-s8"/>
        </div>
    )
}
export default Image;
