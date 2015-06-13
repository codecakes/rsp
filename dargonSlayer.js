
var randomFloor = function () {
    return Math.floor(Math.random() * 2);
};

var dragonDamage = function () {
    return Math.floor(Math.random()*5 + 1);
}

var slaying = true;

var weHit = randomFloor();

var damageThisRound = dragonDamage();

var totalDamage = 0;

while (slaying) {
    //slaying = false;
    console.log(weHit);
    if (weHit === 1) {
        console.log("Te te te ten");
        totalDamage += damageThisRound;
        if (totalDamage >= 4) {
            console.log("YOU SLEW THE FLEUWW");
            slaying = false;
        }
        else {
            weHit = randomFloor();
        }
    }
    else {
        console.log("The dragon burnt your ARSE!!");
        slaying = false
    }
}