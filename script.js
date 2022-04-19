const calendar = document.getElementById("calendar");
const hourHand = document.getElementById("hour_hand");
const minuteHand = document.getElementById("minute_hand");
const secondHand = document.getElementById("second_hand");

// Initialize calendar to on
let showDate = true;

// Makes the clock dynamic
function animate() {
  const date = new Date();

  // Getting 2 times at the same time rather than 1 makes the hands move smoother
  const day = date.getDate(); // Gets date
  const ampm = date.getHours() >= 12 ? "PM" : "AM"; // Displays AM or PM depending on hours
  const hour = date.getHours() + date.getMinutes() / 60; // Gets hours and minutes
  const minute = date.getMinutes() + date.getSeconds() / 60; // Gets minutes and seconds
  const second = date.getSeconds() + date.getMilliseconds() / 1000; // Gets seconds and milliseconds

  calendar.textContent = showDate ? day : ampm; // Show calendar or am/pm
  // Applys css to hands that rotates (360 degrees / time * current time)
  hourHand.setAttribute("transform", `rotate(${(360 / 12) * hour})`);
  minuteHand.setAttribute("transform", `rotate(${(360 / 60) * minute})`);
  secondHand.setAttribute("transform", `rotate(${(360 / 60) * second})`);

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

// Switch am/pm with calendar on click
calendar.addEventListener("click", () => {
  showDate = !showDate;
});
