import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Leagues = (props) => {
  const { idLeague, strLeague, strSport } = props.league;
  const [leageDetails, setLEageDetails] = useState([]);
  const { strLogo } = leageDetails;

  const fetchData = async () => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
    const response = await fetch(url);
    const movies = await response.json();
    return movies;
  };

  useEffect(() => {
    fetchData().then((data) => {
      setLEageDetails(data.leagues[0]);
    });
  }, [idLeague]);
  return (
    <div className="bg-white m-2 p-5 text-center shadow-2xl">
      <div className="grid justify-items-center">
      <img src={strLogo} alt="logo" className="lg:w-64 md:w-64 sm:24 p-5" />
      </div>
      <div className="font-bold lg:text-xl sm:text-baseline">{strLeague}</div>
      <div className="text-gray-400">Sports type: {strSport}</div>
      <Link to={"/leagues/" + idLeague + "/" + strLeague}>
        <div className="bg-blue-600 text-white inline-block px-5 py-2 mt-5 cursor-pointer">
          Explore <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </Link>
    </div>
  );
};

export default Leagues;
