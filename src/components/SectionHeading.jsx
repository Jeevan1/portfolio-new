import React from "react";

function SectionHeading({ title, description }) {
  return (
    <div className="section__heading">
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  );
}

export default SectionHeading;
