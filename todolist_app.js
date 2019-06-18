//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
// date.js 모듈 임포트 -> 직접 만든것이기 떄문에 경로를 지정해줘야한다.
const date = require(__dirname + "/date.js");
// date() 를 함으로써 date.js 에서 추출된 함수를 돌린다.
// console.log(date());

const app = express();

// var 키워드를 사용하면 if_else 문이나 for/while 반복문 안에서 사용되어도 전역변수로 접근가능하다.
// 그래서 let 이나, const 로 선언하는것이 훨씬 안전하다.

let items = ["장보기", "요리하기", "밥먹기"];
let workItems = [];

app.set("view engine", "ejs");
// 바디파서 사용
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static("public"));

// app.use(express.static("public"));
// app.use("/public/css",express.static("css"));

/*
	Root Route
*/

app.get("/", function(req, res){
	// res.send("TodoList");

	// var a = 3+5;
	// res.send(a);
	// 한글깨짐 방지
	// res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

	// res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});

	// TODO: 현재 날짜 가져오기
 	// 참조: https://nodejs.org/dist/latest-v12.x/docs/api/modules.html#modules_modules

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

// date() 를 함으로써 date.js 에서 추출된 함수를 돌린다.
	let day = date.getDate();

	// ejs 다큐 참조
		// https://github.com/mde/ejs/wiki/Using-EJS-with-Express
		// 첫번째 매개변수: views 폴더 안에 있는 .ejs 파일 이름, ejs 에 넘기는 매개변수 <%= kindOfDay %>
		res.render("list", {listTitle: day, newListItems: items});

	// res.send();


});


app.post("/",function(req, res){

	// name: "list"
	console.log(req.body.list);

	// name="newItem" 을 가져온다.
	let item = req.body.newItem;

	// name="Work" 이면
	if(req.body.list === "작업"){
		// work list 배열에 새항목 추가
		workItems.push(item);
		// work route 로 새로고침!
		res.redirect("/work");
	} else {
		// 아이템 배열에 입력된 아이템을 넣는다.
		items.push(item);

		// console.log(userInput);
		// 첫번째 매개변수: 값을 보낼 ejs 파일, 두번째 매개변수: 보낼 키, 밸류 <%= newListItem %>
		// res.render("list", {newListItem: userInput});
		// 새로고침
		res.redirect("/");
	}
});

/*
	Work Route
*/
app.get("/work", function(req, res){
	res.render("list", {listTitle: "작업 목록", newListItems: workItems});
});

app.post("/work", function(req, res){
	let item = req.body.newItem;
	// 할일 배열에 추가
	workItems.push(item);
	res.redirect("/work");
});

/*
	About Route
*/
app.get("/about", function(req, res){
	// render.ejs 파일을 랜더링한다. -> 즉 해당 파일을 연다. 보여준다.
	res.render("about");
});




app.listen(3000, function(){
	console.log("todoList server just started on port 3000");
});
