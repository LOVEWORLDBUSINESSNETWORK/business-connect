const { Component } = require("react");
class CreateBid extends Component {
  // super(){}
  // constructor(){

  // };
  componentDidMount() {
    let createBid = true;
  }
  render() {
    return (
      <>
        <div className="">
          <div className="card bg-grey p-5 m-5 w-75 mx-auto crt-bid-card">
            <div className="container mx-auto">
              <h2>Hi Henry</h2>
              <div className="mb-4">
                <label className="">Select your preferred category </label>
                <select
                  className="form-control"
                  defaultValue="select a category"
                >
                  <option>select a category</option>
                </select>
              </div>
              <div className="bid-date-sel">
                <div className="left-side">
                  <h6 className="">Timeline</h6>
                  <div className="mt-3">
                    <span className="left-rad bg-light">Choose date</span>
                    <span className=" no-rad bg-light">DD</span>
                    <span className="no-rad bg-light">MM</span>
                    <span className="right-rad bg-light">YY</span>
                  </div>
                </div>
                <div className="right-side mr-5">
                  <span className="">Time</span>
                  <div className="mt-3">
                    <span className="left-rad bg-light pointer">AM</span>
                    <span className=" no-rad bg-light pointer">PM</span>
                    <span className="right-rad bg-light time-sel">
                      <input type="time" className="border-0" />
                    </span>
                  </div>
                </div>
              </div>

                <div className="mt-3">
                    <h6 className="">Whats's your budget</h6>
                    <div className="bid-curr mt-3">
                        <select className="form-control w-25 full-rad">
                            <option  value="">select currency</option>
                        </select>
                        <input type="text" className="form-control w-25 full-rad budget" placeholder="Min Budget"/>
                        <input type="text" className="form-control w-25 full-rad budget" placeholder="Max Budget"/>
                    </div>
                    <div className="">
                        <textarea className="form-control mt-4 my-text-box"></textarea>
                    </div>
                </div>
                <div className="mt-4">
                    <h6>Upload document if necessary</h6>
                    <div className="file-uploads my-4">
                    <div className="">
                        <label className='file-label' for ="files">Upload Document &uarr;</label>
                        <input id="files" type="file" className="form-control w-25 custom-file" />
                    </div>
                    <div className="drag-n-drop">
                        <span >Drag and Drop </span><strong>&#43;</strong>
                    </div>
                </div>
                <div className="text-center">
                    <input type="submit" className="btn btn-lbn" value="Submit"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export { CreateBid as default };
