import React from 'react'
import { Form, NavLink } from 'react-router-dom'
import "../css/contact.css"

export const contactData = async({request}) =>{
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(data);
    return null;
  } catch (error) {
    console.log(error);
  }
}

const Contact = () => {

  return (
    <div className="landing_page">
      <div className="responsive-container-block big-container">
        <img className="bg-img" id="iq5bf" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/clothes-bg.png" />
          <div className="responsive-container-block container">
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 left-one">
              <div className="content-box">
                <p className="text-blk section-head">
                  Lorem ipsum amet dolor
                </p>
                <p className="text-blk section-subhead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis volupta
                </p>
                <div className="icons-container">
                  <NavLink to={"#"} className="share-icon">
                    <img className="img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png" />
                  </NavLink>
                  <NavLink to={"#"} className="share-icon">
                    <img className="img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png" />
                  </NavLink>
                  <NavLink to={"#"} className="share-icon">
                    <img className="img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png" />
                  </NavLink>
                  <NavLink to={"#"} className="share-icon">
                    <img className="img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png" />
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6 right-one" id="i1zj">
              <Form method='POST' action='/movie-website/contact' className="form-box mb-5">
                <div className="container-block form-wrapper">
                  <p className="text-blk contactus-head">
                    <NavLink to={"#"} className="link">
                    </NavLink>
                    Get a quote
                  </p>
                  <p className="text-blk contactus-subhead">
                    We will get back to you in 24 hours
                  </p>
                  <div className="responsive-container-block">
                    <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i10mt-7">
                      <input required className="input" id="ijowk-7" name="FirstName" placeholder="First Name" />
                    </div>
                    <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i1ro7">
                      <input required className="input" id="indfi-5" name="Last Name" placeholder="Last Name" />
                    </div>
                    <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-6 wk-ipadp-6 emial" id="ityct">
                      <input required className="input" id="ipmgh-7" name="Email" placeholder="Email" />
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <input required className="input" id="imgis-6" name="PhoneNumber" placeholder="Phone Number" />
                    </div>
                    <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-7">
                      <textarea required aria-placeholder="Type message here" name='message' className="textinput" id="i5vyy-7" placeholder="Type message here"></textarea>
                    </div>
                  </div>
                  <button className="submit-btn">
                    Get quote
                  </button>
                </div>
              </Form>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Contact
