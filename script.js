/*Задание 1*/
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
/*Задание 2*/
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
/*Задание 3*/
