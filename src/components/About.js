import React from "react";
import { Col, Row, Typography } from "antd";
import "../styles/header.css";

const About = () => {
  return (
    <div className="about">
      <Row justify={"space-between"} align={"center"} gutter={24}>
        <Col span={8}>
          <Typography.Title className="about-title">
            about skate
          </Typography.Title>
        </Col>
        <Col span={16}>
          <Typography.Text className="about-text">
            This is not a sequel. This is skate. refreshed with a forever vision
            in mind. Reimagined with the skate. community - you - guiding us
            through development. We’re listening to you. Join us on this journey
            and help shape the future of skate.
          </Typography.Text>
          <Typography.Text className="about-text">
            For more on the studio team behind skate. check out Full Circle,
            including its career page featuring recent job listings. Follow
            along on Twitter, Instagram and Discord for the latest news.
          </Typography.Text>
        </Col>
      </Row>
    </div>
  );
};

export default About;
