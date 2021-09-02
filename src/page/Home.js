import React, { useEffect, useState } from "react";
import Leagues from "../component/Home/Leagues";

const Home = () => {
  const [leagues, setLeagues] = useState([]);
  const [load, seLoad] = useState(true);
  useEffect(() => {
    const url = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLeagues(data.leagues.slice(18, 36));
        seLoad(false);
      });
  }, []);

  return (
    <div className="w-full">
      <div className="bg-mania bg-no-repeat bg-center bg-cover justify-center h-64 flex">
        <div className="font-bold text-white self-center text-center p-5 text-4xl">
          Sports Mania
        </div>
      </div>
      <div className="bg-indigo-900 flex justify-center ">
        {load &&  <div className="text-white text-center text-4xl font-bold h-screen mt-24">
            ...Loading...
          </div>}
        </div>
      <div className="bg-indigo-900 grid lg:grid-cols-3 md:grid-cols-2 xl:px-24 xl:py-5 sm:px-6 sm:py-6 lg:px-56 md:px-5 lg:py-5 md:py-5 xl:h-auto lg:h-auto md:h-full">
        {leagues.map((league, index) => (
          <Leagues league={league} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
