/*------Constants------*/
const audioTest = new Audio('audio/jackpot.wav');
// const jackpot = new Audio('audio/jackpot.wav');
const winMatch = new Audio('audio/win.wav');

// const emojis = {
//     '😱': 0,     //😱
//     '😭': 0,     //😭
//     '😠': 0,     //😠 
//     '😃': 5,     //😃
//     '🤑': 10,    //🤑
//     '💎': 25,    //💎
//     '🎰': 50,    //🎰
// }

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
console.log(emojis.d+emojis.d)

/*------Variables (state)------*/
let totalPoints = 100;
let points = 0;
let reel1 = 50;
let reel2 = 50;
let reel3 = 50;
let match = null
let sound = true;

let game = false 



/*------Cached Element References------*/
// Cached Element References
const slot1 = document.getElementById('reel1');
const slot2 = document.getElementById('reel2');
const slot3 = document.getElementById('reel3');
let score = document.getElementById('points');
let status = document.getElementById('status')
let audio = document.getElementById('audio');
console.log(status)


// You might choose to put your game status here

/*------Event Listeners------*/
// This is where you should put the event listener
// for a mouse-click
document.getElementById('spinBtn').addEventListener('click', spinClick);
document.getElementById('audio').addEventListener('click', toggleAudio);
document.getElementById('spinBtn').addEventListener('click', init) //When the game is over
console.log('spin click ', spinClick)
console.log('spin click ', toggleAudio)



/*------Functions------*/

// On-Click function:
// generate random "numbers"
function spinClick() {       //Function to spin the reels and a random number for each reel
    return status.innerText = 'SPINNING';
  
//     if (points > 0) {
//     status.innerHTML = "SPINNING"
//     console.log(reel1)    
//     return reel1 = math.random(7) 
//     console.log(reel1)
//    }
// ((reel1 + reel2 + reel3) < 10 no match
// ((reel1 + reel2 + reel3) >= 10 && < 150 we have a match
// ((reel1 + reel2 + reel3) = 150 jackpot


}


function init() {   //Initialization function:
    //Only start new game when totalPoints = 0
    //Here is how the game will start
    // totalPoints set to 100 for new game
    totalPoints = 100
    points = 20
    render()
    slot1.src = emojis.c 
    slot2.src = emojis.d
    slot3.src = emojis.f
}


// Function to check for matchs and handle points
function getPoints() {
   
    
}


function render() { // Render function:
    // Displays the current points
    // Game over = no points
    let points = 0;
    if (jackpot) {
        
        totalPoints += 150;
        status.innerText = "✰ ✰ ✰ ✰ ✰ ✰ JACKPOT ✰ ✰ ✰ ✰ ✰ ✰";
        points.innerText = "150"; //CAN I DISPLAY THIS IN THE SCORE FOR LIKE 1 SECOND?
        // jackpot.play();
        
    }
    else if (match) {
        points = (reel1 + reel2 + reel3);
        totalPoints += points
        status.innerText = "YOU WIN!"
        points.innerText = "points"; //CAN I DISPLAY THIS IN THE SCORE FOR LIKE 1 SECOND?
        // win.play();
        
    }
    else if {
        ((reel1 + reel2 + reel3) < 10) 
        totalPoints -= 5;
        if(totalPoints > 0) {
            status.innerText = "SPIN AGAIN";
        } else {
            status.innerText = "😭 GAME OVER 😭";
        }
        
        points.innerText = "-5"; //CAN I DISPLAY THIS IN THE SCORE FOR LIKE 1 SECOND?
        //lose.play();    PLAY LOSE AUDIO?? PROBABLY
    }
    else


    getPoints();
    // Here we will handle the points, messages for win, lose, jackpot

}



// Function for audio effects. Toggle on/off
function toggleAudio(){  //togle icon works, play/plause needs adjust to all sounds
    if (!sound){
        sound = true;
        audioTest.play();
        audio.innerHTML = '<img src="images/audioOn.png">';
    } 
    else{
        sound = false;
        audioTest.pause();
        audio.innerHTML = '<img src="images/audioOff.png">';
    }
    
}


 init();