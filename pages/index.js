import Home from './connect-home'


const { Component }= require('react');

class Frontpage extends Component{
  render(){
    return(
      <>
        <Home />
      </>
    )
  }
}
export { Frontpage as default}