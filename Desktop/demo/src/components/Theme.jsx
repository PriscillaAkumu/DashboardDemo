import React from 'react'
import { Grid, Stack } from '@mui/material'
// eslint-disable-next-line
import { BarChartOutlined, DashboardCustomizeOutlined, DashboardOutlined, GridViewOutlined } from '@mui/icons-material'

export default function Summary() {
    return (
        <>
            <Grid 
                
              style={{display: 'flex', flexDirection: 'row', marginTop:'10px', gap: '1rem' }}  
            >
                <Grid xs={12} md={6} style={{  backgroundColor: 'rgb(25, 118, 210)', width:'100%' }}>
                    <Stack spacing={2}>
                        <Grid style={{ display: 'flex', flexDirection: 'row',  padding: '10px', gap: '1rem' }} >
                            <Grid>
                                <DashboardOutlined style={{fontSize: '60px', color: '#ffff'}} />
                            </Grid>
                            <Grid style={{color: '#fff'}}>
                                <span>Themes</span><br/>
                                <span style={{fontSize: '30px'}}>37</span>
                            </Grid>
                             
                            
                        </Grid>

                    </Stack>
                </Grid>

                <Grid xs={12} md={6} style={{ backgroundColor: 'rgb(253, 2, 2)', width:'100%' }}>
                    <Stack spacing={2}>
                        <Grid style={{ display: 'flex', flexDirection: 'row', padding: '10px', gap: '1rem' }} >
                            <Grid>
                                <BarChartOutlined style={{ fontSize: '60px', color: '#ffff' }} />
                            </Grid>
                            <Grid style={{ color: '#fff' }}>
                                <span>Answers</span><br />
                                <span style={{ fontSize: '30px' }}>626</span>
                            </Grid>


                        </Grid>

                    </Stack>
                </Grid>
            </Grid>
           
        </>
    )
}