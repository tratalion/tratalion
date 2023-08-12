import React, { Component } from "react";
import Link from "../../utils/ActiveLink";

class CustomNavbar extends Component {
  // Navbar
  _isMounted = false;
  state = {
    display: false,
    collapsed: true,
  };
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    return (
      <>
        <div id="navbar" className="navbar-area navbar-style-2">
          <nav className="navbar navbar-expand-md navbar-light">
            <div className="container-fluid">
              <Link href="/">
                <a className="navbar-brand">
                  <img
                    src="/images/logo.png"
                    alt="logo tratalion"
                    className="logo"
                    style={{ width: 160 }}
                  />
                </a>
              </Link>

              {/* Toggle navigation */}
              <button
                onClick={this.toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/">
                      <a className="nav-link">Beranda</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/services">
                      <a className="nav-link">Layanan</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/about" activeClassName="active">
                      <a className="nav-link">Tentang Kami</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="#">
                      <a
                        className="nav-link"
                        onClick={(e) => e.preventDefault()}
                      >
                        Portfolio <i className="icofont-thin-down"></i>
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/portfolio" activeClassName="active">
                          <a className="nav-link">Portfolio</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/portfolio-details"
                          activeClassName="active"
                        >
                          <a className="nav-link">Detail Portfolio</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/blog">
                      <a className="nav-link">Blog</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                      <a className="nav-link">Kontak</a>
                    </Link>
                  </li>
                </ul>

                <div className="others-options">
                  <Link href="/pricing">
                    <a className="btn btn-primary">Let's Begin</a>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
}

export default CustomNavbar;
