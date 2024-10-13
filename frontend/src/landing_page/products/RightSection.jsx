import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row p-3">
        <div className="col-lg-6 col-sm-12 py-5 d-flex flex-column justify-content-center">
          <div>
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <div className="mt-3">
              <a href={learnMore} style={{ textDecoration: "none" }}>
                Learn More{" "}
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 p-5">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
