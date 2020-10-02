/*****JavaScript-Clock*****/
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand'); 

function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    // console.log(seconds);
    // const secondsDegrees = ((seconds / 60) * 360) + 90;
    const secondsDegrees = (seconds*6) + 90;
    // console.log(secondsDegrees);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    // console.log(mins)
    // const minsDegrees = ((mins / 60) * 360) + 90;
    const minsDegrees = (mins * 6) + 90;
    // console.log(minsDegrees);
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    console.log(hour)
    // const hourDegrees = ((hour / 12) * 360) + 90;
    const hourDegrees = (hour * 30) + 90;
    console.log(hourDegrees)
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setDate, 1000);
