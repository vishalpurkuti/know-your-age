var t;
var m;
const reset = () => {
    clearInterval(t);
    clearInterval(m);
    for (let i = 0; i < 7; i++) {
        document.querySelectorAll('.answer')[i].innerHTML = "";

    }

}


const ageInDays = () => {
    let a = document.getElementById('datepicker').value;
    let odate = new Date(a);
    d = new Date();
    let cdate = new Date(d);
    let daysDiff = Math.trunc((cdate.getTime() - odate.getTime()) / (1000 * 60 * 60 * 24));
    let answer = `You are <span> ${daysDiff} </span> days old`;
    (daysDiff > 0) ? (document.getElementById('ageAnswer').innerHTML = answer) : (document.getElementById('ageAnswer').innerHTML = "You are not born yet!!");
    console.log(document.getElementById('timepicker').value);
    console.log(document.getElementById('datepicker').value);


}

const ageInYear = () => {
    let a = document.getElementById('datepicker').value
    let oyear = new Date(a).getFullYear();
    d = new Date();
    let cyear = d.getFullYear();
    let yearDiff = cyear - oyear;
    let answer = `You are <span> ${yearDiff} </span> years old`;
    (yearDiff >= 0 && yearDiff !== 2020) ? (document.getElementById('yearAnswer').innerHTML = answer) : (document.getElementById('yearAnswer').innerHTML = "You are not born yet!!");


}

const ageInMonth = () => {
    let a = document.getElementById('datepicker').value
    let odate = new Date(a);
    let cdate = new Date();
    let monthDiff = (cdate.getFullYear() * 12 + cdate.getMonth()) - (odate.getFullYear() * 12 + odate.getMonth());
    let answer = `You are <span> ${monthDiff} </span> months old`;
    (monthDiff >= 0) ? (document.getElementById('monthAnswer').innerHTML = answer) : (document.getElementById('monthAnswer').innerHTML = "You are not born yet!!");

}
const ageInWeek = () => {
    let a = document.getElementById('datepicker').value
    let odate = new Date(a);
    let cdate = new Date();
    let weekDiff = Math.round((cdate.getTime() - odate.getTime()) / (1000 * 60 * 60 * 24 * 7));
    let answer = `You are <span> ${weekDiff} </span> Weeks old`;
    (weekDiff >= 0) ? (document.getElementById('weekAnswer').innerHTML = answer) : (document.getElementById('weekAnswer').innerHTML = "You are not born yet!!");

}


const ageInHour = () => {
    let a = document.getElementById('datepicker').value
    let odate = new Date(a);
    let cdate = new Date();
    let hourDiff = Math.round((cdate.getTime() - odate.getTime()) / (1000 * 60 * 60));
    let answer = `You are <span> ${hourDiff} </span> Hours old`;
    (hourDiff >= 0) ? (document.getElementById('hourAnswer').innerHTML = answer) : (document.getElementById('hourAnswer').innerHTML = "You are not born yet!!");

}


const ageInMinute = () => {
    let a = document.getElementById('datepicker').value
    let odate = new Date(a);
    let cdate = new Date();
    let x = document.getElementById('datepicker').value;
    let minuteDiff = Math.round((cdate.getTime() - odate.getTime()) / (1000 * 60));
    let answer = `You are <span> ${minuteDiff} </span> Minutes old`;
    (minuteDiff >= 0) ? (document.getElementById('minuteAnswer').innerHTML = answer) : (document.getElementById('minuteAnswer').innerHTML = "You are not born yet!!");


}
function ageInSecond() {
    let a = document.getElementById('datepicker').value
    let odate = new Date(a);
    let cdate = new Date();
    let x = document.getElementById('datepicker').value; let secondDiff = Math.round((cdate.getTime() - odate.getTime()) / (1000));
    let answer = `You are <span> ${secondDiff} </span> Seconds old`;
    (secondDiff >= 0) ? (document.getElementById('secondAnswer').innerHTML = answer) : (document.getElementById('secondAnswer').innerHTML = "You are not born yet!!");

}
var second = () => {

    t = setInterval(ageInSecond, 1000);

}
var minute = () => {
    m = setInterval(ageInMinute, 1000);
}



