import React from "react";
import "./css/stylesheet.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Banner(props) {
  return (
    <img src="https://github.com/shelkelly/BettaBytes/blob/main/client/src/images/header-my-aquarium.jpg?raw=true" alt="Betta Bytes Banner" id="banner"></img>
  );
}

export default Banner;