export function Expand({ location, time, hour }) {
  return (
    <div
      className="expand-wrapper"
      style={
        hour >= 18 || hour < 5
          ? {
              backgroundColor: "hsla(0, 0%, 0%, 0.75)",
            }
          : { backgroundColor: "hsla(0, 0%, 100%, 0.75)" }
      }
    >
      <div
        className="expand"
        style={
          hour >= 18 || hour < 5
            ? {
                color: "white",
              }
            : { color: "hsl(0, 0%, 19%)" }
        }
      >
        <div
          className="expand-container-large left"
          style={
            hour >= 18 || hour < 5
              ? {
                  borderRight: "1px solid hsla(0, 0%, 100%, 0.25)",
                }
              : { borderRight: "1px solid hsla(0, 0%, 19%, 0.25)" }
          }
        >
          <div className="expand-container-small">
            <span className="description">current timezone</span>
            <br />
            <span className="details">
              {location?.data.location.continent.name}/
            </span>
            <span className="details">{location?.data.location.city.name}</span>
          </div>
          <div className="expand-container-small bottom">
            <span className="description">day of the year</span>
            <br />

            <span className="details">{time?.day_of_year}</span>
          </div>
        </div>
        <div className="expand-container-large">
          <div className="expand-container-small">
            <span className="description">day of the week</span>
            <br />

            <span className="details">{time?.day_of_week}</span>
          </div>
          <div className="expand-container-small bottom">
            <span className="description">week number</span>
            <br />

            <span className="details">{time?.week_number}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
