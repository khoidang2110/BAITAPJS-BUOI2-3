//Bai tap 1:
document.getElementById("salary").onclick = function () {
  //input:
  var earn = document.getElementById("earn").value;
  var workingDay = document.getElementById("workingDay").value;
  //output:
  var total = "";
  //process:
  total = " Tiền lương là: " + earn * workingDay + " vnd";
  document.getElementById("showSalary").innerHTML = total;
  // document.getElementById('showSalary').className='fa fa-hand-point-right ms-3';
};

//Bai tap 2:
document.getElementById("average").onclick = function () {
  //input:
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  var number3 = document.getElementById("number3").value;
  var number4 = document.getElementById("number4").value;
  var number5 = document.getElementById("number5").value;
  //output:
  var average = "";
  //process:
  var sum =
    parseInt(number1) +
    parseInt(number2) +
    parseInt(number3) +
    parseInt(number4) +
    parseInt(number5);
  average = "Trung bình cộng là: " + sum / 5;
  document.getElementById("showAverage").innerHTML = average;
};
//Bai tap 3:
document.getElementById("exchange").onclick = function () {
  //input:
  var moneyInput = document.getElementById("moneyInput").value;
  //process:
  var exchange = moneyInput * 23500;
  //output:

  document.getElementById("showExchange").innerHTML = "Số tiền đổi được: " +  new Intl.NumberFormat("vn-VN").format(exchange) + " vnd";

  
};
//Bai tap 4:
document.getElementById("calc").onclick = function () {
  //input:
  var heighInput = document.getElementById("heighInput").value;
  var widthInput = document.getElementById("widthInput").value;


  //process:
  var perimeter = (parseInt(heighInput) + parseInt(widthInput)) * 2;
  var area = heighInput * widthInput;
  //output:
  var showResult = "";
  showResult +=  "<p> chu vi là:  " + perimeter +"</p>";
  showResult += "<p> diện tích là: " + area +"</p>";
  document.getElementById("showResult").innerHTML = showResult;
};
//Bai tap 5:
document.getElementById("solution").onclick = function () {
  //Input:
  var numberInput = document.getElementById("numberInput").value*1;

  //process:
  var sum =numberInput % 10 + Math.floor(numberInput / 10);
  var twoNumber = "Tổng 2 ký số là: "+ sum  ;


  //output:
  document.getElementById("twoNumer").innerHTML = twoNumber;
};
