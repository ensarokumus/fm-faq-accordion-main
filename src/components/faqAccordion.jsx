import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import plusIcon from "../assets/images/icon-plus.svg";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    // expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    expandIcon={<img src={plusIcon} alt="" />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  marginTop: "1rem",
  marginBottom: "1rem",
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  paddingBottom: "1.5rem",
}));

export default function FaqAccordion() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography
            variant="h2"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "900",
              color: "hsl(292, 42%, 14%)",
            }}
          >
            What is Frontend Mentor, and how will it help me?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            variant="p"
            sx={{
              fontSize: "1rem",
              fontWeight: "300",
              color: "hsl(292, 16%, 49%)",
            }}
          >
            Frontend Mentor offers realistic coding challenges to help
            developers improve their frontend coding skills with projects in
            HTML, CSS, and JavaScript. It's suitable for all levels and ideal
            for portfolio building.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography
            variant="h2"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "900",
              color: "hsl(292, 42%, 14%)",
            }}
          >
            Is Frontend Mentor free?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            variant="p"
            sx={{
              fontSize: "1rem",
              fontWeight: "300",
              color: "hsl(292, 16%, 49%)",
            }}
          >
            Yes, Frontend Mentor offers both free and premium coding challenges,
            with the free option providing access to a range of projects
            suitable for all skill levels.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography
            variant="h2"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "900",
              color: "hsl(292, 42%, 14%)",
            }}
          >
            Can I use Frontend Mentor projects in my portfolio?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            variant="p"
            sx={{
              fontSize: "1rem",
              fontWeight: "300",
              color: "hsl(292, 16%, 49%)",
            }}
          >
            Yes, you can use projects completed on Frontend Mentor in your
            portfolio. It's an excellent way to showcase your skills to
            potential employers!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography
            variant="h2"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "900",
              color: "hsl(292, 42%, 14%)",
            }}
          >
            How can I get help if I'm stuck on a challenge?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            variant="p"
            sx={{
              fontSize: "1rem",
              fontWeight: "300",
              color: "hsl(292, 16%, 49%)",
            }}
          >
            The best place to get help is inside Frontend Mentor's Discord
            community. There's a help channel where you can ask questions and
            seek support from other community members.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
