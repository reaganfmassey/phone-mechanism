import React from 'react';
import './App.css';
//import image from "./image";
import galaxys8 from "./phones/galaxys8.png";
import { Grid, makeStyles } from '@material-ui/core';

/*const useStyles = makeStyles() => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingTop: theme.spacing(3),
        paddingBottom: 100
    }
}));

 */
const imgStyle = makeStyles( {
    root: {
        leftPadding: '30px',
        //position: absolute,
        top: '800px',
        right: 0,
        maxWidth: '100%',
        maxHeight: '580px',
        bottom: '5px',
        left: '10000px',
    }
});

function App() {
const classes = imgStyle();
  return (
    <div className="App">
        <Grid item xs={4}>
        < img className={classes.root} src={galaxys8} alt = "galaxy-s8"/>
        </Grid>
        </div>
  );
}

export default App;
