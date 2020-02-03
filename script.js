//Задание 1
function ageUser() {
  let age = prompt("Введите свой возраст", "21");
  age = parseInt(age);
  if (age >= 0 && age <= 12) {
    alert("Вы ребенок");
  } else if (age > 12 && age < 18) {
    alert("Вы подросток");
  } else if (age >= 18 && age < 60) {
    alert("Вы взрослый");
  } else if (age >= 60 && age < 120) {
    alert("Вы пенсионер");
  } else {
    alert("Введите реальное значение");
    ageUser();
  }
}
ageUser();
//Задание 2
let a = prompt("Введите число от 0 до 9", "3");
a = parseInt(a);
switch (a) {
  case 0:
    alert("Спецсимвол - )");
    break;
  case 1:
    alert("Спецсимвол - !");
    break;
  case 2:
    alert("Спецсимвол - @");
    break;
  case 3:
    alert("Спецсимвол - #");
    break;
  case 4:
    alert("Спецсимвол - $");
    break;
  case 5:
    alert("Спецсимвол - %");
    break;
  case 6:
    alert("Спецсимвол - ^");
    break;
  case 7:
    alert("Спецсимвол - &");
    break;
  case 8:
    alert("Спецсимвол - *");
    break;
  case 9:
    alert("Спецсимвол - (");
    break;
  default:
    alert("Нет таких значений");
}
//Задание 3
function getNumber() {
  let userNumber = prompt("Введите трехзначное число", "200");
  userNumber = parseInt(userNumber);
  if (userNumber < 100 || userNumber > 999) {
    alert("Вы ввели неправильное значение");
    getNumber();
  }
  let b = Math.floor(userNumber / 100); // количество сотен
  let c = userNumber % 100; // десятки и еденицы
  let d = Math.floor(c / 10); // количество десяток
  let e = c % 10; // количество единиц
  if (b == d && d == e) {
    alert("Все три цифры числа одинаковые");
  } else if (b == d || d == e || b == e) {
    alert("Две цифры числа одинаковые");
  } else {
    alert("Одинаковых цифр в числе нет");
  }
}
getNumber();
// Задание 4
let userYear = prompt("Введите год", "2005");
userYear = parseInt(userYear);
if (userYear % 400 === 0 || (userYear % 4 === 0 && userYear % 100 !== 0)) {
  alert("Год високосный");
} else {
  alert("Год не високосный");
}
// Задание 5
let num1;
let num2;
var num3;
var numUser = +prompt("Введите пятизначное число", "23032");
if (numUser > 9999 && numUser < 100000) {
  num1 = Math.floor(numUser / 10000);
  numUser = numUser % 10000;
  num2 = Math.floor(numUser / 1000);
  numUser = numUser % 1000;
  numUser = numUser % 100;
  num3 = Math.floor(numUser / 10);
  numUser = numUser % 10;

  if (num1 == numUser && num2 == num3) {
    alert("Это число палиндром");
  } else {
    alert("Это число не палиндром");
  }
} else {
  alert("Вы ввели не пятизначное");
}
// Задание 6
let buttonStart = document.getElementById("btn-start");
buttonStart.addEventListener("click", function() {
  let summa = document.getElementById("get-summa").value;
  summa = parseInt(summa);
  let currency = document.getElementsByName("currency");
  let usdInEur = 0.9;
  let usdInUah = 25.03;
  let usdInAzn = 1.7;
  let totalResult = 0;
  for (i = 0; i < currency.length; i++) {
    if (currency[i].checked == true && isNaN(summa)) {
      document.getElementById("res").innerHTML = "Введите количество денег";
      return;
    } else if (currency[i].checked == true && i == 0) {
      totalResult = summa * usdInEur;
      document.getElementById("res").innerHTML =
        "Вы получите " + Math.round(totalResult) + " EUR ";
      return;
    } else if (currency[i].checked == true && i == 1) {
      totalResult = summa * usdInUah;
      document.getElementById("res").innerHTML =
        "Вы получите " + Math.round(totalResult) + " UAH";
      return;
    } else if (currency[i].checked == true && i == 2) {
      totalResult = summa * usdInAzn;
      document.getElementById("res").innerHTML =
        "Вы получите " + Math.round(totalResult) + " AZN";
      return;
    }
  }
});

// Задание 7
let price = prompt("Введите сумму покупки", "550");
price = parseInt(price);
switch (true) {
  case price >= 200 && price < 300:
    price = price - price * 0.03;
    alert("Цена со скидкой " + price);
    break;
  case price >= 300 && price < 500:
    price = price - price * 0.05;
    alert("Цена со скидкой " + price);
    break;
  case price >= 500:
    price = price - price * 0.07;
    alert("Цена со скидкой " + price);
    break;
  default:
    alert("Без скидки " + price);
}
// Задание 8
let l = prompt("Введите длину окружности", "20");
l = parseInt(l);
let d = l / Math.PI;
let P = prompt("Введите периметр квадрата", "15");
P = parseInt(P);
let side = P / 4;
alert(
  d <= side
    ? "Окружность помещается в квадрат"
    : "Окружность не может поместится в квадрат"
);
// Задание 9
let question1 = document.getElementsByName("q1");
let sum = 0;
let buttonResult = document.getElementById("btn-result");
buttonResult.addEventListener("click", function myFunction() {
  for (i = 0; i < question1.length; i++) {
    if (question1[i].checked == true) {
      sum = sum + parseInt(question1[i].value);
    }
  }
  let question2 = document.getElementsByName("q2");
  for (i = 0; i < question2.length; i++) {
    if (question2[i].checked == true) {
      sum = sum + parseInt(question2[i].value);
    }
  }
  let question3 = document.getElementsByName("q3");
  for (i = 0; i < question3.length; i++) {
    if (question3[i].checked == true) {
      sum = sum + parseInt(question3[i].value);
    }
  }
  document.getElementById("result").innerHTML = "Вы набрали " + sum + " балов";
  if (sum === 2 || sum === 4) {
    document.getElementById("result").innerHTML = "Вы набрали " + sum + " бала";
  }
  buttonResult.removeEventListener("click", myFunction);
});

// Задание 10
function getUserDate() {
  let day = prompt("Введите число", "7");
  day = parseInt(day);
  let month = prompt("Введите месяц", "2");
  month = parseInt(month);
  month = --month;
  let year = prompt("Введите год", "2010");
  year = parseInt(year);
  let userDate = new Date(year, month, day);
  if (
    userDate.getDate() != day ||
    userDate.getMonth() != month ||
    userDate.getFullYear() != year
  ) {
    alert("Пожалуйста, введите правильную дату");
    return false;
  }
  userDate.setDate(userDate.getDate() + 1);
  alert("Следующая дата " + userDate);
}
getUserDate();
