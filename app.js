let hourSection = document.querySelector('.hour');
let dateSection = document.querySelector('.date');

let display = function() {
    let today, days, dayName, num, month, months, year, hours, seconds, minutes, theZero;

    today = new Date();

    year = today.getFullYear();

    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    month = months[today.getMonth()];

    num = today.getDate();

    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    day = days[today.getDay()];

    theZero = function(minuteNumber) {
        if (minuteNumber < 10) {
            return minuteNumber = '0' + minuteNumber;
        } else {
            return minuteNumber;
        }
    }

    hours = theZero(today.getHours());
    minutes = theZero(today.getMinutes());
    seconds = theZero(today.getSeconds());

    hourSection.textContent = hours + ':' + minutes + ':' + seconds;
    dateSection.textContent = day + ' ' + num + ' ' + month + ' ' + year;

    setTimeout(display, 1000);
}

display();