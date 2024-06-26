import React, { useState, useEffect } from "react";
import "./About.scss";
import { Navbar, Footer } from "../../components";
import { motion } from "framer-motion";
// import shubhimg from "../../assets/shubhimg.png";
// import TestimonialSlider from "../../Slider/TestimonialSlider";

import data from "../../data";
import Clang from "../../assets/Clang.png";
import reactIcon from "../../assets/react.png";
import cpp from "../../assets/cpp.png";
import Tilt from "react-parallax-tilt";
import TestimonialSlider from "../../components/Slider/TestimonialSlider";
import cf from "./../../assets/codeforces.jpg";
import lc from "./../../assets/leetcode.jpg";
import gh from "./../../assets/github.jpg";
import Spacing from "../../components/Spacing";

const About = () => {
  const [rotate, setRotate] = useState({
    c: false,
    cpp: false,
    react: false,
  });
  const [codeforces, setCodeforceUser] = useState({});
  const [leetcode, setLeetcode] = useState({});
  const [github, setGitHub] = useState({});

  useEffect(() => {
    fetch("https://codeforces.com/api/user.info?handles=shubh_197")
      .then((response) => response.json())
      .then((json) => {
        let data = json.result[0];
        setCodeforceUser(data);

        // console.log(data.handle);
      })
      .catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/shubh200")
      .then((response) => response.json())
      .then((json) => {
        let data = json;
        setLeetcode(data);

        // console.log(data);
      })
      .catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    fetch("https://api.github.com/users/Shubh942")
      .then((response) => response.json())
      .then((json) => {
        let data = json;
        setGitHub(data);
        // console.log(data);
      })
      .catch((e) => console.error(e));
  }, []);

  const toggleRotate = (key) => {
    setRotate((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="about"
    >
      <Navbar />

      <div className="contents">
        <h1 className="gradient__text">About</h1>
        <div className="main-info">
          <p>
            Hi, I'm {data.name} from {data.instituteName}. A{" "}
            <span style={{ fontStyle: "italic" }}> {data.majorSkill1} </span> ,
            <span style={{ fontStyle: "italic" }}> {data.majorSkill2} </span>{" "}
            and {data.majorSkill3} {data.aboutYourself}
          </p>
          <Tilt>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="opj"
            >
              <img
                src={data.imageAbout}
                alt={data.name}
                height={400}
                width={350}
              />
            </motion.div>
          </Tilt>
        </div>

        <div className="tech">
          <p>
            Here are a few technologies and Design tools I've been working with
            recently:
          </p>

          <div className="tech-items">
            <motion.div
              className="item"
              animate={{ rotate: rotate.c ? 360 : 0 }}
              onClick={() => {
                toggleRotate("c");
              }}
            >
              <img src={Clang} alt="" />
            </motion.div>

            <motion.div
              className="item"
              animate={{ rotate: rotate.cpp ? 360 : 0 }}
              onClick={() => {
                toggleRotate("cpp");
              }}
            >
              <img src={cpp} alt="" />
            </motion.div>

            <motion.div
              className="item"
              animate={{ rotate: rotate.react ? 360 : 0 }}
              onClick={() => {
                toggleRotate("react");
              }}
            >
              <img src={reactIcon} alt="" />
            </motion.div>
          </div>
        </div>

        {/* Start Testimonial Section */}
        {/* <br /> */}
        {/* <h1 className="gradient__text">Findings</h1> */}
        {/* End Team Section */}

        {/* Start Testimonial Section */}
        {/* <TestimonialSlider className="test" /> */}
        {/* End Testimonial Section */}

        {/* Start Blog Section */}
        {/* <Spacing lg="150" md="80" /> */}
        {/* End Testimonial Section */}
      </div>
      <Footer />
    </motion.div>
  );
};

export default About;
