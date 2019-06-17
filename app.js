//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");


app.use("/",express.static("public"));

app.get("/", function(req, res){
	// res.send("TodoList");

	// var a = 3+5;
	// res.send(a);
	// 한글깨짐 방지 
	// res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

	// res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
	var today = new Date();
	var currentDay = today.getDay();
	var day = "";

	switch (currentDay){
		case 0:
			day = "Sunday";
		break;
		case 1:
			day = "Monday";
		break;
		case 2:
			day = "Tuesday";
		break;
		case 3:
			day = "Wendsday";
		break;
		case 4:
			day = "Thursday";
		break;
		case 5:
			day = "Friday";
		break;
		case 6:
			day = "Saturday";
		break;

		default:
		console.log("Error: current day is equal to: " + currentDay);
	}

	// if(currentDay === 6 || currentDay === 0){
	// 	day = "Weekend";
	// 	// res.write("<h1>이야 주말이다~!</h1>");
	// 	// res.sendFile(__dirname + "/weekend.html");

	// } else {
	// 	day = "Weekday";
	// 	// res.write("<p>평일이다..~</p>");
	// 	// res.write("<h1>일하러 가자~</h1>");
	// 	// 해당 파일 실행 
	// 	// res.sendFile(__dirname+"/weekday.html");

	// }
	// ejs 다큐 참조
		// https://github.com/mde/ejs/wiki/Using-EJS-with-Express
		// 첫번째 매개변수: views 폴더 안에 있는 .ejs 파일 이름, ejs 에 넘기는 매개변수 <%= kindOfDay %>
		res.render("list", {kindOfDay: day});

	// res.send();


});



app.listen(3000, function(){
	console.log("todoList server just started on port 3000");
});