export function Button({ more, setMore }) {
  function handleClick() {
    setMore(!more);
  }
  return (
    <button className="button" onClick={handleClick}>
      {!more ? (
        <div className="button-more">
          <span>More</span>
          <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <circle cx="20" cy="20" r="20" fill="#303030" />
              <path d="M14 17L20 23L26 17" stroke="#FFF" strokeWidth="2" />
            </g>
          </svg>
        </div>
      ) : (
        <div className="button-less">
          <span>Less</span>
          <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <circle fill="#303030" cx="20" cy="20" r="20" />
              <path stroke="#FFF" strokeWidth="2" d="M14 23l6-6 6 6" />
            </g>
          </svg>
        </div>
      )}
    </button>
  );
}
