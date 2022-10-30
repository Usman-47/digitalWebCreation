import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";
import { Container } from "@mui/material";
export default function SimpleAccordion() {
  return (
    <Container>
      <Accordion>
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
            What is Digital Web Creation Club "DWCC"?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#070517" }}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "14px" },
            }}
            fontFamily='Raleway'
          >
            Web Creation Club “DWCC” is the premium hub where their leads
            artists, designers & creators are generating unique, never stopping
            digital collectibles characters, non-fungible token & content on the
            blockchain.
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "14px" },
            }}
            fontFamily='Raleway'
          >
            Beyond books , our aim is to provide compounding values and
            multimedia possibilities for our readers using decentralized
            technology.
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "14px" },
            }}
            fontFamily='Raleway'
          >
            Paradoxically, decentralized technology can help people to
            experience poetry and literature in ancient fashion: As a shared,
            direct experience, with barriers removed between poet and audience,
            Web3 encourages peer-to-peer interactions between writers and
            readers — now reincarnated as reader-collectors.
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "14px" },
            }}
            fontFamily='Raleway'
          >
            The DWCC Ecosystem provides unending possibilities. Our digital
            collections inspired by books we write are original and
            state-of-the-art.
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "14px" },
            }}
            fontFamily='Raleway'
          >
            These products start with an NFT series, but project forward a
            roadmap under which holders of the NFT gain access to an expanding
            array of products, activities, and experiences. Revenue from initial
            and subsequent NFT sales is fed back into the brand, supporting
            increasingly ambitious projects — which in turn drive up the value
            of the NFTs themselves.
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "14px" },
            }}
            fontFamily='Raleway'
          >
            Thus owning an NFT effectively makes you an investor, a member of a
            club, a brand shareholder, and a participant in all the top perks
            for holders.
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
            Who is behind Digital Web Creation Club "DWCC"?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#070517" }}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "14px" },
            }}
            fontFamily='Raleway'
          >
            Mono, Co-founder, Business Manage.
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "14px" },
            }}
            fontFamily='Raleway'
          >
            Luke, Co-founder, Business Development Manager.
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "14px" },
            }}
            fontFamily='Raleway'
          >
            Hamid, Marketing & Community Engagement.
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "14px" },
            }}
            fontFamily='Raleway'
          >
            Yullia, Artist, Illustration & Pixels.
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "14px" },
            }}
            fontFamily='Raleway'
          >
            Wahab, Technology Development Manager.
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "14px" },
            }}
            fontFamily='Raleway'
          >
            Rahul, Graphic Designer.
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "22px",
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "14px" },
            }}
            fontFamily='Raleway'
          >
            Mbot, Writer & Content Creation.
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "14px" },
            }}
            fontFamily='Raleway'
          >
            Emmar, Security Manager.
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "14px" },
            }}
            fontFamily='Raleway'
          >
            Mox, Collab manager.
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "14px" },
            }}
            fontFamily='Raleway'
          >
            Falcon, Community Manager.
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
            How many NFT collections will be created by Digital Web Creation
            Club "DWCC" ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#070517" }}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "14px" },
            }}
            fontFamily='Raleway'
          >
            Total of 5 collections will be created by Digital Web Creation Club
            “DWCC”.
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "14px" },
            }}
            fontFamily='Raleway'
          >
            1. SlothRoob ( Genesis Edition Boss Sloth Roob & Sloth Roob Official
            Collection ).
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "14px" },
            }}
            fontFamily='Raleway'
          >
            2. MammothBoof
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "14px" },
            }}
            fontFamily='Raleway'
          >
            3. SquirrelToot
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "14px" },
            }}
            fontFamily='Raleway'
          >
            4. TigerHooch
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "14px" },
            }}
            fontFamily='Raleway'
          >
            5. WeaselWooz
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
            WHow many NFTs in each collection will be there?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#070517" }}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "14px" },
            }}
            fontFamily='Raleway'
          >
            Each collection varies from 5353 – 100 uniquely generated digital
            collectibles living on the Ethereum blockchain Created by Digital
            Web Creation Club “DWCC”.
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
            What blockchain is being used?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#070517" }}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "14px" },
            }}
            fontFamily='Raleway'
          >
            We use ERC-721 tokens on the Ethereum blockchain for our NFTs.
            Alternative ERC standards plus other Layer 1 & 2 solutions are being
            explored and appraised for future use either in airdrops or mints.
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
            Who can I contact if I have more questions?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#070517" }}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "14px" },
            }}
            fontFamily='Raleway'
          >
            ✔ Linktree{" "}
            <a
              style={{ color: "#fff" }}
              href='https://linktr.ee/DigitalWebCreationClub'
            >
              https://linktr.ee/DigitalWebCreationClub
            </a>
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "14px" },
            }}
            fontFamily='Raleway'
          >
            ✔ Website{" "}
            <a style={{ color: "#fff" }} href='https://digitalwebcreation.com/'>
              https://digitalwebcreation.com/
            </a>
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "14px" },
            }}
          >
            ✔ Discord{" "}
            <a style={{ color: "#fff" }} href='https://discord.gg/dwcc'>
              https://discord.gg/dwcc/
            </a>
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "14px" },
            }}
          >
            ✔ Twitter{" "}
            <a style={{ color: "#fff" }} href='https://twitter.com/SlothRoob'>
              https://twitter.com/SlothRoob
            </a>
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "14px" },
            }}
            fontFamily='Raleway'
          >
            ✔ Facebook{" "}
            <a
              style={{ color: "#fff" }}
              href='https://www.facebook.com/TheChroniclesofRoob'
            >
              https://www.facebook.com/TheChroniclesofRoob
            </a>
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "14px" },
            }}
            fontFamily='Raleway'
          >
            ✔ Instagram{" "}
            <a
              style={{ color: "#fff" }}
              href='https://www.instagram.com/sloth_roob'
            >
              https://www.instagram.com/sloth_roob
            </a>
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "14px" },
            }}
            fontFamily='Raleway'
          >
            ✔ Youtube{" "}
            <a
              style={{ color: "#fff" }}
              href='https://www.youtube.com/channel/UCNroE867f5ixB-3Lf2wkZIg'
            >
              https://www.youtube.com/channel/UCNroE867f5ixB-3Lf2wkZIg
            </a>
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "14px" },
            }}
            fontFamily='Raleway'
          >
            ✔ TikTok{" "}
            <a
              style={{ color: "#fff" }}
              href='https://www.tiktok.com/@slothroobnft'
            >
              https://www.tiktok.com/@slothroobnft
            </a>
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "14px" },
            }}
            fontFamily='Raleway'
          >
            ✔ Medium{" "}
            <a
              style={{ color: "#fff" }}
              href='https://digitalwebcreation.medium.com/'
            >
              https://digitalwebcreation.medium.com/
            </a>
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
            How do I invite Friends to Digital Web Creation Club "DWCC"
            Community?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#070517" }}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "14px" },
            }}
            fontFamily='Raleway'
          >
            Through Discord. By clicking on the Digital Creation Club Discord
            channel, then click on the invite friends button. You can copy and
            share the link generated.
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "14px" },
            }}
            fontFamily='Raleway'
          >
            To avoid the default 7 days expiration ultimatum, click on ‘Edit
            invite lin’ and set the expiration to never.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ bgcolor: "#4efd93" }} />
    </Container>
  );
}
