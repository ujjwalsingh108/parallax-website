import React from "react";
import { Menu, Layout, Image, Typography, Space, Button, Row, Col } from "antd";
import {
  GlobalOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "../styles/header.css";

const items = [
  {
    key: "about",
    label: "About",
    path: "/about",
  },
  {
    key: "media",
    label: "Media",
    path: "/media",
  },
  {
    key: "news",
    label: "News",
    path: "/news",
  },
  {
    key: "purchase",
    label: "Purchase",
    path: "/purchase",
  },
  {
    key: "social media",
    label: "Social Media",
    path: "/social-media",
  },
  {
    key: "contact",
    label: "Contact Us",
    path: "/contact",
  },
];

function Header() {
  const [search, setSearch] = React.useState(false);
  const handleSearch = () => {
    setSearch(!search);
  };

  return (
    <div>
      <Layout.Header id="header">
        <Row gutter={[24, 0]} align={"middle"}>
          <Col>
            <Space size={40}>
              <Image src={"/images/logo.png"} width={50} preview={false} />
              <Typography.Text className="title">MBS STUDIOS</Typography.Text>
            </Space>
          </Col>
          <Col>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              style={{
                flex: 1,
                minWidth: 0,
              }}
            >
              {items.map((item) => (
                <Menu.Item key={item.key}>
                  <Link to={item.path}>{item.label}</Link>
                </Menu.Item>
              ))}
            </Menu>
          </Col>
          <Col push={10}>
            <Space size={20} className="space">
              <SearchOutlined className="icon" onClick={handleSearch} />
              <GlobalOutlined className="icon" />
              <UserOutlined className="icon" />
              <Button type="primary" size="middle">
                Download
              </Button>
            </Space>
          </Col>
        </Row>
      </Layout.Header>
    </div>
  );
}

export default Header;
