import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';


export default function Content() {
  return (
    <Grid container rowSpacing={1} direction='row'>
    <Grid item xs={6}>
     <Card sx={{backgroundColor:'primary'}}></Card>
    </Grid>
    <Grid item xs={6}>
     <Card sx={{backgroundColor:'red'}}></Card>
    </Grid>
   
  </Grid>
  )
}

