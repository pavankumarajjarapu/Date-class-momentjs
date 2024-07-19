import React from "react";
import moment from "moment";
function DateClass() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let childernsDay = new Date(2024, 7, 19,13,56,45,865);
  let currentDate = new Date();
  console.log(childernsDay);
  console.log(currentDate);
  console.log(childernsDay.getMonth())
  console.log(`month:- ${monthsOfYear[childernsDay.getMonth()-1]}`);
  console.log(childernsDay.getDay())
  console.log(`day:-${daysOfWeek[childernsDay.getDay()]}`)
  console.log(`year:-${childernsDay.getFullYear()}`)
  console.log(`Hours:-${childernsDay.getHours()}`)
  console.log(`minutes:-${childernsDay.getMinutes()}`)
  console.log(`seconds:-${childernsDay.getSeconds()}`)
  console.log(`milliseconds:-${childernsDay.getMilliseconds()}`)
  let milliToDate= new Date(1254788585555)
  console.log(`days after 1970:-${milliToDate}`)
  console.log(`milliseconds of 2024-7-19 from 1970 jan 1:-${childernsDay.getTime()}`)
  console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
  return (
    <div>
      <h1>DATE_CLASS</h1>
      <h2>finding ending date:-</h2>
      <div>
        <form>
            <label>Date</label>
            <input type="datetime-local" onChange={(eo)=>{
                let selectDate= new Date (eo.target.value)
                console.log(selectDate)
                let startdate=selectDate.getDate()
                console.log(` starting date&month of course:-${startdate} ${ monthsOfYear[selectDate.getMonth()] }`)
                let endingDateOfCourse= new Date (selectDate.getTime()+(120*24*60*60*1000))
                console.log(`ending date&month of course:-${endingDateOfCourse}`)
            }}></input>
        </form>
      </div>
    </div>
  );
}

export default DateClass;
