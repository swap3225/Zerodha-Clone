import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5 mx-3">
        <div className="col-4 p-3 me-5" style={{marginLeft : "18.8em"}}>
          <h1 className="fs-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" className="my-3"/>
          <br />
          <a href="" className="me-3">Track account opening</a>
          <a href="" className="me-3">Track segment activation</a>
          <a href="" className="me-3">Intraday margins</a>
          <a href="" className="me-3">Kite user manual</a>
        </div>
        <div className="col-3 p-3 ms-5">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li style={{lineHeight : "2"}}>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
