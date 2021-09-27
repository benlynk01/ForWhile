var element = document.body.querySelector("looper");
var condition = true;
var youHit = Math.floor(Math.random()*2+1);
var dragonHit = Math.floor(Math.random()*5+1);
var damage = 0;

while (condition){
    var question = Number (prompt("How many times is the dragon going to be hit?"));
    if (question > 5){
        youHit = 1;
    }
    if (youHit){
        var question = Number (prompt("How many times is the dragon going to be hit?"));
        element.innerHTML = youHit;
        damage += dragonHit;
        if (damage >= 10){
            element.innerHTML = "You killed the dragon!";
            condition = false;
        }
        else {
            youHit = Math.floor(Math.random()*2+1)
        }
    }
    else {
        element.innerHTML = "You have been killed!";
        condition = false;
    }
}


