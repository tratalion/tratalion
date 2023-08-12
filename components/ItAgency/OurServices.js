import React, { Component } from "react";
import Link from "next/link";

class OurServices extends Component {
  render() {
    return (
      <>
        <div className="ptb-100 pb-60">
          <div className="container">
            <div className="section-title">
              <h2>Layanan Kami</h2>
              <p>
                Kami berkomitmen untuk mendukung pertumbuhan bisnis Anda di Era
                Informasi 4.0.
              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <div className="service-card-one bg-fcfbfb">
                  <i className="pe-7s-comment bg-13c4a1"></i>
                  <h3>
                    <Link href="/service-details">
                      <a>IT Consultancy</a>
                    </Link>
                  </h3>
                  <p>Solutif IT: Mengoptimalkan Potensi Teknologi Anda</p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="service-card-one bg-fcfbfb">
                  <i className="pe-7s-display2 bg-6610f2"></i>
                  <h3>
                    <Link href="/service-details">
                      <a>Web Development</a>
                    </Link>
                  </h3>
                  <p>Membangun Web yang Memikat, Fungsi yang Hebat.</p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="service-card-one bg-fcfbfb">
                  <i className="pe-7s-light bg-ffb700"></i>
                  <h3>
                    <Link href="/service-details">
                      <a>Digital Marketing</a>
                    </Link>
                  </h3>
                  <p>Strategi Pemasaran Digital: Lebih Dari Sekadar Klik.</p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="service-card-one bg-fcfbfb">
                  <i className="pe-7s-phone bg-fc3549"></i>
                  <h3>
                    <Link href="/service-details">
                      <a>Mobile App Development</a>
                    </Link>
                  </h3>
                  <p>
                    Bawa Bisnis Anda ke Genggaman Pelanggan Melalui Aplikasi
                    Mobile.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="service-card-one bg-fcfbfb">
                  <i className="pe-7s-monitor bg-00d280"></i>
                  <h3>
                    <Link href="/service-details">
                      <a>Desktop Development</a>
                    </Link>
                  </h3>
                  <p>
                    Mengoptimalkan Bisnis Anda Melalui Aplikasi Desktop Canggih.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="service-card-one bg-fcfbfb">
                  <i className="pe-7s-users bg-ff612f"></i>
                  <h3>
                    <Link href="/service-details">
                      <a>IT Solutions</a>
                    </Link>
                  </h3>
                  <p>Merangkul Teknologi untuk Solusi Bisnis yang Canggih.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default OurServices;
