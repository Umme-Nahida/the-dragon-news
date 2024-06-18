"use client";
import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import header from "@/asset/The-Dragon-News.png"
import Image from 'next/image';
import { showCurrentDate } from '@/utils/showCurrentDate';

const Header = () => {
    const currentDate = showCurrentDate();
    return (
        <Box className="text-center py-10"> 
            <Container>
              <Image src={header} width={500} height={500} alt='header logo' className='mx-auto' />
            </Container>
            <Typography variant='body2' color="gray" className='my-3'>
               @2023 the dragon news design 
            </Typography>
            <Typography >
              {currentDate}
            </Typography>

        </Box>
    );
};

export default Header;