import LatestNews from "@/components/ui/LatestNews/LatestNews";
import Sidebar from "@/components/ui/LatestNews/sidebar/Sidebar";
import { Box, Grid } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Box className="my-5">
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <LatestNews></LatestNews>
        </Grid>
        <Grid item xs={6} md={4}>
          <Sidebar></Sidebar>
        </Grid>
      </Grid>
    </Box>
  );
}
