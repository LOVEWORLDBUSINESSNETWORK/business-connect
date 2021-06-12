const { Component } = require("react");
class Bid extends Component {
  render() {
    return (
      <>
        <div className="px-3">
          
          <div className="rw d-flex p-3 mx-auto">
            <div className="col-md-6 col-lg-12 card shadow p-3 w-75">
              <div className="row space-btw">
                <div className="col-md-8 ">
                  <h3>Graphic Designer for Brand Identity</h3>
                  <div className="d-flex">
                    <span className="mr-2">
                      Budget: <strong>$100</strong>
                    </span>
                    <span className="mr-2">
                      Timeline: <strong>2 weeks</strong>
                    </span>
                    <span className="mr-2">
                      Posted <span>5/6/21</span>
                    </span>
                  </div>
                  <strong>Brief</strong>
                  <p className>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas felis, lacus condimentum varius. Enim scelerisque
                    pharetra fusce viverra. Sit quisque vulputate velit et at
                    viverra laoreet. Enim at urna pretium enim non morbi.
                  </p>
                </div>

                <div className=" col-md-2">
                  <span className="mr-2">icon1</span>
                  <span className="mr-2">icon2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export { Bid as default };
