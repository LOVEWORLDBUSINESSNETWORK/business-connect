import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
// import styles from './navbar.module.css'
// import Layout from "./Layout";

// const { Component } = require("react");
const Nav = ()=>{
  const router = useRouter();
  // render() {
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
          <div className="container-fluid ml-5">
            <span className="navbar-brand mx-4">
              <Image
                src="/images/LOGO.png"
                height={26.48}
                width={100}
                alt="Logo"
              />
            </span>
            <div className="d-none d-md-block ml-md-5">
                {/* <i className="fa fa-coffee"></i> */}
              <input type="text" className="form-control ml-5  p-4 search-box" placeholder="search for item" />
            </div>
            {/* Nav links */}
            <div
              className="collapse navbar-collapse d-flex justify-content-end"
              id="collapsibleNavbar"
            >
              <ul className="navbar-nav d-none d-md-flex">
                <li className="nav-item">
                  <Link href="/">
                    <a className={"nav-link "+(router.pathname=='/' ? 'active' : '')}>
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#">
                  <a className={"nav-link "+(router.pathname=='/lbn' ? 'active' : '')}>
                      LBN
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/create-bid" activeClassName="active">
                    <a className={"nav-link "+(router.pathname=='/create-bid' ? 'active' : '')}>
                      Create a bid
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#">
                  <a className={"nav-link "+(router.pathname=='/contact-us' ? 'active' : '')}>
                      Contact us
                    </a>
                  </Link>
                </li>
                <li className="nav-item ml-3 mt-2">
                  <Link href="#">
                  <a>
                    <Image
                    src="/images/love-icon.png"
                    height={25}
                    width={25}
                    alt="Logo"
                  />
                  {/* <span style={{'background':'white', 'height':'25%', 'border-radius':'50%', 'position':'relative',  'color':'red', 'font-weight':'bold' }}>0</span> */}
                    </a>
                  </Link>
                </li>
                <li className="nav-item ml-3 mt-2">
                <Link href="#">
                  <a>
                    <Image
                    src="/images/cart.png"
                    height={25}
                    width={25}
                    alt="Logo"
                  />
                    </a>
                  </Link>
                </li>
                <li className="nav-item ml-3 mt-2 badge badge-light" style={{'border-radius':'50%', 'height': '25%'}}>
                <Link href="#">
                  <a>
                    <Image
                    src="/images/avatar.png"
                    height={25}
                    width={25}
                    alt="Logo"
                  />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  // }
}
export { Nav as default };
