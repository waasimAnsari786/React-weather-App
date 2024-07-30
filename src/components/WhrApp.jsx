import React, { useState } from "react";

export default function WhrApp() {
  const [inpVal, setInpVal] = useState("");
  const [cityName, setCityName] = useState("");
  const [APIData, setAPIData] = useState();
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inpVal}&appid=e8b2a8e8dfc6de36a2ca5b889ba4bfa2`;

  const handleOnChange = (e) => {
    setInpVal(e.target.value);
  };

  const kelvinToCelcies = (kelvin) => {
    return (kelvin - 273.15).toFixed(2);
  };

  const getData = async () => {
    setCityName(inpVal);
    const resp = await fetch(URL);
    const data = await resp.json();
    setAPIData(data);
    console.log(data);
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center flex-column mt-5">
        <h1 className="heading mb-5">react wheather app</h1>
        <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-7 col-sm-8 col-9 w-app d-flex justify-content-center align-items-center flex-column">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              getData();
            }}
          >
            <input
              onChange={handleOnChange}
              className="search-bar"
              type="text"
              name="search"
              placeholder="search"
            />
          </form>

          <h1 className="mt-5">{cityName}</h1>
          {APIData ? (
            <>
              <h3>{kelvinToCelcies(APIData.main.temp)}&deg;C</h3>
              <span>{kelvinToCelcies(APIData.main.temp_max)}&deg;C</span>
              <span>{kelvinToCelcies(APIData.main.temp_min)}&deg;C</span>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
