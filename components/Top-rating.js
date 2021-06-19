import Image from "next/image";
const { Component } = require("react");

class Rating extends Component {
  render() {
    return (
      <>
        <div className=" mx-auto section pb-3 m-5 text-center ">
            <h1>Top Rated Business</h1>
          <div className="row m-3">
            <div className="card col-md m-1 shadow text-center">
              <div className="mx-auto mt-5">
                <Image
                  src="/../public/images/elipse2.png"
                  height={92.95}
                  width={92.95}
                  className="card-img-top"
                />
              </div>
              <div className="card-body">
                <h4 className="card-title mb-0">Bennita & Cakes</h4>
                <strong className="">4.5</strong>
                <br />
                <strong>Snacks and Chops</strong>
                <p className="card-text profile-txt my-3">
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
              </div>
            </div>
            <div className="card col-md m-1 shadow text-center">
              <div className="mx-auto mt-5">
                <Image
                  src="/../public/images/elipse1.png"
                  height={92.95}
                  width={92.95}
                  className="card-img-top"
                />
              </div>

              <div className="card-body">
                <h4 className="card-title mb-0">Bennita & Cakes</h4>
                <strong className="">4.5</strong>
                <br />
                <strong>Snacks and Chops</strong>
                <p className="card-text profile-txt my-3">
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
              </div>
            </div>
            <div className="card col-md m-1 shadow text-center">
              <div className="mx-auto mt-5">
                <Image
                  src="/../public/images/elipse3.png"
                  height={92.95}
                  width={92.95}
                  className="card-img-top"
                />
              </div>

              <div className="card-body">
                <h4 className="card-title mb-0">Bennita & Cakes</h4>
                <strong className="">4.5</strong>
                <br />
                <strong>Snacks and Chops</strong>
                <p className="card-text profile-txt my-3">
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
              </div>
            </div>
            <div className="card col-md m-1 shadow text-center">
              <div className="mx-auto mt-5">
                <Image
                  src="/../public/images/elipse1.png"
                  height={92.95}
                  width={92.95}
                  className="card-img-top"
                />
              </div>

              <div className="card-body">
                <h4 className="card-title mb-0">Bennita & Cakes</h4>
                <strong className="">4.5</strong>
                <br />
                <strong>Snacks and Chops</strong>
                <p className="card-text profile-txt my-3">
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export { Rating as default };
