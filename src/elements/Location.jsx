export function Location({ location }) {
  return (
    <div className="location">
      <span>{`in ${location?.data.location.city.name}`}, </span>
      <span>{location?.data.location.country.alpha2}</span>
    </div>
  );
}
