import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Content />
      <Footer />
    </Fragment>
  );
}

export default App;
