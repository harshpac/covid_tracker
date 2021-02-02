import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import Styles from './Card.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({data: {recovered, deaths, confirmed, lastupdate}}) => {
   
   if(!confirmed) return 'loading...';
    return (
       <div >

        <Grid container spacing = {3} justify = "center">
            <Grid item component  ={Card} xs={12} md={3} className={Styles.infected}>
             <CardContent>
                 <Typography color="textSecondary" gutterBottom>Infected</Typography>
                 <Typography variant = "h5">{
                     <CountUp
                     start = {0}
                     end = {confirmed.value}
                     duration = {1}
                     separator=","
                     />
                 }</Typography>
                 <Typography variant = "body2">Number of active cases</Typography>
             </CardContent>
            </Grid>

            <Grid item component  ={Card} xs={12} md={3} className="card recovered">
             <CardContent>
                 <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                 <Typography variant = "h5">{<CountUp
                     start = {0}
                     end = {recovered.value}
                     duration = {1}
                     separator=","
                     />}
                 </Typography>
       
                 <Typography variant = "body2">Number of recovered cases</Typography>
             </CardContent>
            </Grid>

            <Grid item component  ={Card} xs={12} md={3} className="card deaths">
             <CardContent>
                 <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                 <Typography variant = "h5">{<CountUp
                     start = {0}
                     end = {deaths.value}
                     duration = {1}
                     separator=","
                     />}</Typography>
                 <Typography variant = "body2">Number of deaths</Typography>
             </CardContent>
            </Grid>
        </Grid>    

       </div>
        
       )
}

export default Cards;