import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../Services/cryptoApi";
import {News,CryptoCurrencies} from"../Components/index";

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  if (loading || isFetching) {
    return (
      <center>
        <img
          className="w-[300px] h-[300px]"
          src="https://cdn-icons-gif.flaticon.com/10282/10282558.gif"
        ></img>
      </center>
    );
  }
  const globalStats = data?.data?.stats;
  return (
    <>
      <div className="px-40 flex flex-col w-full gap-6 items-center">
        <div>
          <h1 className="text-2xl font-bold text-center mb-[20px]">
            Global CryptoStats
          </h1>
          <div className="container ">
            <div className="child">
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl text-slate-500">
                  Total CryptoCurrencies
                </h1>
                <span className="font-bold">{millify(globalStats.total)}</span>
              </div>
            </div>
            <div className="child">
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl text-slate-500">Total Exchanges</h1>
                <span className="font-bold">
                  {millify(globalStats.totalExchanges)}
                </span>
              </div>
            </div>
            <div className="child">
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl text-slate-500">Total MarketCap</h1>
                <span className="font-bold">
                  {millify(globalStats.totalMarketCap)}
                </span>
              </div>
            </div>
            <div className="child">
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl text-slate-500">Total 24h Volume</h1>
                <span className="font-bold">
                  {millify(globalStats.total24hVolume)}
                </span>
              </div>
            </div>
            <div className="child">
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl text-slate-500">Total Markets</h1>
                <span className="font-bold">
                  {millify(globalStats.totalMarkets)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="top10 mt-[40px] p-4  font-bold flex  gap-4 ">
        <h1 className="text-center  text-2xl">
          Top 10 CryptoCurrencies of the World
        </h1>
        <Link to="/CryptoCurrencies" className="ml-auto">
          {" "}
          <button className="p-3 px-4 hover:scale-110 bg-Blue text-white rounded-xl">
            Show More
          </button>
        </Link>
      </div>
      <CryptoCurrencies limit={10}/>


      <div className="top10 mt-[40px] p-4  font-bold flex  gap-4 ">
        <h1 className="text-center  text-2xl">
          Latest Cryto News
        </h1>
        <Link to="/News" className="ml-auto">
          {" "}
          <button className="p-3 px-4 hover:scale-110 bg-Blue text-white rounded-xl">
            Show More
          </button>
        </Link>
      </div>
      <News limit={10}/>

    </>
  );
};

export default HomePage;
