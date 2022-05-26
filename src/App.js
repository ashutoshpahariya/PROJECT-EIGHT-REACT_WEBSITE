import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Homepage from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./COMPONENT/Footer";
import { Switch, Route, Redirect } from "react-router-dom";
function App() {
  return (
    //--WRITE TWO PARENT WITH THE HELP OF OPEN TAG LINE NO 7 AND CLOSE TAG LINE NO 25  OR
    //--WRITE TWO PARENT WITH THE HELP OF OPEN TAG  <React.Fragment> AND CLOSE TAG </React.Fragment>
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
