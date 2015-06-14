var friends = {};

friends.bill = {
  firstName: "Bill",
  lastName: "Gates",
  number: "(206) 555-5555",
  address: ['One Microsoft Way','Redmond','WA','98052']
};
friends.steve = {
  firstName: "Steve",
  lastName: "Jobs",
  number: "(408) 555-5555",
  address: ['1 Infinite Loop','Cupertino','CA','95014']
};

function list(name) {
    for (var key in name) {
        console.log(key);
        
    }
}

var search = function(name) {
    for (var key in friends) {
        //console.log(friends[key]);
        if (friends[key]["firstName"] === name) {
            console.log("Name found. Record Details: ");
            console.log(friends[key]);
            return friends[key];
        }
    }
};

//list(friends);
//search("Steve");