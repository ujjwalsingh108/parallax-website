import {
  DiscordOutlined,
  FacebookOutlined,
  InstagramOutlined,
  RedditOutlined,
  TwitchOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Col, Image, Menu, Row, Typography } from "antd";
import React from "react";

const CommunityIcon = () => {
  return (
    <div className="community-icon">
      <Row align={"middle"}>
        <Col span={8} style={{ padding: "16px" }}>
          <Typography.Text className="community-icon-title">
            skate
          </Typography.Text>
        </Col>
        <Col span={6} offset={10}>
          <Typography.Text className="community-icon-title">
            Join the Conversation
          </Typography.Text>
        </Col>
      </Row>
      <Row align={"middle"}>
        <Col span={8}>
          <Menu
            mode="horizontal"
            style={{ background: "transparent", overflow: "clip" }}
          >
            <Menu.Item>
              <Typography.Text className="menu">Home</Typography.Text>
            </Menu.Item>
            <Menu.Item>
              <Typography.Text className="menu">Insider</Typography.Text>
            </Menu.Item>
            <Menu.Item>
              <Typography.Text className="menu">FAQ</Typography.Text>
            </Menu.Item>
            <Menu.Item>
              <Typography.Text className="menu">Reel</Typography.Text>
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={8} offset={8}>
          <Menu
            mode="horizontal"
            style={{ background: "transparent", overflow: "clip" }}
          >
            <Menu.Item>
              <FacebookOutlined className="menu-icon" />
            </Menu.Item>
            <Menu.Item>
              <TwitterOutlined className="menu-icon" />
            </Menu.Item>
            <Menu.Item>
              <InstagramOutlined className="menu-icon" />
            </Menu.Item>
            <Menu.Item>
              <TwitchOutlined className="menu-icon" />
            </Menu.Item>
            <Menu.Item>
              <DiscordOutlined className="menu-icon" />
            </Menu.Item>
            <Menu.Item>
              <RedditOutlined className="menu-icon" />
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
      <hr className="divider" />
      <Row align={"middle"}>
        <Col>
          <Image src={"/images/ea.png"} preview={false} />
        </Col>
        <Col>
          <Image
            src={"/images/circle.png"}
            width={120}
            height={60}
            preview={false}
          />
        </Col>
        <Col>
          <Image src={"/images/skate-logo.svg"} preview={false} />
        </Col>
        <Col offset={12}>
          <Image src={"/images/rating.svg"} preview={false} />
        </Col>
      </Row>
    </div>
  );
};

export default CommunityIcon;
