let button=document.querySelector(".btn");
let error_day=document.querySelector(".day_error");
let error_month=document.querySelector(".month_error");
let error_year=document.querySelector(".year_error");
let input_day=document.querySelector(".input_day");
let input_month=document.querySelector(".input_month");
let input_year=document.querySelector(".input_year");

let label_day=document.querySelector(".dayLabel");
let label_month=document.querySelector(".monthLabel");
let label_year=document.querySelector(".yearLabel");

let evenmonth=[4,6,9,11];
let oddmonth=[1,3,5,7,8,10,12];

let output_day=document.querySelector(".sdays");
let output_month=document.querySelector(".smonths");
let output_year=document.querySelector(".syears");

let currentDate=new Date();

document.addEventListener("DOMContentLoaded",()=>{
	button.addEventListener("click",()=>{
		// remove_red_tag(error_day,error_month,error_year);
		// if(error_day.classList.contains("hide")||error_month.classList.contains("hide")||error_year.classList.contains("hide"))
		if(!input_day.value||!input_month.value||!input_year.value){
			if(!input_day.value){
				error_day.classList.toggle("hide");
				addErrorStyles(error_day,input_day,label_day);
				error_day.textContent="This field is required";
			}
			if(!input_month.value){
				error_month.classList.toggle("hide");
				addErrorStyles(error_month,input_month,label_month);
				error_month.textContent="This field is required";
			}
			if(!input_year.value){
				error_year.classList.toggle("hide");
				addErrorStyles(error_year,input_year,label_year);
				error_year.textContent="This field is required";
			}
		}
		if(input_day.value>31&&error_day.classList.contains("hide")){
			error_day.classList.toggle("hide");
			addErrorStyles(error_day,input_day,label_day);
			error_day.textContent="Must be a valid Date";
		}
		if(input_month.value>12&&error_month.classList.contains("hide")){
			error_month.classList.toggle("hide");
			addErrorStyles(error_month,input_month,label_month);
			error_month.textContent="Must be a valid Month";
		}
		if(input_year.value>parseInt(currentDate.toString().split(" ")[3])&&error_year.classList.contains("hide")){
			error_year.classList.toggle("hide");
			addErrorStyles(error_year,input_year,label_year);
			error_year.textContent="Must be in the past";
		}
		if(input_year.value<1700&&error_year.classList.contains("hide")){
			error_year.classList.toggle("hide");
			addErrorStyles(error_year,input_year,label_year);
			error_year.textContent="Must be a valid year";
		}
		let checkeven=evenmonth.includes(parseInt(input_month.value));
		let checkodd=oddmonth.includes(parseInt(input_month.value));
		if(checkeven?input_day.value=="31":""&&(error_day.classList.contains("hide")||error_month.contains("hide")||error_year.contains("hide"))){
			error_day.classList.toggle("hide");
			addErrorStyles(error_day,input_day,label_day);
			addErrorStyles(error_day,input_month,label_month);
			addErrorStyles(error_day,input_year,label_year);
			error_day.textContent="Must be a valid date";
		}
		if(checkodd?input_day.value=="30":""&&(error_day.classList.contains("hide")||error_month.contains("hide")||error_year.contains("hide"))){
			error_day.classList.toggle("hide");
			addErrorStyles(error_day,input_day,label_day);
			addErrorStyles(error_day,input_month,label_month);
			addErrorStyles(error_day,input_year,label_year);
			error_day.textContent="Must be a valid date";	
		}

		if(!input_day.classList.contains("error_border")||!input_month.classList.contains("error_border")||!input_year.classList.contains("error_border"))	
		calculateAge(input_day.value,input_month.value,input_year.value);
	}

	);
	

	input=document.querySelector(".input");
	input.addEventListener("click",()=>{
		remove_red_tag(error_day,error_month,error_year);
		removeborderstyle(input_day,input_month,input_year);
		removeerrorlabel(label_day,label_month,label_year);
	});

});

function addErrorStyles(msg,border,label){
	msg.classList.add("error");
	border.classList.add("error_border");
	label.classList.add("error");
}

function remove_red_tag(day,month,year){
	if(!day.classList.contains("hide"))
		day.classList.toggle("hide");
	if(!month.classList.contains("hide"))
		month.classList.toggle("hide");
	if(!year.classList.contains("hide"))
		year.classList.toggle("hide");
}

function removeborderstyle(input_day,input_month,input_year){
	if(input_day.classList.contains("error_border"))
		input_day.classList.toggle("error_border");
	if(input_month.classList.contains("error_border"))
		input_month.classList.toggle("error_border");
	if(input_year.classList.contains("error_border"))
		input_year.classList.toggle("error_border");	
}
		
function removeerrorlabel(label_day,label_month,label_year){
	if(label_day.classList.contains("error"))
		label_day.classList.toggle("error");
	if(label_month.classList.contains("error"))
		label_month.classList.toggle("error");
	if(label_year.classList.contains("error"))
		label_year.classList.toggle("error");
}

function calculateAge(day,month,year){
	let outputdate="";
	let outputmonth="";
	let outputyear="";
	let currDate=currentDate.getDate();
	let currMonth=currentDate.getMonth();
	let currYear=currentDate.getFullYear();

	if(currYear>parseInt(year)||(parseInt(month)==currMonth&&parseInt(day)>=currDate)){
		outputyear=currYear-parseInt(year);
	}
	else
		outputyear=currYear-parseInt(year)-1;

	if(currMonth>=parseInt(month)){
		outputmonth=currMonth-parseInt(month);
	}
	else if (parseInt(month)>currMonth) {
		outputmonth=currMonth-parseInt(month)-1;		
	}
	outputmonth=outputmonth<0?outputmonth+12:outputmonth;
	if(currDate>=parseInt(day)){
		outputdate=currDate-parseInt(day);
	}
	else{
		date=new Date(parseInt(year),parseInt(month),0).getDate();
		outputdate=currDate-parseInt(day)+date;
	}
	output_day.textContent=outputdate;
	output_month.textContent=outputmonth;
	output_year.textContent=outputyear;
	
}
