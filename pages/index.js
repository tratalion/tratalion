import React, { Component } from "react";
import CustomNavbar from "../components/Layouts/CustomNavbar";
import MainBanner from "../components/ItAgency/MainBanner";
import OurServices from "../components/ItAgency/OurServices";
import ServiceStyleTwo from "../components/ItAgency/ServiceStyleTwo";
import WhyChooseUs from "../components/ItAgency/WhyChooseUs";
import FunFactsTwo from "../components/Common/FunFactsTwo";
import Feedback from "../components/Common/Feedback";
import PricingStyleThree from "../components/Pricing/PricingStyleThree";
import TeamStyleTwo from "../components/Common/TeamStyleTwo";
import LatestNewsSliderTwo from "../components/Common/LatestNewsSliderTwo";
import Newsletter from "../components/Common/Newsletter";
import Footer from "../components/Layouts/Footer";
import Partner from "../components/Common/Partner";

class Index extends Component {
  render() {
    return (
      <>
        <CustomNavbar />

        <MainBanner />

        <OurServices />

        <ServiceStyleTwo />

        <WhyChooseUs />

        <FunFactsTwo />

        <Partner />

        <Feedback />

        <TeamStyleTwo />

        <PricingStyleThree />

        <LatestNewsSliderTwo />

        <div className="pb-100">
          <Newsletter />
        </div>

        <Footer />
      </>
    );
  }
}

export default Index;
