import React from "react";

import Explore from "./Explore/";
import Experiences from "./Experiences/";
import Homes from "./Homes/Landing";
import Popular from "./Popular/";
import Destinations from "./Destinations/";
import Footer from "./Footer/";
import Header from "./Header/";

export default function() {
  return (
    <div>
      <Header />
      <main>
        <Explore />
        <Experiences />
        <Homes />
        <Popular />
        <Destinations />
      </main>
      <Footer />
    </div>
  );
}
