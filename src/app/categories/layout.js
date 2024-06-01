import CategoriesList from '@/components/ui/Categories/CategoriesList';
import { Box, Container, Grid } from '@mui/material';
import React from 'react';

const CategoriesLayout = ({children}) => {
    // console.log(children);
    return (
        <Box className="my-5">
          
            <Grid container spacing={2}>
                 <Grid item xs={6} md={3}>
                   <CategoriesList></CategoriesList>
                 </Grid>
                 <Grid item xs={6} md={9}>
                   {children}
                 </Grid>
               </Grid>
            
        </Box>
    );
};

export default CategoriesLayout;