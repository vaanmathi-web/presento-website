function showDay(){
	var dateObj=new Date();
	var Days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var Months=["January","February","March","April","May","June","July","August","September","October","November","December"];
	var day=dateObj.getDay();
	var month=dateObj.getMonth();
	var date=dateObj.getDate();
	var yr=dateObj.getFullYear();
	console.log(yr);
	
	var showDay=Days[day]+"-" + date +"," + " " + Months[month] + " " +yr;
	document.getElementById("date").innerHTML=showDay;
}
showDay();

function showTime(){
	var date=new Date();
	var hr=date.getHours();
	var mins=date.getMinutes();
	var sec=date.getSeconds();
	
	if(hr==0){
		hr=12;
	}
	else if(hr>12){
		hr=hr-12;
	}
	else if(hr<10){
		hr="0"+hr;
	}
	else if(mins<10){
		mins="0"+mins;
	}
	else if(sec<10){
		sec="0"+sec;
	}
	
	var session1= document.getElementById("am").value;
	var session2=document.getElementById("pm").value;
	
	if(date.getHours()>=12){
		pm.checked="true";
	}
	else{
		am.checked="true";
	}
	var time=hr + "     "+"      "+ "     "+":" + "    "+"    "+ "    " + mins +"    "+"    "+ "    " + ":" +"    "+"    "+ "    " + sec;
	document.getElementById("clockDisplay").innerText=time;
	setInterval(showTime,1000);
}
showTime();
