import { Box, Typography, Paper } from "@mui/material";
import Container from "@mui/material/Container";
import StandardImageList from "../components/ImageCollapse";
import AccordionUsage from "../components/Accordion";
import LabelBottomNavigation from "../components/TabBar";

const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={5}>
        Explore the World in Vegas
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg"
          alt="waterfall"
          width={400}
        />
        <StandardImageList />
      </Box>

      <Box>
        <Typography variant="paragraph" component="p" marginTop={5}>
          About this ticket
        </Typography>
      </Box>

      {/* Paragraph */}
      <Box>
        <Typography variant="paragraph" component="p" marginTop={2}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
      </Box>

      {/* Accordion */}
      <Box>
        <Typography
          variant="paragraph"
          component="p"
          marginTop={5}
          marginBottom={2}
        >
          About this ticket
        </Typography>
        <AccordionUsage
        title={'tiki'}
        description={'kak tiki'}
        />
      </Box>

      {/* Tab bar */}
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          right: 0,
          width: "100%",
          overflow: "auto",
          display: "flex",
          justifyContent: "center",
        }}
        elevation={3}
      >
        <LabelBottomNavigation>
        </LabelBottomNavigation>
      </Paper>
    </Container>
  );
};

export default Tour;
