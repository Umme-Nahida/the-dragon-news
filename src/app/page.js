import LatestNews from "@/components/ui/LatestNews/LatestNews";
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
          side bar
        </Grid>
      </Grid>
    </Box>
  );
}
