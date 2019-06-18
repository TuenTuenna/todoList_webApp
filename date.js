//jshint esversion:6

// 참조: https://nodejs.org/dist/latest-v12.x/docs/api/modules.html#modules_modules
// console.log(module);
// export 를 함으로써 해당 파일을 사용하는 곳에서 확인할수 있다.
// 아래에 일치하는 함수를 추출한다.
 // module.exports = getDate;
 // 만약 여러개의 함수를 사용할수 있도록 하려면?
 // module.exports 는 자바스크립트 객체 이기 때문에 아래와 같이 활용가능하다.
 module.exports.getDate = getDate;
 module.exports.getDay = getDay;


// 날짜를 가져오는 함수
function getDate(){
  // 현재 시간을 가져온다.
  let today = new Date();
  // 데이트 포맷 설정
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  // 해당 데이트 포멧으로 만든다.
  // 참조: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
  let day = today.toLocaleDateString("ko-KR", options);

  return day;
}

// 요일을 가져오는 함수
function getDay(){
  // 현재 시간을 가져온다.
  let today = new Date();
  // 데이트 포맷 설정
  let options = {
    weekday: "long"
  };

  // 해당 데이트 포멧으로 만든다.
  // 참조: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
  let day = today.toLocaleDateString("ko-KR", options);

  return day;
}

console.log(module.exports);
