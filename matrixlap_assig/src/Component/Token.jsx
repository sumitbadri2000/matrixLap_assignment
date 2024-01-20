import { useEffect, useState } from "react";
import axios from "axios";

const Token = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://backend-matrix-lap.vercel.app/data/"
      );
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []); // Adding an empty dependency array to ensure useEffect runs only once

  console.log(data);

  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-16">
        <span className="text-white">Our</span>{" "}
        <span className="text-yellow-500">Tokens</span>
      </h1>
      <h1 className="mt-6 text-center">
        Pallentesque habitant morbi tristique senectus et netus et Pallentesque
        habitant morbi
      </h1>
      <div className="w-[60%] m-auto grid grid-cols-3 gap-8 items-center justify-center text-center mt-8 ">
        {data.map((ele) => (
          <div
            key={ele.id}
            className="border-4 border-yellow-500 py-6 text-center rounded-xl bg-[rgb(20,20,17)]">
            <div className="flex items-center justify-center">
              <div className="w-[50%]">
                <img className="w-full" src={ele.img} alt="" />
              </div>
            </div>
            <div className="mt-4 text-white">
              <h1>{ele.tokenName}</h1>
              <div className="flex gap-6 items-center justify-center">
                <h1>Symbol</h1>
                <h1>{ele.symbol}</h1>
              </div>
              <div className="flex gap-6 items-center justify-center">
                <h1>Decimals</h1>
                <h1>{ele.decimals}</h1>
              </div>
              <div className="flex gap-6 items-center justify-center">
                <h1>Market Cap</h1>
                <h1>{ele.marketcap}</h1>
              </div>
              <div className="flex gap-6 items-center justify-center">
                <h1>Chain</h1>
                <h1>{ele.chain}</h1>
              </div>
            </div>
            <button className="border-2 bg-yellow-500 border-yellow-500 rounded-full px-8 py-1 mt-6">
              Details
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Token;
