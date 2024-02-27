import React from "react";
import Plx from "react-plx";
import { Image } from "antd";
import About from "../components/About";
import Header from "../components/Header";
import HomeButton from "../components/HomeButton";
import Introduction from "../components/Introduction";
import CommunityTab from "../components/CommunityTab";
import CommunityIcon from "../components/CommunityIcon";
import { useParams } from "react-router-dom";
import "../styles/home.css";

const youtubeLink =
  "https://www.youtube.com/embed/B1TRRiLOw0Q?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&iv_load_policy=3?rel=0";

const data = [
  {
    start: 0,
    end: 100,
    properties: [
      {
        startValue: 1.3,
        endValue: 1.8,
        property: "scale",
      },
    ],
  },
];

function Home() {
  const { section } = useParams();
  const communityTabRef = React.useRef(null);
  const imageWrapperRef = React.useRef(null);
  const communityIconRef = React.useRef(null);
  const [showHeader, setShowHeader] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setShowHeader(currentPosition <= 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    if (section === "about") {
      imageWrapperRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "media") {
      communityTabRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "news") {
      communityIconRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [section]);

  return (
    <div id="home">
      {showHeader && <Header />}
      <Plx parallaxData={data}>
        <div className="video-container">
          <Introduction />
          <HomeButton />
          <video width="100%" height="100%" autoPlay={true} muted>
            <source src="/video/gaming.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Plx>
      <div ref={imageWrapperRef} className="image-wrapper">
        <About />
      </div>
      <div ref={communityTabRef} className="community-wrapper">
        <CommunityTab />
      </div>
      <div ref={communityIconRef} className="community-icon-wrapper">
        <Image
          src="/images/skate.jpg"
          className="community-icon-image"
          preview={false}
        />
        <CommunityIcon />
      </div>
    </div>
  );
}

export default Home;
