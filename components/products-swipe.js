import Image from "next/image";
const { Component } = require("react");

class ProductSlide extends Component {
  render() {
    return (
      <>
        <div className="container py-5 d-flex prod-slide" style={{ 'height': "300px", 'overflow-x':'scroll', 'background':'transparent'}}>
          <div className="mr-2" style={{'position':'relative' }}>
            <div className="" style={{'min-width':'210px' }}>
              <Image
                src="/images/product1.png"
                height={200}
                width={200}
                alt=""
                style={{'border-radius':'10px'}}
              />
            </div>
            <div style={{ 'position':'absolute', 'top':'0', 'z-index':'1'}}>
                <strong>Diamond Fashion</strong>
            </div>
          </div>
          <div className="mr-2" style={{'position':'relative' }}>
            <div className="" style={{'min-width':'210px' }}>
              <Image
                src="/images/product2.png"
                height={200}
                width={200}
                alt=""
                style={{'border-radius':'10px'}}
              />
            </div>
            <div style={{ 'position':'absolute', 'bottom':'0', 'z-index':'1'}}>
                <strong>Diamond Fashion</strong>
            </div>
          </div>
          <div className="mr-2" style={{'position':'relative' }}>
            <div className="" style={{'min-width':'210px' }}>
              <Image
                src="/images/product7.png"
                height={200}
                width={200}
                alt=""
                style={{'border-radius':'10px'}}
              />
            </div>
            <div style={{ 'position':'absolute', 'top':'0', 'z-index':'1'}}>
                <strong>Diamond Fashion</strong>
            </div>
          </div>
          <div className="mr-2" style={{'position':'relative' }}>
            <div className="" style={{'min-width':'210px' }}>
              <Image
                src="/images/product6.png"
                height={200}
                width={200}
                alt=""
                style={{'border-radius':'10px'}}
              />
            </div>
            <div style={{ 'position':'absolute', 'top':'0', 'z-index':'1'}}>
                <strong>Diamond Fashion</strong>
            </div>
          </div>
          <div className="mr-2" style={{'position':'relative' }}>
            <div className="" style={{'min-width':'210px' }}>
              <Image
                src="/images/product4.png"
                height={200}
                width={200}
                alt=""
                style={{'border-radius':'10px'}}
              />
            </div>
            <div style={{ 'position':'absolute', 'top':'0', 'z-index':'1'}}>
                <strong>Diamond Fashion</strong>
            </div>
          </div>
          <div className="mr-2" style={{'position':'relative' }}>
            <div className="" style={{'min-width':'210px' }}>
              <Image
                src="/images/product5.png"
                height={200}
                width={200}
                alt=""
                style={{'border-radius':'10px'}}
              />
            </div>
            <div style={{ 'position':'absolute', 'top':'0', 'z-index':'1'}}>
                <strong>Diamond Fashion</strong>
            </div>
          </div>
          
        </div>
      </>
    );
  }
}
export { ProductSlide as default };
