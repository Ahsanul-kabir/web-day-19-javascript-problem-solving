/* Grneral way ::::::

const inputYear = 1700;

if (((inputYear % 4 == 0) && (inputYear % 100 != 0) || (inputYear % 400 == 0))) {
    console.log(inputYear + " is leap year");
} else {
    console.log(inputYear + " is not leap year");
} */


function checkLeapYear(inputYear) {
    if (inputYear % 4 == 0) {
        if (inputYear % 100 != 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

const checkYear = 1700;
var result = checkLeapYear(checkYear);

if (result == true) {
    console.log(checkYear + " is leap year");
} else {
    console.log(checkYear + " is not leap year");
}