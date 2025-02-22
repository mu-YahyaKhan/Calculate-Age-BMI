function calculateAge() {
  let yearOfBirth = Number(prompt("Year of Birth :"));
  let currentYear = Number(prompt("Current Year :"));
  let age = currentYear - yearOfBirth;
  alert("Your Age is " + age);
  if (age % 2 == 0) {
    alert("Your Age is Even!");
  } else {
    alert("Your Age is Odd!");
  }
  var weight = Number(prompt("Enter Your Weight in KG :"));
  var height = Number(prompt("Enter Your Height in Meters :"));
  var BMI = weight / (height * height);
  alert("Your BMI : " + BMI);
}
