"use client";
import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Link from 'next/link';
import { Button } from '@mui/base';
import { space } from 'postcss/lib/list';

const pages = [
  {
route:"home",
pathName:"/",
},
  {
route:"pages",
pathName:"/pages",
},
  {
route:"Categories",
pathName:"/categories",
},
  {
route:"Contact",
pathName:"/contact",
},
  {
route:"About",
pathName:"/About",
},
];
const Footer = () => {

    return (
        <div className='bg-black text-center py-10'>
            <Box className="text-white">
             <IconButton className='text-white'>
               <FacebookIcon/>
             </IconButton>
             <IconButton className='text-white'>
               <InstagramIcon/>
             </IconButton>
             <IconButton className='text-white'>
               <LinkedInIcon/>
             </IconButton>
             <IconButton className='text-white'>
               <PinterestIcon/>
             </IconButton>
          </Box>
          <Box className="w-full text-center my-5">
            {pages.map((page) => (
                <Link 
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
                href={page.pathName}
                >
                <Button className='text-white mr-5'>{page.route}</Button>
                </Link>
              
            ))}
          </Box>
          <Typography variant='body2' color="gray">
            @2023 The Dragon News Design by Developer Nahida
          </Typography>
          ;
        </div>
    );
};

export default Footer;