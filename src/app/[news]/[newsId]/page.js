import { getDetailsNews } from '@/utils/getDetailsNews';
import { Box, Container, Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const NewsDetailsPage = async({params}) => {
    const {data} = await getDetailsNews(params.newsId)
    console.log(data)
    return (
        <Box>
            <Container>
            <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Image src={data.thumbnail_url} alt='complex'/>
                    <Grid container spacing={2}>
                         <Grid item xs={6}>
                           <Image src={data.image_url} alt='complex'/>
                         </Grid>
                         <Grid item xs={6}>
                           <Image src={data.image_url} alt='complex'/>
                         </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    details page heare 
                  </Grid>
            </Grid>
            </Container>
        </Box>
    );
};

export default NewsDetailsPage;