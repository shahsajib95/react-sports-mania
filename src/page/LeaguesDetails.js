import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";

const LeaguesDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [load, setLoad] = useState(true);

  const fetchData = async () => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;
    const response = await fetch(url);
    const league = await response.json();
    return league;
  };

  useEffect(() => {
    fetchData().then((data) => {
      setDetails(data.leagues[0]);
      setLoad(false);
    });
  }, [id]);
  const {
    intFormedYear,
    strCountry,
    strSport,
    strGender,
    strDescriptionEN,
    strLogo,
    strLeagueAlternate,
    strFacebook,
    strTwitter,
    strYoutube
  } = details;
  return (
    <div>
      <div className="bg-mania bg-no-repeat bg-center  bg-cover h-64">
        <div className="h-64 justify-center flex bg-white bg-opacity-20">
          <div className="font-bold text-white self-center text-center p-5 text-4xl">
            <img src={strLogo} alt="logo" className="w-64 opacity-100" />
          </div>
        </div>
      </div>
      <div className="bg-indigo-900  lg:px-24 py-5 sm:px-5 ">
        {load ? (
          <div className="text-white text-center text-4xl font-bold h-screen mt-24">
            ...Loading...
          </div>
        ) : (
          <>
            <div className="bg-blue-600 m-2 p-5 text-white rounded xl:flex xl:justify-between lg:flex lg:justify-between lg:text-left md:flex md:justify-between">
              <div className="mb-5 xl:text-left lg:text-left md:text-left sm:text-justify ">
                <div className="lg:text-2xl font-bold md:text-baseline">{strLeagueAlternate}</div>
                <div className="text-baseline mt-5">
                  Founded: {intFormedYear}
                </div>
                <div className="text-baseline">Country: {strCountry}</div>
                <div className="text-baseline">Sport Type: {strSport}</div>
                <div className="text-baseline">Gender: {strGender}</div>
              </div>
              <div>
                {
                  <img
                    src={
                      require(strGender === "Male"
                        ? `../img/male.png`
                        : `../img/female.png`).default
                    }
                    alt="leagueImage"
                    className="lg:w-64 md:w-64 sm:w-1/2"
                  />
                }
              </div>
            </div>
            {strDescriptionEN &&
              strDescriptionEN.split("\r\n\r\n").map((str, index) => (
                <div className="text-gray-300 p-5" key={index}>
                  {str}
                </div>
              ))}
            <div className="p-5 flex justify-center">
             <a href={`https://${strTwitter}`} target="_blank" rel="noreferrer"> <FaTwitter className="m-5 text-white bg-blue-500 rounded-full text-6xl p-2"/></a>
              <a href={`https://${strFacebook}`} target="_blank" rel="noreferrer"><FaFacebookF className="m-5 text-white bg-blue-800 rounded-full text-6xl p-2"/></a>
              <a href={`https://${strYoutube}`} target="_blank" rel="noreferrer"><FaYoutube className="m-5 text-white bg-red-800 rounded-full text-6xl p-2"/></a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LeaguesDetails;
