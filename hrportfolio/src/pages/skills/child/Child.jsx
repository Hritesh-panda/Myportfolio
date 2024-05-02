import React, { useEffect, useState } from "react";
import "./child.css";

const Child = ({ icon, skill, percentage }) => {
  const [style, setStyle] = useState();
  useEffect(() => {
    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${percentage}`,
      };
      setStyle(newStyle);
    }, 2000);
  }, [percentage]);
  return (
    <div className="child">
      <div className="sp-content">
        <div className="sp-left">{icon}</div>
        <div className="sp-right">
          <h1>{skill}</h1>
          <div className="sp-skill-bar">
            <div className="sp-progress" style={style}>
              <span>{percentage}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Child;
