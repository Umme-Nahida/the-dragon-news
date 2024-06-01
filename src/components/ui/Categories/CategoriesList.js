import { getAllCategories } from '@/utils/getAllCategories';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';


const CategoriesList = async() => {
    const {data: allCategories} = await getAllCategories();
    console.log("all news category ",allCategories)
    return (
        <Box className=" mt-5 bg-gray-50  p-5 rounded">
          <Typography>
            Category 
          </Typography>
          <Divider/>
          <Stack rowGap={1} sx={{ mt: "2.5"}}>
            {
                allCategories.map(item=>(
                    
                      <Link key={item._id} href={`/categories/news?category=${item.title.toLowerCase()}`}>
                        <Button   className='py-2 w-full' variant="outlined"> {item.title}</Button>
                     </Link>  
                ))
            }
          </Stack>
        </Box>
    );
};

export default CategoriesList;