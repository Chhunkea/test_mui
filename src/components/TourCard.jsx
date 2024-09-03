import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "../App.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CiClock2 } from "react-icons/ci";
import Rating from "@mui/material/Rating";
import { createTheme, ThemeProvider } from "@mui/material";
import tour from "../data.json";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
            backgroundColor: "blue",
          },
        },

        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 24,
            backgroundColor: "red",
          },
        },
      ],
    },
  },
});

const TourCard = ({ tour }) => {
  return (
    <Grid item xs={4}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img src={tour.image} className="img" alt="car" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "5px",
            }}
          >
            <Typography variant="h5">{tour.name}</Typography>
            {/* Star */}
            <Box
              sx={{
                marginBottom: "20px",
              }}
            >
              <Typography className="flex items-center">
                <CiClock2 className="mr-1" />
                {tour.duration} hours
              </Typography>
            </Box>

            {/* Rating */}
            <Box>
              <Typography variant="body1" className="flex items-center">
                <Rating
                  name="half-rating"
                  value={tour.rating}
                  defaultValue={2.5}
                  precision={0.5}
                  className="mr-2"
                />

                <Typography className="flex">
                  <Typography className="mr-2">{tour.rating}</Typography>
                  <Typography>({tour.numberOfReviews} review)</Typography>
                </Typography>
              </Typography>

              <Typography variant="body3">From {tour.price}</Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
