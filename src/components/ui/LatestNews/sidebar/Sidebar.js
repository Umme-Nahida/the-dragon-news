import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import siderImage from '@/asset/side-top-news.png'

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
        </Box>
    );
};

export default Sidebar;