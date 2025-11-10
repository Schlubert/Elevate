//* App.tsx */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./src/components/Header";
import Navbar from "./src/components/Navbar";
import Home from "./src/pages/Home";
import Contact from "./src/pages/Contact";
import Industries from "./src/pages/Industries";
import Expertise from "./src/pages/Expertise";
import HowWeOperate from "./src/pages/Operate";
import CaseStudies from "./src/pages/CaseStudies";
import OurStory from "./src/pages/about/our-story";
import Team from "./src/pages/about/team";
import Values from "./src/pages/about/values";
import ChangeManagement from "./src/pages/expertise/change-management";
import LeadershipDevelopment from "./src/pages/expertise/leadership-development";
import CustomerExperience from "./src/pages/expertise/customer-experience";
import OperationalExcellence from "./src/pages/expertise/operational-excellence";
import PerformanceManagement from "./src/pages/expertise/performance-management";
import StrategicPlanning from "./src/pages/expertise/strategic-planning";
import SustainablePractices from "./src/pages/expertise/sustainable-practices";
import Hospitality from  "./src/pages/industries/hospitality";
import Manufacturing from "./src/pages/industries/manufacturing";
import NotForProfit from "./src/pages/industries/not-for-profit";
import ProfessionalServices from "./src/pages/industries/professional-services";
import Retail from "./src/pages/industries/retail";
import Engagement from "./src/pages/approach/engagement-models";
import Methodologies from "./src/pages/approach/methodologies";
import OurProcess from "./src/pages/approach/our-process";
import ToolsAndTechniques from "./src/pages/approach/tools-and-techniques";

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/how-we-operate" element={<HowWeOperate />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/about/our-story" element={<OurStory />} />
        <Route path="/about/team" element={<Team />} />
        <Route path="/about/values" element={<Values />} />
        <Route path="/expertise/change-management" element={<ChangeManagement />} />
        <Route path="/expertise/leadership-development" element={<LeadershipDevelopment />} />
        <Route path="/expertise/customer-experience" element={<CustomerExperience />} />
        <Route path="/expertise/operational-excellence" element={<OperationalExcellence />} />
        <Route path="/expertise/performance-management" element={<PerformanceManagement />} />
        <Route path="/expertise/strategic-planning" element={<StrategicPlanning />} />
        <Route path="/expertise/sustainable-practices" element={<SustainablePractices />} />
        <Route path="/industries/hospitality" element={<Hospitality />} />
        <Route path="/industries/manufacturing" element={<Manufacturing />} />
        <Route path="/industries/not-for-profit" element={<NotForProfit />} />
        <Route path="/industries/professional-services" element={<ProfessionalServices />} />
        <Route path="/industries/retail" element={<Retail />} />
        <Route path="/approach/engagement-models" element={<Engagement />} />
        <Route path="/approach/methodologies" element={<Methodologies />} />
        <Route path="/approach/our-process" element={<OurProcess />} />
        <Route path="/approach/tools-and-techniques" element={<ToolsAndTechniques />} />
      </Routes>
    </Router>
  );
}

export default App;