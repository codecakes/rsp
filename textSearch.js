/*jshint multistr:true */


/*Search Text for Your Name*/

var text = "slkjf klsadjf kj fdsa kl sdf  sdk sd Someone sdlkj \
klsdj  fklj sd Someone kdsjf  Somedkls Some kldsj";

var myName = "Someone";

var hits = [];
var all = true;
        
for (var i = 0; i < text.length; i++) {
    //
    if (text[i] === "S") {
        for (var p = i; p < i+myName.length; p++) {
            if (text[p] !== myName[p-i]) {
                all = false;
            }
        }
        
        if (all === true) {
            for (var p = i; p < i+myName.length; p++) {
                hits.push(text[p]);
                }
            }
        //all = false
        }
    }

if (hits.length === 0) {
	console.log("Your name wasn't found!");
} else {
	console.log(hits);
}