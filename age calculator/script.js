
const calc = document.getElementById('calcBtn');

const input = document.getElementById('birthdate');

const year = document.getElementById('years');

const month = document.getElementById('months');

const day = document.getElementById('days');

const error = document.getElementById('error');

const result = document.querySelector('.result');

calc.addEventListener("click",()=>
{
    const currentDate=new Date();
    const cDate=currentDate.getDate();
    const cMonth=currentDate.getMonth()+1;
    const cYear=currentDate.getFullYear();

    const enteredDate=new Date(input.value)
    const eDate=enteredDate.getDate();
    const eMonth=enteredDate.getMonth();
    const eYear=enteredDate.getFullYear();
    if (
        eDate === cDate &&
        eMonth === cMonth &&
        eYear === cYear
    ) {
        error.style.display = 'block';
        error.innerHTML = 'Date should not be equal to the current date';
        result.style.display = 'none';
    }
    else if (
        eYear > cYear ||
        (eYear === cYear && eMonth > cMonth) ||
        (eYear === cYear && eMonth === cMonth && eDate > cDate)
    ) {
        error.style.display = 'block';
        error.textContent = 'Date should not be more than current date';
    }
else
{
    let diffYear=cYear-eYear;
    let diffMonth=cMonth-eMonth;
    let diffDate=cDate-eDate;

    if(diffMonth<0)
    {
        diffYear--;
        diffMonth+=12;
    }
    if (diffDate < 0) {
        diffMonth--;
        var prevMonthLastDay = new Date(cYear, cMonth - 1, 0).getDate();
        diffDate += prevMonthLastDay;
    }
    result.style.display = 'block'
        error.textContent = '';
        year.textContent = diffYear;
        month.textContent = diffMonth;
        day.textContent = diffDate;
    
}
const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
if (isLeapYear(cYear) && eMonth <= 2 && cMonth > 2) {
    diffDate--;
}
})