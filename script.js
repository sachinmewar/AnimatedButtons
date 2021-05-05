
const digitalClock = () => {
   const date = new Date();
   let hour = date.getHours();
   let min = date.getMinutes();
   let sec = date.getSeconds();

   let period = "AM";
   
   if(hour > 12){
      hour = hour-12;
      period = "PM";
   }

   // Adding 0 in front of single digit Number
   hour = (hour < 10)? "0"+hour: hour;
   min = (min < 10)? "0"+min: min;
   sec = (sec < 10)? "0"+sec: sec;

   const time = hour + ":" + min + ":" + sec + " " + period;
   document.getElementById('digitalClock').innerHTML = time;

   setInterval(digitalClock, 1000);
}

digitalClock();