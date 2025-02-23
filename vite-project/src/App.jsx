import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Pages/AboutUs/AboutUs";
import HomePage from "./Pages/HomePage/HomePage";
import CommunityBusinessNetwork from "./Pages/CommunityBusinessNetwork/CommunityBusinessNetwork";
import EventsAndPrograms from "./Pages/EventsAndPrograms/EventsAndPrograms";
import ResourcesAndSupport from "./Pages/ResourcesAndSupport/ResourcesAndSupport";
import DonateAndSponsorships from "./Pages/DonateAndSponsorships/DonateAndSponsorships";
import ContactAndSocialMedia from "./Pages/ContactAndSocialMedia/ContactAndSocialMedia";

function App() {
  return (
    <Router>
      
    <div className="flex flex-col min-h-screen">
      {" "}
      {/* Applying background color here */}
      <Header />
      <div className="flex-grow">
        <Routes>
       
          <Route path="/" element={<HomePage />} />

          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/community-business-network" element={<CommunityBusinessNetwork />} />
          <Route path="/events-and-programs" element={<EventsAndPrograms />} />
          <Route path="/resources-and-support" element={<ResourcesAndSupport />} />
          <Route path="/donate-and-sponsorships" element={<DonateAndSponsorships />} />
          <Route path="/contact-and-social-media" element={<ContactAndSocialMedia />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>

  )
}

export default App;
