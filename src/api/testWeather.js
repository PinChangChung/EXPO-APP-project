import axios from "axios";

export const getWeatherInfo = async () => {
    const key = "CWA-A453F47E-8E1C-404D-A354-D4F4F7B1A7FE";
  
    const weather = await axios.get(
      `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-061?Authorization=${key}&format=JSON&elementName=WeatherDescription&sort=time`
    );
    //JSON.stringify(weather);
    //const data = weather.request._response;
    const data = JSON.stringify(weather.data);
    //console.log(data);
    return data;
  };