const daysel     = document.getElementById('days');
const hoursel    = document.getElementById('hours');
const minutesel  = document.getElementById('mins');
const secondsel  = document.getElementById('secs');

const newYear = "29 march 2024";

function coundown(){ 

        const birthdaydate = new Date(newYear);
        const currentdate = new Date();

        const totalSeconds = new Date(birthdaydate-currentdate) / 1000;

        const days = Math.floor(totalSeconds / 3600 / 24); 
        const hours  = Math.floor(totalSeconds / 3600) % 24;
        const mins = Math.floor(totalSeconds  / 60 ) % 60;
        const secs = Math.floor(totalSeconds % 60 );


        daysel.innerHTML = days;
        hoursel.innerHTML = formatTime(hours);
        minutesel.innerHTML = formatTime(mins);
        secondsel.innerHTML = formatTime(secs);

}

function formatTime(Time){
    return time < 10 ? `0${time}` : time;
}
coundown();
setInterval(coundown,1000);

