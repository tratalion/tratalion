import React, { Component } from "react";
import PageBanner from "../components/Common/PageBanner";
import AboutContent from "../components/About/AboutContent";
import FunFactsTwo from "../components/Common/FunFactsTwo";
import TeamStyleThree from "../components/Common/TeamStyleThree";
import Feedback from "../components/Common/Feedback";
import Partner from "../components/Common/Partner";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";
import CustomNavbar from "../components/Layouts/CustomNavbar";

class Aabout extends Component {
  render() {
    return (
      <>
        <CustomNavbar />

        <PageBanner pageTitle="About Us" BGImage="bg-one" />

        <AboutContent />

        <FunFactsTwo />

        <TeamStyleThree />

        <Feedback />

        <Partner />

        <CtaAreaTwo />

        <Footer />
      </>
    );
  }
}

export default Aabout;
