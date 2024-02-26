import React from "react";
import { Typography } from "antd";
import "../styles/home.css";

const Introduction = () => {
  return (
    <div className={"visible"}>
      <Typography.Text className="intro">Built by developers,</Typography.Text>
      <Typography.Text className="intro">For developers,</Typography.Text>
      <Typography.Text className="intro">
        With fair terms for all.
      </Typography.Text>
      <Typography.Text className="intro">
        Let's build incredible things together.
      </Typography.Text>
    </div>
  );
};

export default Introduction;
