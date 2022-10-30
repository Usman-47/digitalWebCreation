import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Divider from "@mui/material/Divider";
import { Container } from "@mui/material";
export default function SimpleAccordion() {
  const [add, setAdd] = React.useState(true);

  const handleChange = () => {
    setAdd = !add;
  };
  return (
    <Container>
      <Typography
        variant='h4'
        sx={{
          color: "#fff",
          textAlign: "center",
          fontWeight: "600",
          padding: "80px",
          fontSize: { lg: "32px", md: "32px", sm: "24px", xs: "16px" },
        }}
        fontFamily='Raleway'
      >
        HOW TO BUY NON-FUNGIBLE TOKEN
      </Typography>

      <Accordion onClick={handleChange}>
        <AccordionSummary
          expandIcon={<AddIcon sx={{ color: "#fff" }} />}
          aria-controls='panel1a-content'
          id='panel1a-header'
          sx={{ backgroundColor: "#070517" }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "26px", md: "26px", sm: "20px", xs: "16px" },
            }}
            fontFamily='Raleway'
          >
            Where can I purchase/mint/redeem?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#070517" }}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "26px", md: "26px", sm: "20px", xs: "16px" },
            }}
            fontFamily='Raleway'
          >
            You can only mint on our site soon.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ bgcolor: "#4efd93" }} />
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon sx={{ color: "#fff" }} />}
          aria-controls='panel2a-content'
          id='panel2a-header'
          sx={{ backgroundColor: "#070517" }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "26px", md: "26px", sm: "20px", xs: "16px" },
            }}
            fontFamily='Raleway'
          >
            When can I purchase/mint/redeem?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#070517" }}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "26px", md: "26px", sm: "20px", xs: "16px" },
            }}
            fontFamily='Raleway'
          >
            We are going to have only one minting period. The Public Sale will
            be announced on our social media pages and on our website.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ bgcolor: "#4efd93" }} />
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon sx={{ color: "#fff" }} />}
          aria-controls='panel2a-content'
          id='panel2a-header'
          sx={{ backgroundColor: "#070517" }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "26px", md: "26px", sm: "20px", xs: "16px" },
            }}
            fontFamily='Raleway'
          >
            What is a redeemable free mint?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#070517" }}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "26px", md: "26px", sm: "20px", xs: "16px" },
            }}
            fontFamily='Raleway'
          >
            A redeemable free mint is a free NFT for which you only have to pay
            gas and transaction fees.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ bgcolor: "#4efd93" }} />
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon sx={{ color: "#fff" }} />}
          aria-controls='panel2a-content'
          id='panel2a-header'
          sx={{ backgroundColor: "#070517" }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "26px", md: "26px", sm: "20px", xs: "16px" },
            }}
            fontFamily='Raleway'
          >
            When is the Public Sale?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#070517" }}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "26px", md: "26px", sm: "20px", xs: "16px" },
            }}
            fontFamily='Raleway'
          >
            We are going to have only one minting period. The Public Sale will
            be announced on our social media pages and on our website. Ensure to
            use only links from the official DWCC Discord server channel.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ bgcolor: "#4efd93" }} />
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon sx={{ color: "#fff" }} />}
          aria-controls='panel2a-content'
          id='panel2a-header'
          sx={{ backgroundColor: "#070517" }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "26px", md: "26px", sm: "20px", xs: "16px" },
            }}
            fontFamily='Raleway'
          >
            How do I mint in the Public Sale?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#070517" }}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "26px", md: "26px", sm: "20px", xs: "16px" },
            }}
            fontFamily='Raleway'
          >
            Through the minting page and link your registered wallet.
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "26px", md: "26px", sm: "20px", xs: "16px" },
            }}
            fontFamily='Raleway'
          >
            The site will display the current auction price and the quantity of
            mint available for purchase. The next step is for you to choose the
            quantity you would like to purchase, not exceeding the maximum
            amount per transaction, and then click on the Mint Button. A prompt
            will appear on your screen displaying the transaction and gas fees
            incurred. Click on the ‘Confirm” button to complete your purchase.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ bgcolor: "#4efd93" }} />
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon sx={{ color: "#fff" }} />}
          aria-controls='panel2a-content'
          id='panel2a-header'
          sx={{ backgroundColor: "#070517" }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "26px", md: "26px", sm: "20px", xs: "16px" },
            }}
            fontFamily='Raleway'
          >
            What is the next stage in the event where the Public Sale doesn’t
            sell out?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#070517" }}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "26px", md: "26px", sm: "20px", xs: "16px" },
            }}
            fontFamily='Raleway'
          >
            The Sale will continue until the NFTs are sold out or the team
            determines another course of action.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ bgcolor: "#4efd93" }} />
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon sx={{ color: "#fff" }} />}
          aria-controls='panel2a-content'
          id='panel2a-header'
          sx={{ backgroundColor: "#070517" }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "26px", md: "26px", sm: "20px", xs: "16px" },
            }}
            fontFamily='Raleway'
          >
            Public Sale or Secondary market; when is the best time to mint?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#070517" }}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "26px", md: "26px", sm: "20px", xs: "16px" },
            }}
            fontFamily='Raleway'
          >
            This largely depends on the buyer and his aims.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ bgcolor: "#4efd93" }} />
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon sx={{ color: "#fff" }} />}
          aria-controls='panel2a-content'
          id='panel2a-header'
          sx={{ backgroundColor: "#070517" }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "26px", md: "26px", sm: "20px", xs: "16px" },
            }}
            fontFamily='Raleway'
          >
            What are Gas fees?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#070517" }}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "26px", md: "26px", sm: "20px", xs: "16px" },
            }}
            fontFamily='Raleway'
          >
            Gas fees are service fares paid to the miner who is charged with
            executing the cryptographic computation to decode the issue enabling
            user verification and security of a block to be put onto the
            blockchain immutably. Gas fees are paid through the smart contracts.
            And the amount varies with time, demand, and congestion on the
            blockchain network.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ bgcolor: "#4efd93" }} />
    </Container>
  );
}
