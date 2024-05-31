"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import logo from "@/asset/logo.png"
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Link from 'next/link';
import Header from '../Header';

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

function Navber() {

  return (
    <>
    <Header></Header>
    <AppBar position="static" className='bg-black'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Image src={logo} width={100} height={100} alt="logo"/>
         
          <Box className="w-full text-center">
            {pages.map((page) => (
                <Link 
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
                href={page.pathName}
                >
                <Button className='text-white'>{page.route}</Button>
                </Link>
              
            ))}
          </Box>
          <Box>
           <Stack direction="row" spacing={1} sx={
            {"& svg":{
                color: "white"
            }}
           }>
             <IconButton className=''>
               <FacebookIcon/>
             </IconButton>
             <IconButton className=''>
               <InstagramIcon/>
             </IconButton>
             <IconButton className=''>
               <LinkedInIcon/>
             </IconButton>
             <IconButton className=''>
               <PinterestIcon/>
             </IconButton>
           </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
}
export default Navber;
