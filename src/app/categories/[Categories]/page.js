import { getCategoriesNews } from '@/utils/getCategoriesNews';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import categoryImg from "@/asset/images.jpg"

const DynamicNewspage = async({params, searchParams}) => {
    const {data: categoryNews}= await getCategoriesNews(searchParams.category)
    return (
        <div>
            <h1 className='my-3'>Total {searchParams.category} post: {categoryNews.length}</h1>
         <Box>
            <Grid className='' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
           
             
             {categoryNews.map(news=>(
                <Grid key={news._id} item xs={6}>
                 <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
                 <Card> 
                <CardActionArea>
                <CardMedia sx={{
                    "& img": {
                        width: "100%",
                        height: "350px"
                    }
                }}>
                  <Image src={news.thumbnail_url} width={800} height={700} alt='top-news'/>
                </CardMedia>
                  <CardContent>
                      <p className='text-white bg-red-500 rounded px-2 w-[100px] my-5'>
                          {news.category}
                      </p>
                    <Typography gutterBottom  component="div">
                    {news.title > 30 ? news.title.slice(0,30) + "..." : news.title }
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
                 </Link>
              </Grid>
             ))}
         </Grid>

         </Box>
        </div>
    );
};

export default DynamicNewspage;