import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../Services/cryptoApi";
const CryptoCurrencies = (props) => {
  const { data: cryptosList, isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  return (
    <>
      <div className="crypto-container flex flex-wrap gap-8 p-8 justify-center w-full">
        {cryptos.map((currency, index) => (
          <div key={currency.uuid} className="crypto-card hover:scale-110 shadow-md shadow-slate-600 w-[300px] flex flex-col gap-2">
            <div className="ranking p-4 items-center flex gap-2">
              <h1 className="">
                {index + 1 + " . "} {currency.name}
              </h1>
              <div className="img h-[30px] ml-auto w-[30px]">
                <img src={currency.iconUrl} alt="" />
              </div>
            </div>
              <div className="pricing-details p-4 flex flex-col gap-4">
                <h1>Price : {millify(currency.price)}</h1>
                <h1>Marketcap : {millify(currency.marketCap)}</h1>
                <h1>DailyChange : {millify(currency.change)}%</h1>
              </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CryptoCurrencies;
