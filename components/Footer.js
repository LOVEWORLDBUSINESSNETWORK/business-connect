import Image from "next/image";
import Link from "next/link";
const { Component } = require("react");

class Footer extends Component {
  render() {
    return (
      <>
        <div className="my-footer">
          <div className="row container text-center mx-auto foot-1">
            <div className="col-md-3">
              <Image
                src="/images/LOGO.png"
                height={26.48}
                width={100}
                alt="Logo"
              />
              <p className="text-left">
                Connect on the loveworld next Platform and engage, pitch your
                business ideas and exhibit your products.
              </p>
            </div>
            <div className="col-md-3">
              <h5>LOVEWORLD NEXT</h5>
              <ul className="list ">
                <li>
                  <Link href="#">
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Terms of Use</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Privacy Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>How it Works</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Contact Us</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>SUPPORT</h5>
              <ul className="list">
                <li>
                  <Link href="#">
                    <a>Support Center</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>24hr Service</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Quick Chat</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>CONTACT</h5>
              <ul className="list">
                <li>
                  <Link href="#">
                    <a>Whatsapp</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>24 NYC Road, USA</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="container copyright">
              <div>&copy; copyright 2021 loveworldnext</div>
              <div> <span className="text-secondary">Created by: </span> <span>LoveWorldNext</span> </div>
          </div>
        </div>
      </>
    );
  }
}
export { Footer as default };
