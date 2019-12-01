let calculateAge = function(day, month, year) {
  // start your code here.
 today_date = new Date();
    today_year = today_date.getFullYear();
    today_month = today_date.getMonth();
    today_day = today_date.getDate();
    age = today_year - year;

    if ( today_month < (month - 1))
    {
        age--;
    }
    if (((month - 1) == today_month) && (today_day <day))
    {
        age--;
    }
    return age;
};
var DOB = new Date(prompt("Enter date of birth in YYYY-MM-DD"))
var day = DOB.getDate()
var month = DOB.getMonth()
var year = DOB.getFullYear()
calculateAge(day,month,year)
alert(age)

// this change will be committed