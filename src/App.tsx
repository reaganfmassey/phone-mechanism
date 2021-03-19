import React from 'react';
import Image from "./Image";
import { Grid } from '@material-ui/core';


/*const useStyles = makeStyles() => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingTop: theme.spacing(3),
        paddingBottom: 100
    }
}));


const imgStyle = makeStyles( {
    root: {
        leftPadding: '30px',
        //position: absolute,
        top: '800px',
        right: 0,
        maxWidth: '100%',
        maxHeight: '680px',
        bottom: '5px',
        left: '10000px',
    }
});
*/
function App() {
  return (
    <div className="App">
        <Grid  item xs = {8}>
            <Image/>
        <Grid item xs={4}>
            < Image/>

        </Grid>

        </Grid>
    </div>
  );
}

export default App;
