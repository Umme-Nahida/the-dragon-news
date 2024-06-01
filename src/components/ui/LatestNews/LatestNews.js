import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import topNews from "@/asset/top-news.png"
import topNews2 from "@/asset/top-news2.png"
import Image from 'next/image';
import { getAllNewsData } from '@/utils/getAllNewsData';

const LatestNews = async() => {
  const {data} = await getAllNewsData();
  console.log(data[0])
    return (
        <Box >
             <Card>
      <CardActionArea>
      <CardMedia>
        <Image src={data[0].thumbnail_url} width={800} height={500} alt='top-news'/>
      </CardMedia>
        <CardContent>
            <p className='text-white bg-red-500 rounded px-2 w-[100px] my-5'>
                {data[0].category}
            </p>
            <Typography gutterBottom variant='h4' component="div">
                    {data[0].title > 30 ? data[0].title.slice(0,30) + "..." : data[0].title }
            </Typography>
            <Typography gutterBottom>
                    By {data[0].author.name} - {data[0].author.published_date}
            </Typography>
          <Typography variant="body2" color="text.secondary">
                     {data[0].details.length > 150 ? data[0].details.slice(0,260) + "....." : data[0].details}
           </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Grid className='mt-5' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  
    {data.slice(0,4).map(news=>(
      <Grid key={news._id} item xs={6}>
      <Card> 
      <CardActionArea>
      <CardMedia>
        <Image src={news.thumbnail_url} width={800} height={600} alt='top-news'/>
      </CardMedia>
        <CardContent>
            <p className='text-white bg-red-500 rounded px-2 w-[100px] my-5'>
                {news.category}
            </p>
          <Typography gutterBottom variant='h6' component="div">
            {news.title}
          </Typography>
          <Typography gutterBottom>
          By {news.author.name} - {news.author.published_date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {news.details.length > 150 ? news.details.slice(0,120) + "....." : news.details}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
    </Grid>
    ))}
    
  
   </Grid>
    </Box>
    );
};

export default LatestNews;