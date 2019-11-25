import React, { Component } from "react";
import "../../../../css/shared/inputsearch.css";

class InputSearch extends Component {
  render() {
    return (
      <div className="SearchContainer">
        <form className="input-search" action="search.js">
          <input type="search" placeholder="Search..." name="term" />
          <button>
            <span className="fa fa-search" />
          </button>
        </form>
      </div>
    );
  }
}

export default InputSearch;
