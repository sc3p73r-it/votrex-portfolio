import { Box } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { Services } from "./components/Services";
import { Approach } from "./components/Approach";
import { WhyVotrex } from "./components/WhyVotrex";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Hero />
        <TrustBar />
        <Services />
        <Approach />
        <WhyVotrex />
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
}
