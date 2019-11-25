import React from "react";
import "../../css/pages/errorPage.css";

import Footer from "../shared/org/footer";

const ErrorPage = () => {
  return (
    <div className="ErrorPage">
      <div className="error-content">
        <p>Error 404: Page not found!</p>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
