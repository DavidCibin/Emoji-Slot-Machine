/*------Constants------*/
const emojis = {
    'a': 0,     //😱
    'b': 0,     //😭
    'c': 0,     //😠 
    'd': 5,     //😃
    'e': 10,    //🤑
    'f': 25,    //💎
    'g': 50,    //🎰
}
console.log(emojis)
console.log(Object.keys[emojis[1]]);
/*------Variables (state)------*/
// Variables might include (board/turn/winner)
let totalPoints = 0
let reel1 = 6
let game = false 



/*------Cached Element References------*/
// Cached Element References
const slots = document.querySelectorAll('.reels > div');
let status = document.getElementById("status")
console.log(slots)
// let bet1 = document.getElementById('bet1')
// let bet2 = document.getElementById('bet2')
// let bet3 = document.getElementById('bet3')


// You might choose to put your game status here

/*------Event Listeners------*/
// This is where you should put the event listener
// for a mouse-click
document.getElementById('spinBtn').addEventListener('click', spinClick);
document.getElementById('bet1').addEventListener('click', bet1Click);
document.getElementById('bet2').addEventListener('click', bet2Click);
document.getElementById('bet3').addEventListener('click', bet3Click);
console.log(bet1Click)


/*------Functions------*/
function drawSlot1() {
	var slot1Value = document.getElementById('slotImage1');
	var r1 = Math.floor(Math.random() * 9);
	slot1Value.src = "graphics/" + fruitArray[r1] + ".jpg";
    console.log(r1)
}
// console.log(r1)


function spinClick(evt) {       //Function to spin the reels and a random number for each reel
   if (points > 0) {
    status.innerHTML = "SPINNING"
    console.log(reel1)    
    return reel1 = math.random(7) 
    console.log(reel1)
   }
}
console.log(reel1)

function bet1Click(evt) {       
    //Function to multiply the bet by 1x(original bet)
    //Function to multiply the bet by 3x(original bet)
    //if winner totalPoints = + (bet * 1)
    //else totalPoints = - (bet * 1)
}

function bet2Click(evt) {       
    //Function to multiply the bet by 3x
    //if winner totalPoints = + (bet * 2)
    //else totalPoints = - (bet * 2)
}

function bet3Click(evt) {       
    //Function to multiply the bet by 3x
    //if winner totalPoints = + (bet * 3)
    //else totalPoints = - (bet * 3)
}


function init() {   // Initialization function:
    
    //Here is how the game will start
    // totalPoints set to 100 for new game
    totalPoints = 100
    // console.log('total points in ' ,totalPoints)
    
}
console.log('total points out ' ,totalPoints)

function getPoints() {
    let points = 0
    if ((reel1 + reel2 + reel3) < 10) {
        points -= 5
        status.innerHTML = "No Match!"
        //PLAY LOSE AUDIO?? MAYBE NOT
    }
    else if ((reel1 + reel2 + reel3) == 150) {
        status.innerHTML = "JACKPOT!"
        //PLAY JACKPOT AUDIO
    }
    else {
        points = (reel1 + reel2 + reel3)
        status.innerHTML = "You Win!"
        //PLAY WIN AUDIO
    }
    // console.log(getPoints())
}
console.log(getPoints()); //Undefined until I get the points to >> reels

// totalPoints += getPoints() 
// console.log('My total points: ' + getPoints())

// Some functions you might choose to use:


// On-Click function:
// Set up what happens when one of the elements
// is clicked


// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so




function render() { // Render function:
    // Displays the current points
    // Game over = no points
    

}


 init();