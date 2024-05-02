import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";

const items = [
  {
    id: "1",
    icon: <FaHtml5 />,
    skill: "HTML5",
    percentage: "90%",
  },
  {
    id: "2",
    icon: <FaCss3 />,
    skill: "CSS3",
    percentage: "70%",
  },
  {
    id: "3",
    icon: <FaBootstrap />,
    skill: "Bootstrap",
    percentage: "80%",
  },
  {
    id: "4",
    icon: <FaJsSquare />,
    skill: "JavaScript",
    percentage: "40%",
  },
  {
    id: "5",
    icon: <FaReact />,
    skill: "React",
    percentage: "60%",
  },
  {
    id: "6",
    icon: <FaNodeJs />,
    skill: "NodeJs",
    percentage: "65%",
  },
  {
    id: "7",
    icon: <FaDatabase />,
    skill: "MongooDB",
    percentage: "50%",
  },
];

export default items;
