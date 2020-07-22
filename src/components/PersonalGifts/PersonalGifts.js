import React, { Component } from "react";
import "./styles.css";
import FadeInSection from "../FadeInSection";
import { Typography } from "antd";
const { Title } = Typography;

class PersonalGifts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FadeInSection direction="up">
        <div className="personal-gifts-container">
          <img
            src={require("../../images/envelope-circled.png")}
            className="personal-gifts-image"
          />
          <div className="personal-gifts-content">
            <Title type="secondary" level={2} className="subtitle">
              Personal Gifts
            </Title>
            <p style={{ fontSize: "14px", color: "#7A7A7A" }}>
              Keeping a strong connection with your loved ones is important. Our
              personal gift curators will help pick out (and deliver)the perfect
              present for any occasion.
            </p>
            <p style={{ fontSize: "14px" }} level={2}>
              Will ensure you never show up empty handed
            </p>
          </div>
          <img
            src={require("../../images/cropped-blob.png")}
            className="personal-gifts-blob"
          />
        </div>
      </FadeInSection>
    );
  }
}

export default PersonalGifts;
