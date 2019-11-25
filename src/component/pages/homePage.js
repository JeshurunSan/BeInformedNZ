import React from "react";
import "../../css/pages/homePage.css";

import Footer from "../shared/org/footer";
import Logo from "../shared/atm/Logo/logo";
import Navigation from "../shared/mol/Navigation/Navigation";
import SearchEngine from "../shared/mol/searchEngine";
import AnnouncementBar from "../shared/mol/announcebar";

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="home-content">
      
        <div className="SearchEngineContainer">
          <Logo />
          <p className="home-description">
            Curabitur sodales, ligula eu ultricies blandit, neque elit dignissim
            eros, a tempus sem risus eget libero. Etiam id quam eu mauris
            viverra vulputate non nec est. In hac habitasse platea dictumst.
          </p>
          <SearchEngine />
          <Navigation />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
