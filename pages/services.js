import React, { Component } from "react";
import PageBanner from "../components/Common/PageBanner";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";
import CustomNavbar from "../components/Layouts/CustomNavbar";
import OurServices from "../components/ItAgency/OurServices";

class Services extends Component {
  render() {
    return (
      <>
        <CustomNavbar />

        <PageBanner pageTitle="" BGImage="bg-one" />

        <OurServices />

        <CtaAreaTwo />

        <Footer />
      </>
    );
  }
}

export default Services;
