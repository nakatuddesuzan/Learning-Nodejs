alert("It is a Zombie Apocalypse. You are looting a store and suddenly a zombie bursts through the door!");
var weapon = window.prompt("You search around frantically for a weapon. What do you choose? An axe, a bow, a stone or an arrow?")
var randomNumber = Math.round(Math.random());

if(randomNumber===0){
    alert("You lose! The Zombie has bitten you")
}
else if(randomNumber===1){
    alert("You win. You have killed the zombie with" + " " + weapon)
}
