import React, { Component } from "react";
import PageBanner from "../components/Common/PageBanner";
import BlogGridThree from "../components/Blog/BlogGridThree";
import Footer from "../components/Layouts/Footer";
import CustomNavbar from "../components/Layouts/CustomNavbar";

class Blog extends Component {
  render() {
    return (
      <>
        <CustomNavbar />
        <PageBanner pageTitle="Blog Grid" BGImage="bg-three" />

        <BlogGridThree />

        <Footer />
      </>
    );
  }
}

export default Blog;
