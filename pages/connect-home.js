import Link from "next/link";
import Rating from "../components/Top-rating";
import Bid from "../components/Bids";
import Banner from "../components/Bottom-banner";


const { Component } = require("react");

class Home extends Component {
  render() {
    return (
      <div className="">
        {/* <Nav/> */}
        <div className="row go mx-4 my-3">
          <div className="col-md-3 d-none d-md-block pr-0">
            <div className="container w-75 mt-4 pr-0">
              <div className="card shadow px-2 py-2 text-left mt-2">
                <h6>Film & Videos</h6>
              </div>
              <div className="card shadow px-2 py-2 text-left mt-2">
                <h6>Food and Agric</h6>
              </div>
              <div className="card shadow px-2 py-2 text-left mt-2">
                <h6>Fashion</h6>
              </div>
              <div className="card shadow px-2 py-2 text-left mt-2">
                <h6>IT</h6>
              </div>
              <div className="card shadow px-2 py-2 text-left mt-2">
                <h6>Education</h6>
              </div>
              <div className="card shadow px-2 py-2 text-left mt-2">
                <h6>Travels and Tourism</h6>
              </div>

              <div className="text-left mt-4 mb-2 ">
                <strong>Filter By</strong>
              </div>
            </div>

            <div className="bgdk container p-4 w-75">
              <div className="bg-light px-2 py-2 text-left mt-2 input-group">
                <input
                  type="text"
                  className="f-search w-100"
                  placeholder="Search Country"
                />
              </div>
              <div className="bg-light px-2 py-2 text-left mt-2 input-group">
                <input
                  type="text"
                  className="mb-2 w-100"
                  placeholder="Min Budget"
                />
                <input
                  type="text"
                  className="mb-2 w-100"
                  placeholder="Max Budget"
                />
              </div>
            </div>
          </div>
          <div className="my-bg col-md-9 mx-auto text-center">
            <h1>Bid for any item now</h1>
            <input type="button" className="btn bid-btn mt-5" value="bid now" />
          </div>
        </div>
        <div className="container-fluid px-4">
          <Rating />
        </div>
        <div className="container px-4 section">
          <div className="text-center">
            <h1>Business bidded for</h1>
          </div>
          <Bid />
          <Bid />
          <Bid />
          <div className="text-right px-4 mr-2 pb-4">
            <button className="btn bg text-white py-2 px-4">
              View all &rarr;
            </button>
          </div>
        </div>
        <div className="container mt-3">
          <h1>Fashion</h1>
          <div>

          </div>
          <Banner />
        </div>
      </div>
    );
  }
}
export { Home as default };
