import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

class MainBanner extends Component {
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <>
        <div className="hero-banner it-banner overly hero-bg4">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="main-banner-content">
                      <h1>Solusi Digital Terintegrasi.</h1>

                      <p>
                        Kami adalah para ahli dalam pengembangan aplikasi
                        desktop, web, Android, dan iOS. Dengan pengalaman luas
                        di industri, kami telah memberikan solusi aplikasi
                        sesuai permintaan klien. Kami berkomitmen untuk
                        mendukung pertumbuhan bisnis Anda di Era Informasi 4.0
                        dan siap menjalin kemitraan kokoh untuk kesuksesan
                        bersama.
                      </p>

                      <Link href="/contact">
                        <a className="btn btn-primary">Buat Janji</a>
                      </Link>

                      <Link href="/#play-video">
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                            this.openModal();
                          }}
                          className="btn btn-secondary"
                        >
                          <i className="icofont-ui-play"></i> How it works
                        </a>
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="animate-banner-image">
                      <img
                        src="./images/animated-banner3.jpg"
                        alt="Animate image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* If you want to change the video need to update below videoID */}
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="_ysd-zHamjk"
          onClose={() => this.setState({ isOpen: false })}
        />
      </>
    );
  }
}

export default MainBanner;
