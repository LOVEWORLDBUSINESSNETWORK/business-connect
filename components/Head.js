import Head from 'next/head'
const { Component } = require("react");
class Headers extends Component {
    render() { 
        return ( 
            <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
            ></link>
            {/* <script
              src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js"
              integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG"
              crossorigin="anonymous"
            ></script> */}
            {/* <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script> */}
          </Head>
         );
    }
}
 
export { Headers as default}