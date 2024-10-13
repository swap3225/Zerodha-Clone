import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="mt-5 mb-3">The Zerodha Universe</h1>
        <p>
          {" "}
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-lg text-muted mt-3">Thematic investment platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" style={{width : "40%"}}/>
          <p className="text-sm text-muted mt-3">Algo & Strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" style={{width : "50%"}}/>
          <p className="text-sm text-muted mt-3">Options Trading Platform</p>
        </div>

        <div className="col-4 p-3 mt-3">
          <img src="media/images/zerodhaFundhouse.png" style={{width : "50%"}}/>
          <p className="text-lg text-muted mt-3">Asset Management</p>
        </div>

        <div className="col-4 p-3 mt-3">
          <img src="media/images/goldenpiLogo.png" style={{width : "50%"}}/>
          <p className="text-sm text-muted mt-3">Bonds Trading Platform</p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img src="media/images/dittoLogo.png" style={{width : "35%"}}/>
          <p className="text-sm text-muted mt-3">Insurance</p>
        </div>  


        <button className='p-2 fs-5 btn btn-primary my-5' style={{width : "20%", margin : "0 auto"}}>Signup Now</button>
      </div>
    </div>
  );
}

export default Universe;
