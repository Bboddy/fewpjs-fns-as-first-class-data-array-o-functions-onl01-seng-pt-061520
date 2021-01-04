let wakeDog = function(dogName, dogBreed) {
  console.log(`Wake ${dogName} the ${dogBreed}`);
}

let leashDog = function(dogName, dogBreed) {
  console.log(`Leash ${dogName} the ${dogBreed}`);
}

let walkToPark = function(dogName, dogBreed) {
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
}

let throwFrisbee = function(dogName, dogBreed) {
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
}

let walkHome = function(dogName, dogBreed) {
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
}

let unleashDog = function(dogName, dogBreed) {
  console.log(`Unleash ${dogName} the ${dogBreed}`);
}

let exerciseDog = function(dogName, dogBreed) {
  wakeDog(dogName, dogBreed);
  leashDog(dogName, dogBreed);
  walkToPark(dogName, dogBreed);
  throwFrisbee(dogName, dogBreed);
  walkHome(dogName, dogBreed);
  unleashDog(dogName, dogBreed);
}