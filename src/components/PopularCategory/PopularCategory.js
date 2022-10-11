import React from "react";
import "./PopularCategory.css";
const PopularCategory = () => {
  return (
    <div className="popular-category fw-bolder mt-5">
      <p style={{ fontFamily: "Outfit" }}>Popular Category</p>
      <h2 className="fw-bold">
        <span style={{ color: "red", fontFamily: "sans-serif" }}>
          Hot & Popular
        </span>{" "}
        Categories To test your knowledge
      </h2>
      <hr />
    </div>
  );
};

export default PopularCategory;
