import React from "react";
import moment from "moment";
function Momentjs() {
  let DOB = new Date(1998, 2, 8);
  return (
    <div>
      <h1>moment-JS</h1>
      <button
        type="button"
        onClick={() => {
          console.log(moment().format("MMMM Do YYYY, h:mm:ss a")); // July 19th 2024, 10:28:05 am
          console.log(moment().format("dddd")); // Friday
          console.log(moment().format("MMMM Do YYYY")); // Jul 19th 24
          console.log(moment().format("YYYY [escaped] YYYY")); // 2024 escaped 2024
          console.log(moment().format()); // 2024-07-19T10:28:05+05:30
        }}
      >
        moment
      </button>
      <h2> Relative Time</h2>
      <button
        onClick={() => {
          console.log(
            `y-m-d deduct from now:${moment("20111031", "YYYYMMDD").fromNow()}`
          ); // 13 years ago
          console.log(
            `how many hours done in a day :${moment().startOf("day").fromNow()}`
          ); // 11 hours
          console.log(
            `how many  reaming hours  in a day :${moment()
              .endOf("day")
              .fromNow()}`
          ); // 11 hours
          console.log(
            `how many minutes completed in present hour :${moment()
              .startOf("hour")
              .fromNow()}`
          ); // 11 hours
        }}
      >
        relative
      </button>
      <h2> Calendar Time</h2>
      <button onClick={()=>{
        console.log(`subtracting 12 days:-${ moment().subtract(12, 'days').calendar()}`)
       console.log(`today- time:-${moment().calendar()}`)
       console.log(`adding 1 days:-${ moment().add(1, 'days').calendar()}`)
      }}>  Calendar Time</button>
      <h2> Multiple Locale Support</h2>
      <button onClick={()=>{
       console.log(`${ moment.locale()}`)
       console.log(` hours-minutes:-${moment().format('LT')}`)
       console.log(` hours-minutes-seconds:-${moment().format('LTS')}`)
       console.log(` date:-${moment().format('L')}`)
       console.log(` date:-${moment().format('l')}`)
       console.log(` month date year:-${moment().format('LL')}`)
       console.log(` month-date year:-${moment().format('ll')}`)
       console.log(` month- date year time:-${moment().format('LLL')}`)
       console.log(`month- date year time:-${moment().format('lll')}`)
       console.log(` day month- date year time:-${moment().format('LLLL')}`)
       console.log(` day month- date year time:-${moment().format('llll')}`)
        
      }}> 

Multiple Locale Support</button>
    </div>
  );
}

export default Momentjs;
