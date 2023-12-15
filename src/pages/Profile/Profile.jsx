// import React from "react";
import "./Profile.scss";
import React, { useState, useEffect } from "react";
// import shubh from "../../assets/shubh.png";
import { Navbar, Footer } from "../../components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import data from "../../data";
import MovingText from "../../components/MovingText/MovingText";
import TestimonialSlider from "../../components/Slider/TestimonialSlider";
import cf from "./../../assets/codeforces.jpg";
import lc from "./../../assets/leetcode.jpg";
import gh from "./../../assets/github.jpg";
import Typewriter from "typewriter-effect";

const Profile = () => {
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
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="homepage"
    >
      <Navbar />

      <div className="about">
        <div className="contents">
          <div className="codingprofile">
            <h2 className="gradient__text">Coding Profiles</h2>

            <div className="codeforces">
              <img src={cf} alt="codeforces" />
              <ul>
                <li>
                  <a
                    href="https://codeforces.com/profile/utkarsh_raj_13"
                    target="_blank"
                    className="handle"
                  >
                    {codeforces.handle}
                  </a>
                </li>
                <li>
                  <p>
                    rating : {codeforces.rating} ({codeforces.rank})
                  </p>
                </li>
                <li>
                  <p>
                    max rating : {codeforces.maxRating} ({codeforces.maxRank})
                  </p>
                </li>
              </ul>
            </div>
            <div className="leetcode">
              <img src={lc} alt="leetcode" />
              <ul>
                <li>
                  <a
                    href="https://leetcode.com/utkarsh_raj_13/"
                    target="_blank"
                    className="handle"
                  >
                    {codeforces.handle}
                  </a>
                </li>

                <li className="leetcode-data">{leetcode.totalSolved} Solved</li>

                {/* "totalSolved easySolved mediumSolved": 205, hardSolved*/}
                <li>
                  <p>easy : {leetcode.easySolved}</p>
                </li>
                <li>
                  <p>medium : {leetcode.mediumSolved}</p>
                </li>
                <li>
                  <p>hard : {leetcode.hardSolved}</p>
                </li>
              </ul>
            </div>
            <div className="codeforces">
              <img src={gh} alt="codeforces" />
              <ul>
                <li>
                  <a
                    href="https://github.com/rajutkarsh07"
                    target="_blank"
                    className="handle"
                  >
                    {github.login}
                  </a>
                </li>
                <li>
                  <p>{github.public_repos} repository</p>
                </li>
                <li>
                  <p>{github.followers} followers</p>
                </li>
                <li>
                  <p>{github.following} following</p>
                </li>
              </ul>
            </div>
          </div>
          <h1 className="gradient__text">My Findings</h1>
          <TestimonialSlider className="test" />
        </div>
      </div>

      <Footer />
    </motion.div>
  );
};

export default Profile;
