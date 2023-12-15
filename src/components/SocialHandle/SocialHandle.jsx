import "./SocialHandle.scss";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { SiBugcrowd } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";
import { SiCodechef } from "react-icons/si";

const SocialHandle = () => {
  return (
    <div className="socialhandle">
      <a href="https://github.com/Shubh942" target="_blank">
        <FaGithub className="icon" />
      </a>
      <a href="https://leetcode.com/shubh200" target="_blank">
        <SiLeetcode className="icon" />
      </a>
      <a href="https://codeforces.com/profile/shubh_197" target="_blank">
        <SiCodeforces className="icon" />
      </a>
      <a href="https://www.codechef.com/users/cjfeucj123" target="_blank">
        <SiCodechef className="icon" />
      </a>
      <a href="https://bugcrowd.com/shubh_21197" target="_blank">
        <SiBugcrowd className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/shubh-mehta197/" target="_blank">
        <FiLinkedin className="icon" />
      </a>
    </div>
  );
};

export default SocialHandle;
