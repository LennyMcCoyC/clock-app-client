import { useEffect, useState } from "react";

export function Quote() {
  const [quote, setQuote] = useState();
  const [error, setError] = useState();

  function updateQuote() {
    setError(undefined);
    const controller = new AbortController();
    fetch("https://api.quotable.io/random", {
      signal: controller.signal,
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return Promise.reject(res);
        }
      })
      .then((data) => {
        setQuote(data);
        console.log(quote);
      })
      .catch((e) => {
        if (e?.name === "AbortError") return;
        setError(e);
      });
  }

  useEffect(() => {
    updateQuote();
  }, []);

  return (
    <>
      {error ? (
        "Error"
      ) : (
        <div className="quote-wrapper">
          <div className="quote-top">
            <div className="quote-content">{`"${quote?.content}"`}</div>
            <svg
              onClick={updateQuote}
              className="quote-icon"
              width="16.667"
              height="16.667"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.188 10.667a.208.208 0 01.147.355l-2.344 2.206a5.826 5.826 0 009.578-2.488l2.387.746A8.322 8.322 0 013.17 14.94l-2.149 2.022a.208.208 0 01-.355-.148v-6.148h6.52zm7.617-7.63L16.978.958a.208.208 0 01.355.146v6.23h-6.498a.208.208 0 01-.147-.356L13 4.765A5.825 5.825 0 003.43 7.26l-2.386-.746a8.32 8.32 0 0113.76-3.477z"
                fill="#FFF"
                fillRule="nonzero"
                opacity=".5"
              />
            </svg>
          </div>
          <div className="quote-author">{quote?.author}</div>
        </div>
      )}
    </>
  );
}
