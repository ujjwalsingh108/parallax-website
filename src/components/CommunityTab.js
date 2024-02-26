import React from "react";
import { Button, Col, Image, Row, Typography } from "antd";
import { DiscordOutlined } from "@ant-design/icons";

const CommunityTab = () => {
  return (
    <div>
      <Row align={"middle"}>
        <Col span={8}>
          <Typography.Text className="community-title">
            Join The Community
          </Typography.Text>
          <Typography.Text className="community-text">
            The official skate. Discord server
          </Typography.Text>
          <Button type="primary" className="community-btn">
            Join <DiscordOutlined />
          </Button>
        </Col>
        <Col span={8} offset={5}>
          <Image
            preview={false}
            src={"/images/play.jpg"}
            alt="skate"
            className="community-skate"
          />
        </Col>
      </Row>
    </div>
  );
};

export default CommunityTab;
