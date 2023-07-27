# Frontend Mentor - Clock app solution

This is a solution to the [Clock app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/clock-app-LMFaxFwrM).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

This is an API project that functions as a desktop clock.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size (working on mobile layout)
- See hover states for all interactive elements on the page
- View the current time and location information based on their IP address
- View additional information about the date and time in the expanded state
- Be shown the correct greeting and background image based on the time of day they're visiting the site
- Generate random programming quotes by clicking the refresh icon near the quote

### Screenshot

<img width="2013" alt="Screenshot 2023-07-27 at 12 50 35 PM" src="https://github.com/LennyMcCoyC/clock-app-client/assets/140719850/0b9b7a38-fde7-49f4-ab3b-1f852eb9e590">
<img width="1965" alt="Screenshot 2023-07-27 at 12 50 45 PM" src="https://github.com/LennyMcCoyC/clock-app-client/assets/140719850/1a01fa72-8885-4b28-b04d-c3bf5e405807">


### Links

- Solution URL: https://github.com/LennyMcCoyC/clock-app-client
- Live Site URL: https://main--comfy-valkyrie-14b8c6.netlify.app/

## My process

### Built with

- Semantic HTML5 markup
- SASS custom properties
- [React](https://reactjs.org/) - JS library
  

### What I learned

- I found out some great APIs related to geo location and time.
- Gained deeper understanding on async await while calling multiple APIs. 


### Continued development

I'm still working on the mobile version of this app, will updated soon! There will be bug fixes as well. 

### Useful resources

- [World Time API](http://worldtimeapi.org/) to set the time based on the visitor's IP adress. This API will also be used for additional data, like the day of the year shown in the expanded state.
- [IP Geolocation API](https://freegeoip.app/) to set the city and country underneath the time
- [Programming Quotes API](https://programming-quotes-api.herokuapp.com/) to generate random programming quotes.
    - If the Programming Quotes API doesn't work, [here's a good alternative quote API](https://github.com/lukePeavey/quotable) you can use instead. It's not programming specific, but it will do the trick.


