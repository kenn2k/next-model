import Accordion from "@mui/material/Accordion";
import data from "@/data.json";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionDetails, Box, Typography } from "@mui/material";
const accordionData = data.accordionData;
const Accordions = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {accordionData.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary
            id={`accordion-summary-${index}`}
            aria-controls={`accordion-content-${index}`}
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography color="info.main">{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>{item.content}</AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Accordions;
