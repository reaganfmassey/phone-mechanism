import React from "react";
import  galaxys8 from "./phones/galaxys8.png";
import styles from "./mystyle.module.css";
import {Component} from "react";

/*
const imgStyle = {
    maxWidth: '50%',
    height: 'auto',
    display: 'inlineBlock',
}

 */

export interface ImageProps{
    //object?: 'Samsung Galaxy S8'| 'none'
    name:string
    height: number
    width: number
    url?: string

};


class Image extends Component {
    render() {
        return (
            <div>
                <img className={styles.root} src={this.props.name} alt="galaxy-s8"/>
            </div>
        )
    }
}
export default Image;
