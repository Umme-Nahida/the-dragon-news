import { Box, ButtonBase, Card, CardActionArea, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import siderImage from '@/asset/side-top-news.png'
import {data} from "@/API/data";
import sideBottomImg from '@/asset/side-bottom-img.png'
import defaultImg from '@/asset/blankImage.png'

const Sidebar = () => {
    return (
        <Box>
            <Card> 
      <CardActionArea>
      <CardMedia>
        <Image src={siderImage} width={800} alt='top-news'/>
      </CardMedia>
        <CardContent>
            <p className='text-white bg-red-500 rounded px-2 w-[100px] my-5'>
                Technology
            </p>
          <Typography
           gutterBottom  component="div">
          Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
          </Typography>
          <Typography gutterBottom>
          By developer Nahida - May 31 2024
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine.....
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
          
          {data.map((item)=>(
             <Grid key={item.id} container spacing={2}>
             <Grid item xs={6} md={4}>
                  <Image src={item.image} className='mt-5 rounded' width={500} height={300} alt='complex'/>
             </Grid>
             <Grid className='mt-5 mb-2' item xs={6} md={8}>
                <Typography
                   gutterBottom  component="div">
                  {item.title}
                </Typography>
                <Typography
                   gutterBottom  component="div">
                  {item.date}
                </Typography>
             </Grid>
              <Divider/>
            
           </Grid>
          ))}
       
       <Image src={sideBottomImg} className='mt-5' width={500} height={300} alt='complex'/>
      </Box>
    );
};

export default Sidebar;