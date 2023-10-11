import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export const footerIcons = [
  {
    link: "https://www.linkedin.com/in/martins-ngene/",
    icon: <BsLinkedin />,
    name: "Linkedin",
  },
  {
    link: "https://twitter.com/martins_ngene",
    icon: <BsTwitter />,
    name: "Twitter",
  },
  {
    link: "https://github.com/Martinsngene",
    icon: <IoLogoGithub />,
    name: "Github",
  },
  { link: "mailto:martinsngene@gmail.com", icon: <MdEmail />, name: "Email" },
];
