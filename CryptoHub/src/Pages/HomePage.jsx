import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex justify-center">
      <div>
        <h1 className="text-2xl">Global CryptoStats</h1>
        <div className="container">
          <div className="child">
            <h1>Total Cryptocurrencies</h1>
          </div>
          <div className="child">
            item2
          </div>
          <div className="child">
            item3
          </div>
          <div className="child">
            item4
          </div>
          <div className="child">
            item5
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
