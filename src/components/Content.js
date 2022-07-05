import { Fragment } from "react";
import Introduction from "./Introduction";
import About from "./About";
import FeaturedTrips from "./FeaturedTrips";
import Updates from "./Updates";

const Content = () => {
  return (
    <Fragment>
      <Introduction />
      <About />
      <FeaturedTrips />
      <Updates />
    </Fragment>
  );
};

export default Content;
