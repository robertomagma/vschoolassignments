import React from "react";

const styles = {
  textAlign: "center",
  fontSize: "30px",
  color: "purple",
  background: "#DCE35B",
  background: "-webkit-linear-gradient(to right, #45B649, #DCE35B)", /* Chrome 10-25, Safari 5.1-6 */
  background: "linear-gradient(to right, #45B649, #DCE35B)",/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

export default function Header (props){
  return (
    <header style={styles}>
      Ugly Things
    </header>
  )
};
