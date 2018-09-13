let generateddata = []

data = {
    date : new Date(),
    time : 4.6
}
let datedate = new Date(2018, 07, 01);
let timetime, nextDay, dateValue;
for(let i=0; i < 40; i++) {
    nextDay = new Date(+datedate);
    dateValue = nextDay.getDate() + 1;
    nextDay.setDate(dateValue);
    timetime = 4.6 + getRandomArbitrary(-2, 2);
    generateddata.push({
        date : nextDay,
        time : timetime
    });
}
console.log(generateddata);

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(getRandomArbitrary(-2, 2));