/*------Constants------*/



/*------Variables (state)------*/
let totalPoints = 200

let reel1 = 0
let reel2 = 5
let reel3 = 10


// Variables might include (board/turn/winner)

/*------Cached Element References------*/

// You might choose to put your game status here

/*------Event Listeners------*/

// This is where you should put the event listener
// for a mouse-click

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

totalPoints += getPoints() 
console.log('My total points: ' + getPoints())

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
