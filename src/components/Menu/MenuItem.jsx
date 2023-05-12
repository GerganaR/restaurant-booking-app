import React from "react";

const MenuItem = ({ item }) => (
  <div className="menuitem-wrapper">
    <div className="card " style={{ width: "18rem" }}>
      <img className="card-img-top" src={item.image_url} alt={item.title} />
      <h5 className="card-title pt-4">{item.title}</h5>
      <h6 class="card-subtitle mb-2">
        {item.grams}g | ${item.price}{" "}
      </h6>
      <div className="card-body pt-0">
        <p className="card-text">{item.ingredients}</p>
      </div>
    </div>

    {/* <div className="menuitem-image">
      <img src={item.image_url} alt={item.title} />
    </div>
    <div className="menuitem-title">
      <h3>{item.title}</h3>
    </div>
    <div className="menuitem-description">
      <p>{item.ingredients}</p>
    </div>

    <p>{item.grams} g</p>
    <p>${item.price}</p> */}
  </div>
);

export default MenuItem;
