import React, { Component } from "react";
import PageBanner from "../components/Common/PageBanner";
import ServicesStyleOne from "../components/Services/ServicesStyleOne";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";
import CustomNavbar from "../components/Layouts/CustomNavbar";

class Services extends Component {
  render() {
    return (
      <>
        <CustomNavbar />

        <PageBanner pageTitle="Our Services" BGImage="bg-one" />

        <ServicesStyleOne />

        <CtaAreaTwo />

        <Footer />
      </>
    );
  }
}

export default Services;
