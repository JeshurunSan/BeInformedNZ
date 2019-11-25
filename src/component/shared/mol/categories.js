import React from "react";
import "../../../css/shared/mol/categories.css";

const Categories = () => {
  return (
    <div className="Categories">
      <p>Categories</p>
      <form>
        <label>
          <input type="checkbox" value="categories" />
          Destinations
        </label>
        <label>
          <input type="checkbox" value="categories" />
          Ethnic Foods
        </label>
        <label>
          <input type="checkbox" value="categories" />
          Activities
        </label>
        <label>
          <input type="checkbox" value="categories" />
          Culture
        </label>
        <label>
          <input type="checkbox" value="categories" />
          Rules and Regulation
        </label>
        <label>
          <input type="checkbox" value="categories" />
          Immigration
        </label>
        <label>
          <input type="checkbox" value="categories" />
          Traffic Rules and Transport
        </label>
      </form>
    </div>
  );
};

export default Categories;
