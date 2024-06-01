import { getDetailsNews } from '@/utils/getDetailsNews';
import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const NewsDetailsPage = async({params}) => {
    const {data} = await getDetailsNews(params.newsId)
    return (
        <Box className="my-20">
            <Container>
            <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Image src={data.thumbnail_url} width={800} height={500} alt='complex'/>
                    <Grid className='mt-3' container spacing={2}>
                         <Grid item xs={6}>
                           <Image src={data.image_url} width={600} height={300} alt='complex'/>
                         </Grid>
                         <Grid item xs={6}>
                           <Image src={data.image_url} width={600} height={300} alt='complex'/>
                         </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography gutterBottom variant='h4'>
                        {data.title}
                    </Typography>
                    <Box sx={{
                        display:"flex",
                        alignItems:"center",
                        gap:1,
                    }}>
                    <Avatar alt="Remy Sharp" src={data.author.img} />
                    <Typography gutterBottom>
                      By {data.author.name} 
                    </Typography>
                    <Typography gutterBottom>
                        - {data.author.published_date}
                    </Typography>
                    </Box>
                    <Typography style={{
                        textAlign:"justify",
                        whiteSpace:"pre-line",
                        margin: "10px 5px"
                    }}>
                        {data.details}
                    </Typography>
                  </Grid>
            </Grid>
            </Container>
        </Box>
    );
};

export default NewsDetailsPage;