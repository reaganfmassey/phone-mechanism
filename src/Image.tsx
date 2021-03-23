import React, {FC} from "react";
// eslint-disable-next-line
import  galaxys8 from "./phones/galaxys8.png";
// eslint-disable-next-line
import styles from "./mystyle.module.css";
import ReactDOM from "react-dom";
import { Grid } from '@material-ui/core';
import  { useState } from 'react';



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
   // height: number
    //width: number
    url?: string

};

const Image: FC<ImageProps> = ({ name, path}:any) => {
    //const classes = useStyles();
    const [select, changeImage] = useState(false);


    return (
        <div>
            <img className={path} src={path} alt="galaxy-s8"/>
        </div>

    );
}


const element = <div>
    <Grid  item xs = {8}>
                 menu
    <Grid item xs={4}>
        <Image name="galaxys8"/>;

        </Grid>

        </Grid>
                </div>
ReactDOM.render(
    element,
    document.getElementById('root')
);

/*
class Image extends React.Component {
    render() {
        return (
            <div>
                <img className={this.props.name} src={this.props.path} alt="galaxy-s8"/>
            </div>
        )
    }
*/

export default Image;
