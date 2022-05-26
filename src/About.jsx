import React from "react";
import CommonComponent from "./Common-componenet";

function About() {
  return (
    <>
      <CommonComponent
        name="Welcome to About page"
        imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKxpuu7njX6BitYukqRII_UGmbSl5vVYSCUZi56RJbxBwjJgwy5NofW0cL0WWzGpw_njM&usqp=CAU"
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
}

export default About;
