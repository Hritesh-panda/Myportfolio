import React from "react";
import "./parent.css";
import Child from "../child/Child";
import items from "../Skillbaritem";
const Parent = () => {
  return (
    <div>
      <div className="sp-container">
        {items.map((data) => {
          return (
            <>
              <Child
                key={data.id}
                icon={data.icon}
                skill={data.skill}
                percentage={data.percentage}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Parent;
