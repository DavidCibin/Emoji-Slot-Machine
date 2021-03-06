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
console.log(Object.keys[2]);
/*------Variables (state)------*/
// Variables might include (board/turn/winner)
let status = document.getElementById("status")
let totalPoints = 0



/*------Cached Element References------*/
// Cached Element References
const slots = document.querySelectorAll('.reels > div');
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
function spinClick(evt) {       //Function to spin the reels and a random number for each reel
    status.innerHTML = "SPINNING"
    console.log(evt.target.id)    
}

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


function init() {
    //Here is how the game will start
    // totalPoints set to 100 for new game
    totalPoints = 100
    // console.log('total points in ' ,totalPoints)
    status.innerHTML = "SPINNING"
}
console.log('total points out ' ,totalPoints)

function getPoints() {
    let points = 20
    if ((reel1 + reel2 + reel3) < 10) {
        points -= 5
    }
    else {
        points = (reel1 + reel2 + reel3)
    }
    console.log(getPoints())
}
console.log(getPoints());
// totalPoints += getPoints() 
// console.log('My total points: ' + getPoints())

// Some functions you might choose to use:

// Initialization function:
// Where you set your initial state, setting up 
// what the board will look like upon loading

// On-Click function:
// Set up what happens when one of the elements
// is clicked


// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so


// Render function:
// Displays the current points
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is
function render() {
    
}



 init();