import React from 'react';
import Image from "./Image";
import ImageProps from "./Image";
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
    const phone : ImageProps = {
        object: 'Samsung Galaxy S8',
        name:"galaxys8",
        height: 148.9,
        width: 68.1,

    };
  return (
    <div className="App">
        <Grid  item xs = {8}>
           menu
        <Grid item xs={4}>
            <Image path = />

        </Grid>

        </Grid>
    </div>
  );
}

export default App;
