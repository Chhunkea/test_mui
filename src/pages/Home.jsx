import React from "react";
import TourCard from "../components/TourCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import cities from "../data.json";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <div>
      <>
        {/* Map cities name */}
        <Container sx={{ marginY: 5 }}>
          {cities.map((city, index) => (
            <React.Fragment key={index}>
              <Typography
                variant="h4"
                component="h2"
                marginTop={5}
                marginBottom={5}
              >
                Top {city.name} Tours
              </Typography>

              {/* Map with tours */}
              <Grid container spacing={2}>
                {city.tours.map((tour, tourIndex) => (
                  <TourCard tour={tour} key={tourIndex} />
                ))}
              </Grid>
            </React.Fragment>
          ))}
        </Container>
      </>
    </div>
  );
};

export default Home;
