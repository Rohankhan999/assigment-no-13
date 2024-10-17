// task 01//
// var date = new Date;
// console.log(date);

// console.log(date.getFullYear()); 
// console.log(date.getHours()); 
// console.log(date.getMinutes()); 
// console.log(date.getSeconds()); 
// console.log(date.getMilliseconds());
// console.log(date.getTime());


// var Day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
// console.log(Day[date.getDay()]);


// var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// console.log(months[date.getMonth()]);


// var dates = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
// console.log(dates[date.getDate()]);

// task 02

// var dateOfBirth = new Date();
// dateOfBirth.setFullYear(2007); 
// var year = dateOfBirth.getFullYear(); 
// console.log(year);


// task 03

// var dateOfBirth = new Date();
// dateOfBirth.setFullYear(2007,7,4);
// console.log(dateOfBirth);

// PDF Assigment//

//  question no 01//

// var date = new Date;
// document.write(date)

//  question no 02 //

// var date = new Date;
// var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// alert("Current Month : "+ months[date.getMonth()])

//  question no 03 //

// var days = new Date;
// var Day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// alert("Current Day : "+ Day[days.getDay()])

//  question no 04 //

// var holyday = new Date;
// var Day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",]
// var currentDay = Day[holyday.getDay()];


// if (currentDay === "Sunday" || currentDay === "Saturday") {
//     alert("It's funday!");
// } else {
//     alert("Go on work!");
// }

//  question no 05 //


// var day = new Date();
// var currentDate = day.getDate(); // Get the current date of the month

// if (currentDate >= 1 && currentDate <= 15) {
//     alert("First 15 days of the month!");
// } else {
//     alert("Last 15 days of the month!");
// }

//  question no 06 //

// let currentDate = new Date(); // Get the current date and time
// let minutesSinceEpoch = Math.floor(currentDate.getTime() / 60000); // Convert milliseconds to minutes

// document.write(minutesSinceEpoch);

//  question no 07 //

// var timeZone = new Date()
// var currentHours = timeZone.getHours();

// if(currentHours < 12){
//     alert("It's AM")}
//     else{
//         alert("It's PM")
//     }


