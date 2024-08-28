function leapYears(year) {
    const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    if (isLeap) {
        console.log(year + " is a leap year."); 
    } else {
        console.log(year + " is not a leap year."); 
    }
}

leapYears(2024); 
leapYears(1900); 
leapYears(2000); 
leapYears(2100); 
leapYears(2023)
