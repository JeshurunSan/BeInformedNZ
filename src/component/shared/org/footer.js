import React from "react";
import "../../../css/shared/org/footer.css";

import Subscribe from "../mol/subscribe";
import Copyright from "./../atm/copyright";
import Navigation from "../../shared/mol/Navigation/Navigation";
import SocialNavigation from "./../mol/socialNavigation";

const Footer = () => {
  return (
    <div className="Footer">
      <Subscribe />
      <div className="Footer-Navigation">
        <Navigation />
        <SocialNavigation />
      </div>
      <Copyright />
    </div>
  );
};

export default Footer;
