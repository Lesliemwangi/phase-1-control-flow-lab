function scuberGreetingForFeet(ride) {
  // Write your code here!
  if (ride <= 400) {
    return "This one is on me!";
  } else if (ride > 400 && ride <= 2000) {
    return "That will be twenty bucks.";
  } else if (ride > 2000 && ride <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity(destination) {
  // Write your code here!
  return destination !== "NYC" ? "No go." : "Ok, sounds good.";
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  if (tip === "generous") {
    return "Thank you so much.";
  } else if (tip === "not as generous") {
    return "Thank you.";
  } else {
    return "Bye.";
  }
}
