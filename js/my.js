let year= parseInt(prompt('enter anh year'));
if (year%4==0){
    if (year%100==0 ){
        if (year%400==0){
            alert(year  + " this is leap year" );
        }else {
            alert(year  + " this is not leap year");
        }
    }else {
        alert(year  + " this is a leap year");
    }
}else {
    alert(year  + " this is not a leap")
}