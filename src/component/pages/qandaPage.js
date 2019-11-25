import React from "react";

import Footer from "../shared/org/footer";

import "../../css/pages/qandaPage.css";

import Question from "../shared/mol/question";
import Feedback from "../shared/mol/feedback";

const QandaPage = () => {
  return (
    <div className="QandaPage">
      <div className="qanda-content">
        <div className="qanda-component">
          <Question />
          <Feedback />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QandaPage;
