import React from "react";
import "./newCards.css";
import { Text } from "@chakra-ui/react";

let team = [
  {
    name: "Rama Almomani",
    position: "Full Stack Developer",
    imageSrc: "./assets/rama.jpg",
    linkedin: "#",
    github: "#",
    gmail: "rama@gmail.com",
  },
];

const NewCards = () => {
  return (
    <>
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Fira+Sans+Condensed:300,400,600i&display=swap"
          rel="stylesheet"
        />
      </head>
      <Text fontWeight={"500"} fontSize={"3xl"} mb={5} fontFamily="cursive">
        Meet Our Team
      </Text>
      <div class="infocardContainer">
        {team.map((item) => {
          <>
            <div id="main">
              <img src={item.imageSrc}/>
            </div>
            <div id="textbois">
              <h2>{item.name}</h2>
              <h4>{item.position}</h4>
              <a href="mailto:limecicila@gmail.com">limecicila@gmail.com</a>
              <div id="hotlinks">
                <a href="https://codepen.io/LIMESTA">
                  <img
                    id="codepenio"
                    src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png"
                    target="_blank"
                  />
                </a>
                <a href="https://codepen.io/LIMESTA">
                  <img
                    id="codepenio"
                    src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png"
                    target="_blank"
                  />
                </a>
                <a href="https://codepen.io/LIMESTA">
                  <img
                    id="codepenio"
                    src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png"
                    target="_blank"
                  />
                </a>
              </div>
            </div>
          </>;
        })}
      </div>
    </>
  );
};

export default NewCards;
