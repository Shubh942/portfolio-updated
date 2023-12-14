import React, { useState } from "react";
import Slider from "react-slick";
import { Icon } from "@iconify/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "../../scss/index.scss";
import Testimonial from "../Testimonial";
import Div from "../Div";
import Spacing from "../Spacing";
export default function TestimonialSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const testimonialData = [
    {
      testimonialThumb:
        "http://res.cloudinary.com/df4t1zu7e/image/upload/v1702544090/ynkshjvxyefqxeeekcfn.jpg",
      testimonialText:
        "This finding in swiggy allow me to login via bypassing otp in partner-with-us subdomain in swiggy. Response is not been sent properly by server due to which by changing the boolean the site given the access to login",
      avatarName: " ",
      avatarDesignation: "Severity: High",
      ratings: "4",
    },
    {
      testimonialThumb:
        "http://res.cloudinary.com/df4t1zu7e/image/upload/v1702544320/m11o3lmiuuzxmqduoifh.jpg",
      testimonialText:
        "Report redirection vulnerabilities found on Indeed responsibly, offering clear details. Allow time for the organization to address the issues before considering public disclosure",
      avatarName: " ",
      avatarDesignation: "Severity: Medium",
      ratings: "3.5",
    },
    {
      testimonialThumb:
        "http://res.cloudinary.com/df4t1zu7e/image/upload/v1702544158/tojspdyotzmseoccfwi1.jpg",
      testimonialText:
        "Discovered a critical business logic flaw in Boatzon, enabling users to manipulate prices for a 100% discount. Promptly reported the vulnerability to the organization, providing detailed information for a responsible and swift resolution.",
      avatarName: " ",
      avatarDesignation: "Severity: Critical",
      ratings: "5",
    },
    {
      testimonialThumb:
        "http://res.cloudinary.com/df4t1zu7e/image/upload/v1702544236/xb1z9euivwpzsjlb0z8a.jpg",
      testimonialText:
        "Identified four critical access control vulnerabilities in Triple-A, granting users with different permissions the ability to exploit admin functionalities. Reported these serious security flaws to Triple-A, supplying detailed information to facilitate prompt and responsible resolution.",
      avatarName: " ",
      avatarDesignation: "Severity: Medium",
      ratings: "3.5",
    },
  ];
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  return (
    <>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax">
        {console.log("-----")}
        <Spacing lg="130" md="80" />
        <Div className="cs-shape_3 cs-to_up">
          <img src="public/images/shape_1.svg" alt="Shape" />
        </Div>
        <Div className="container">
          <Div className="cs-testimonial_slider">
            <Div className="cs-testimonial_slider_left">
              <Slider
                asNavFor={nav1}
                ref={(slider2) => setNav2(slider2)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                centerMode={true}
                centerPadding="0px"
                arrows={false}
              >
                {testimonialData.map((item, index) => (
                  <Div className="slider-nav_item" key={index}>
                    <Div className="cs-rotate_img">
                      <Div className="cs-rotate_img_in">
                        <img src={item.testimonialThumb} alt="Thumb" />
                      </Div>
                    </Div>
                  </Div>
                ))}
              </Slider>
            </Div>
            <Div className="cs-testimonial_slider_right">
              <Slider
                asNavFor={nav2}
                ref={(slider1) => setNav1(slider1)}
                prevArrow={<SlickArrowLeft />}
                nextArrow={<SlickArrowRight />}
                className="cs-arrow_style1"
              >
                {testimonialData.map((item, index) => (
                  <Div key={index}>
                    <Testimonial
                      testimonialText={item.testimonialText}
                      avatarName={item.avatarName}
                      avatarDesignation={item.avatarDesignation}
                      ratings={item.ratings}
                    />
                  </Div>
                ))}
              </Slider>
            </Div>
          </Div>
        </Div>
        <Spacing lg="130" md="80" />
      </Div>
    </>
  );
}
