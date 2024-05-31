import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import topNews from "@/asset/top-news.png"
import topNews2 from "@/asset/top-news2.png"
import Image from 'next/image';

const LatestNews = () => {
    return (
        <Box >
             <Card>
      <CardActionArea>
      <CardMedia>
        <Image src={topNews} width={800} alt='top-news'/>
      </CardMedia>
        <CardContent>
            <p className='text-white bg-red-500 rounded px-2 w-[100px] my-5'>
                Technology
            </p>
          <Typography gutterBottom variant="h5" component="div">
          Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
          </Typography>
          <Typography gutterBottom>
          By developer Nahida - May 31 2024
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2. Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Grid className='mt-5' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={6}>
    <Card>
      <CardActionArea>
      <CardMedia>
        <Image src={topNews2} width={800} alt='top-news'/>
      </CardMedia>
        <CardContent>
            <p className='text-white bg-red-500 rounded px-2 w-[100px] my-5'>
                Technology
            </p>
          <Typography gutterBottom  component="div">
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
    </Grid>
  
   </Grid>
    </Box>
    );
};

export default LatestNews;