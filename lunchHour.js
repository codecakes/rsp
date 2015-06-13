var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

lunch = lunch.toLocaleLowerCase();

switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    if (isNaN(lunch)) {
        console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
    }
    else {
        console.log("Lunch cannot be a number. You entered " + lunch);
    }
}