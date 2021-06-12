import Image from "next/image";
import Head from "next/head";
import Link from "next/link"
// import styles from './navbar.module.css'
// import Layout from "./Layout";

const { Component } = require("react");
class Nav extends Component {
  render() {
    return (
      <>
       
        <nav className="mynav p-3 navbar navbar-expand-md">
          {/* <button
            className="navbar-toggler btn btn-primary"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="container">
            <span className="navbar-brand mr-5">
              <Image
                src="/images/LOGO.png"
                height={26.48}
                width={100}
                alt="Logo"
              />
            </span>
            <div className="d-none d-md-block">
                <i className="fa fa-coffee"></i>
              <input type="text" className="form-control ml-4  p-4 search-box" placeholder="search for item" />
            </div>
            {/* Nav links */}
            <div
              className="collapse navbar-collapse ml-md-5"
              id="collapsibleNavbar"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="#">
                    <a className="nav-link active">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#">
                    <a className="nav-link">
                      LBN
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#">
                    <a className="nav-link">
                      Create a bid
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#">
                    <a className="nav-link">
                      Contact us
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
export { Nav as default };
