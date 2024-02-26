import { Button, Card, Col, Flex, Rate, Row, Typography } from "antd";
import React from "react";

const cardStyle = {
  width: 800,
};

const imgStyle = {
  display: "block",
  width: 350,
};

const PurchaseComponent = () => {
  return (
    <div className="purchase-component">
      <Typography.Title className="purchase-component-title">
        BMX Comes to Riders Republic Today in Season 4: Freestylin’
      </Typography.Title>
      <Typography.Text className="purchase-text">
        Riders Republic Season 4: Freestylin’ brings BMX to the Republic on
        September 14 for Xbox Series X|S and Xbox One. Available for purchase as
        part of the Year 1 Pass, or as a standalone starting September 21, the
        BMX Sport add-on includes a new BMX career mode featuring plenty of
        grinds and half-pipe riding, and three new disciplines: Street, Park,
        and Dirt. Riders can also take a trip to Area 52, the new zone dedicated
        to BMX. It’s a former classified industrial zone filled with satellite
        dishes and abandoned warehouses, and it houses many alien secrets that
        will be the foundation for several BMX-themed events throughout the
        season.
      </Typography.Text>
      <Typography.Text className="purchase-text">
        BMX isn’t the only thing coming to Riders Republic; Season 4 also marks
        the start of a partnership with Vans, as well as new sponsors including
        Cult, Odyssey, We The People, Flybikes, and SubRosa, which bring new
        customization and gear options. Later in the season, be sure to
        participate in the Vans Waffle Cup and the Red Bull Uncontained events
        to show off your handlebar skills. More events are planned throughout
        the season and be on the lookout for five new funkies – unique vehicles
        that take the extreme sports action to a whole new level.
      </Typography.Text>
      <Typography.Text className="purchase-text">
        Check out Riders Republic and its Freestylin’ new season starting
        September 14 on Xbox Series X|S and Xbox One.
      </Typography.Text>

      <div className="card-div">
        <Card
          hoverable
          style={cardStyle}
          styles={{ body: { padding: 0, overflow: "hidden" } }}
        >
          <Flex justify="space-between">
            <img alt="avatar" src={"/images/riders.jpg"} style={imgStyle} />

            <Flex vertical justify="space-between">
              <Typography.Title className="card-title">
                Riders Republic™
              </Typography.Title>

              <Flex style={{ overflow: "auto" }}>
                <Row justify={"space-between"}>
                  <Col span={8} push={1}>
                    <Typography.Text className="card-text-1">
                      UBISOFT
                    </Typography.Text>
                    <Rate disabled defaultValue={4} className="rate" />
                    <Typography.Text className="rate-num">623</Typography.Text>
                    <Typography.Text className="dolor">$39.99</Typography.Text>
                    <Button className="btn">Get it now</Button>
                  </Col>
                  <Col span={12}>
                    <Typography.Text className="card-about-text">
                      Jump into the Riders Republic™ massive multiplayer
                      playground! Grab your bike, skis, snowboard, or wingsuit
                      and explore an open world sports paradise where the rules
                      are yours to make—or break. – Battle against over 50
                      players simultaneously in a massive multiplayer
                      playground—over 20 players on Xbox One. – Compete in an
                      all-out mass start race—collide, grind, and fight your way
                      to the finish! – Customize your character to show off your
                      style to your friends or show up the competition. – Bike,
                      ski, snowboard, or wingsuit through a seamless open world
                      in Career mode or multiplayer events. – Go wild in iconic
                      US national parks like Yosemite and Zion.
                    </Typography.Text>
                  </Col>
                </Row>
              </Flex>
            </Flex>
          </Flex>
        </Card>
      </div>

      <div className="card-div">
        <Card
          hoverable
          style={cardStyle}
          styles={{ body: { padding: 0, overflow: "hidden" } }}
        >
          <Flex justify="space-between">
            <img alt="avatar" src={"/images/riders.jpg"} style={imgStyle} />

            <Flex vertical justify="space-between">
              <Typography.Title className="card-title">
                Riders Republic™ Year 1 Pass
              </Typography.Title>

              <Flex style={{ overflow: "auto" }}>
                <Row justify={"space-between"}>
                  <Col span={8} push={1}>
                    <Typography.Text className="card-text-1">
                      UBISOFT
                    </Typography.Text>
                    <Rate disabled defaultValue={4} className="rate" />
                    <Typography.Text className="rate-num">623</Typography.Text>
                    <Typography.Text className="dolor">$39.99</Typography.Text>
                    <Button className="btn">Get it now</Button>
                  </Col>
                  <Col span={12}>
                    <Typography.Text className="card-about-text">
                      Jump into the Riders Republic™ massive multiplayer
                      playground! Grab your bike, skis, snowboard, or wingsuit
                      and explore an open world sports paradise where the rules
                      are yours to make—or break. – Battle against over 50
                      players simultaneously in a massive multiplayer
                      playground—over 20 players on Xbox One. – Compete in an
                      all-out mass start race—collide, grind, and fight your way
                      to the finish! – Customize your character to show off your
                      style to your friends or show up the competition. – Bike,
                      ski, snowboard, or wingsuit through a seamless open world
                      in Career mode or multiplayer events. – Go wild in iconic
                      US national parks like Yosemite and Zion.
                    </Typography.Text>
                  </Col>
                </Row>
              </Flex>
            </Flex>
          </Flex>
        </Card>
      </div>
    </div>
  );
};

export default PurchaseComponent;
