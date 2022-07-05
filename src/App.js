import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import FeaturedTrips from "./components/FeaturedTrips";
import Updates from "./components/Updates";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Introduction />
      <About />
      <FeaturedTrips />
      <Updates />
    </Fragment>
  );
}

export default App;
