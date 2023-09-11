console.log("----------- \nExercie 3 \n ---------");

let user = new Object();

user.name = "tomas";
user.age = "32";

console.log(user);

function addProperty(property) {
  property.sexe = "M";
  return user;
}

console.log(addProperty(user));

function deleteProperty(dProperty) {
  delete dProperty.sexe;
  return user;
}

console.log(deleteProperty(user));
