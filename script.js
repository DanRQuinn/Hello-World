function greetuser(){

let dogs = prompt("Do you like Dogs? Yes or No? (Case Sensitive)");
}

if (dogs == 'Yes'){
    document.write("This is the page for you!!!");
  } else if (dogs == 'No'){
    document.write("Too bad here's Tux!");
  }  else {
    document.write("Tuxedos Page");
  }

  
let usersName = prompt ("What is your name?");
if (usersName ==""){
  usersName = prompt ("Try again please!")
}

document.write(" " + usersName + " is my favorite name!");

console.log(usersName);
}

greetuser();

let TuxAge = prompt("Guess Tuxs Age");

while (TuxAge != 1){
  TuxAge = prompt (" Wrong! guess again! Guess Tuxs Age");
}

let TuxPics = prompt("How many Tuxes do you want to see? 10 is too many...");

while (TuxPics >= 10 || TuxPics <= 0){
  TuxPics = prompt ("I can't handle that many Tuxedos! Try again!");
}

for (let i = 0; i < TuxPics; i++){
 document.write ("<img src=\"Tux-makes-mess.jpg\" class=\"Imgs\" alt=\"Baby Tux made a mess\"/>")
}


  // function addTwoNumbers(number1, number2){
  //   console. log(number1,number2);
  //   return number1 + number2;
  // }

  // let sum = addTwoNumbers (1, 4);
  // addTwoNumbers(19, 16);
  // addTwoNumbers("hello","world");
  // addTwoNumbers("19", 19);
  // addTwoNumbers(19, "hello");
