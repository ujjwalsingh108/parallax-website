import React from "react";
import { Image, Tabs } from "antd";
import PurchaseComponent from "../components/PurchaseComponent";
import "../styles/purchase.css";

const items = [
  {
    key: "1",
    label: "Games",
    children: <PurchaseComponent />,
  },
];

function Purchase() {
  return (
    <div id="purchase">
      <div className="purchase-img">
        <Image
          src={"/images/purchase.jpg"}
          preview={false}
          width={"80vw"}
          height={"80vh"}
        />
      </div>
      <div>
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </div>
  );
}

export default Purchase;
