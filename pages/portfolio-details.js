import React, { Component } from "react";
import PageBanner from "../components/Common/PageBanner";
import PortfolioDetailsContent from "../components/Portfolio/PortfolioDetailsContent";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";
import CustomNavbar from "../components/Layouts/CustomNavbar";

class PortfolioDetails extends Component {
  render() {
    return (
      <>
        <CustomNavbar />

        <PageBanner pageTitle="UX for Mobile Apps" BGImage="bg-two" />

        <PortfolioDetailsContent />

        <CtaAreaTwo />

        <Footer />
      </>
    );
  }
}

export default PortfolioDetails;
