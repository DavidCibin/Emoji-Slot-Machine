/*------Constants------*/



/*------Variables (state)------*/
// Variables might include (board/turn/winner)
let totalPoints = 200

let reel1 = 0
let reel2 = 5
let reel3 = 10




/*------Cached Element References------*/
// Cached Element References
let bet1 = document.getElementById('bet1')
let bet2 = document.getElementById('bet2')
let bet3 = document.getElementById('bet3)


// You might choose to put your game status here

/*------Event Listeners------*/
// This is where you should put the event listener
// for a mouse-click
spinBtn.addEventListener('click', spinClick)
bet1.addEventListener('click', bet1Click)
bet2.addEventListener('click', bet2Click)
bet3.addEventListener('click', bet3Click)



/*------Functions------*/

function getPoints() {
    let points = 0
    if ((reel1 + reel2 + reel3) < 10) {
        points -= 5
    }
    else {
        points = (reel1 + reel2 + reel3)
    }
    console.log(points)
}

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
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is
