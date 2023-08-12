import React, { Component } from "react";
import Link from "next/link";

class ServiceStyleTwo extends Component {
  render() {
    return (
      <>
        <div className="service-style-two ptb-100 bg-fcfbfb">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="service-info pr-50">
                  <div className="info-head">
                    <h2 className="title">Apps Development</h2>
                    <p>
                      Kami adalah solusi untuk anda dalam pengembangan aplikasi
                      Web, Mobile dan Dekstop yang inovatif dan estetis.
                    </p>
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                      <div className="feature-list">
                        <i className="icofont-check-circled"></i>
                        Responsif
                      </div>
                      <div className="feature-list">
                        <i className="icofont-check-circled"></i>
                        Teknologi Terupdate
                      </div>
                      <div className="feature-list">
                        <i className="icofont-check-circled"></i>
                        Developer Berpengalaman
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="feature-list">
                        <i className="icofont-check-circled"></i>
                        Desain Memukau
                      </div>
                      <div className="feature-list">
                        <i className="icofont-check-circled"></i>
                        Fitur Canggih
                      </div>
                      <div className="feature-list">
                        <i className="icofont-check-circled"></i>
                        Berkualitas
                      </div>
                    </div>
                  </div>

                  <div className="service-read-more">
                    <Link href="/service-details">
                      <a className="btn btn-primary">
                        <i className="icofont-tasks"></i> Read more
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="service-right-img">
                  <img
                    src="./images/services/it-service1.png"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="service-style-two ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="service-left-img">
                  <img
                    src="./images/services/it-service2.png"
                    alt="Service Image"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="service-info pl-50">
                  <div className="info-head">
                    <h2 className="title">Digital Marketing</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris.
                    </p>
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                      <div className="feature-list">
                        <i className="icofont-check-circled"></i>
                        SEO Marketing
                      </div>
                      <div className="feature-list">
                        <i className="icofont-check-circled"></i>
                        Facebook Marketing
                      </div>
                      <div className="feature-list">
                        <i className="icofont-check-circled"></i>
                        Social Marketing
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="feature-list">
                        <i className="icofont-check-circled"></i>
                        Email Marketing
                      </div>
                      <div className="feature-list">
                        <i className="icofont-check-circled"></i>
                        Data Scraping
                      </div>
                      <div className="feature-list">
                        <i className="icofont-check-circled"></i>
                        Youtube Marketing
                      </div>
                    </div>
                  </div>

                  <div className="service-read-more">
                    <Link href="/service-details">
                      <a className="btn btn-primary">
                        <i className="icofont-tasks"></i> Read more
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="service-style-two ptb-100 bg-fcfbfb">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="service-info pr-50">
                  <div className="info-head">
                    <h2 className="title">Cloud Hosting Services</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris.
                    </p>
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                      <div className="feature-list">
                        <i className="icofont-check-circled"></i>
                        Cloud Databases
                      </div>
                      <div className="feature-list">
                        <i className="icofont-check-circled"></i>
                        Email Servers
                      </div>
                      <div className="feature-list">
                        <i className="icofont-check-circled"></i>
                        File Storage
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="feature-list">
                        <i className="icofont-check-circled"></i>
                        Hybrid Cloud
                      </div>
                      <div className="feature-list">
                        <i className="icofont-check-circled"></i>
                        Website Hosting
                      </div>
                      <div className="feature-list">
                        <i className="icofont-check-circled"></i>
                        Backup Systems
                      </div>
                    </div>
                  </div>

                  <div className="service-read-more">
                    <Link href="/service-details">
                      <a className="btn btn-primary">
                        <i className="icofont-tasks"></i> Read more
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="service-right-img">
                  <img
                    src="./images/services/it-service3.png"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ServiceStyleTwo;
