var myDate = new Date();
var  hrs = myDate.getHours();
var msg = "";

if (hrs<12) msg = "Good Morning!";     
if (hrs >= 12 && hrs<17) msg = "Good Afternoon!";    
if (hrs >= 17 && hrs<=24) msg = "Good Evening!";      

document.write(msg);
