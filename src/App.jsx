import { useState, useEffect } from "react";
import { Location } from "./elements/Location";
import { Button } from "./elements/Button";
import { Quote } from "./elements/Quote";
import { Time } from "./elements/Time";
import { Expand } from "./elements/Expand";

export default function App() {
  const [error, setError] = useState();
  const [location, setLocation] = useState();
  const [time, setTime] = useState();
  const [more, setMore] = useState(false);
  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState(
    date.toLocaleString("en-US", {
      hour: "numeric",
      hour12: false,
    })
  );

  async function updateLocationAndTime() {
    try {
      const ipRes = await fetch("https://api.ipify.org/?format=json");
      const ip = await ipRes.json();
      const ipAddr = ip.ip;
      const locationRes = await fetch(
        `https://api.ipbase.com/v2/info?apikey=s0m8XQcfl6X0mFswbqMuF3kIMFX8kWg1hN9wwgWG&ip=${ipAddr}`
      );
      const location = await locationRes.json();
      setLocation(location);
      const timeRes = await fetch("http://worldtimeapi.org/api/ip");
      const time = await timeRes.json();
      setTime(time);
    } catch (e) {
      console.log(e);
      setError(e);
    }
  }

  useEffect(() => {
    updateLocationAndTime();
    setInterval(() => setDate(new Date()), 1000);
    if ((hour < 18) & (hour > 5)) {
      document.body.style.backgroundImage =
        "url(./assets/desktop/bg-image-daytime.jpg)";
    } else {
      document.body.style.backgroundImage =
        "url(./assets/desktop/bg-image-nighttime.jpg)";
    }
  }, []);

  return (
    <>
      {error ? (
        "Error"
      ) : !more ? (
        <div className="main-wrapper">
          <div className="wrapper">
            <Quote />
            <div className="time-location-wrapper">
              <Time location={location} date={date} hour={hour} />
              <div className="location-wrapper">
                <Location location={location} />
                <Button more={more} setMore={setMore} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="main-wrapper-expand">
          <div className="wrapper-expand">
            <div className="main-wrapper-expand-top">
              <div className="time-location-wrapper-expand">
                <Time location={location} date={date} hour={hour} />
                <div
                  className="location-wrapper-expand
              "
                >
                  <Location location={location} />
                  <Button more={more} setMore={setMore} />
                </div>
              </div>
            </div>
            <Expand location={location} time={time} hour={hour} />
          </div>
        </div>
      )}
    </>
  );
}
