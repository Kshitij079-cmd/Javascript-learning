// setInterval(
// function updateClock() {
//     let now = new Date();

//     let hour = now.getHours() % 12;
//     let minute = now.getMinutes();
//     let second = now.getSeconds();

//     let hourHand = document.getElementById("hour");
//     let minuteHand = document.getElementById("minute");
//     let secondHand = document.getElementById("second");

//     let hourDeg = (hour * 30) + (0.5 * minute);
//     let minuteDeg = minute * 6 + (0.1 * second);
//     let secondDeg = second * 6;

//     hourHand.style.transform = `rotate(${hourDeg}deg)`;
//     minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
//     secondHand.style.transform = `rotate(${secondDeg}deg)`;
// },

// // Update the clock every second
//     updateClock, 1000); 

// // Initial update
// updateClock();
