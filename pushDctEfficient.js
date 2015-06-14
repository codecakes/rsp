function Person (name, age) {
  this.name = name;
  this.age = age;
}

var family = [];

var people = {alice:40, bob:42, michelle:8, timmy:6};

var keys = Object.keys(people);
for (var i = 0; i < keys.length; i++) {
  family.push(new Person(keys[i], people[keys[i]]));
}

console.log(family);
console.log(keys);

document.write(JSON.stringify(family));