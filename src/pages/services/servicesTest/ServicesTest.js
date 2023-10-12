import React from "react";
import { handymanExperties } from "../../../assets/constants";

import "./servicesTest.css"; // Import the CSS file for styling
import { Heading } from "@chakra-ui/react";

const ServicesTest = ({ hue }) => {
  console.log("handymanExperties:", handymanExperties); // Add this line to check if handymanExperties is defined

  const cardData = handymanExperties.map((item) => ({
    imageUrl: item.imgUrl,
    caption: item.name,
    description: item.description,
  }));

  return (
    <>
      <Heading as="h2" size="3xl" noOfLines={1} paddingTop={10}>
        Services
      </Heading>
      <div className="serCards">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flip-card-container"
            style={{ "--hue": hue }}
          >
            <div className="flip-card">
              <div className="card-front">
                <figure>
                  <div className="img-bg"></div>
                  <img src={card.imageUrl} alt={card.caption} />
                  <figcaption>{card.caption}</figcaption>
                </figure>
                <p
                  style={{
                    color: "white",
                    letterSpacing: "2px",
                    fontSize: "14px",
                    maxWidth: "320px",
                    fontFamily: "cursive",
                  }}
                >
                  {card.description}
                </p>
              </div>

              <div className="card-back">
                <figure>
                  <div className="img-bg"></div>
                  <img src={card.imageUrl} alt={card.caption} />
                </figure>
                <button style={{ padding: "15px" }}>See All</button>
                <div className="design-container">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((design) => (
                    <span
                      key={design}
                      className={`design design--${design}`}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServicesTest;
