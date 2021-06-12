import Image from 'next/image'
const { Component } = require("react");
class Banner extends Component{
    render(){
        return(
            <>
                <div className="banner">
                    <h1 className="mx-3">Interested in being an <br/> investor?</h1>
                    <input type="button" className="btn my-btn-sm" value="Click here" />
                </div>
            </>
        )
    }
}
export { Banner as default  }