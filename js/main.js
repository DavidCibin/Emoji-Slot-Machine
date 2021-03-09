/*------Constants------*/
const spin = new Audio('audio/spin.mp3');
const jackpot = new Audio('audio/jackpot.wav');
const win = new Audio('audio/win.wav');
const lose = new Audio('audio/lose.wav');

const scoreCard = [
    { emojiValue: 0, emoji: '😱', score: 0 },
    { emojiValue: 1, emoji: '😭', score: 0 },
    { emojiValue: 2, emoji: '😠', score: 0 },
    { emojiValue: 3, emoji: '😃', score: 5 },
    { emojiValue: 4, emoji: '🤑', score: 10 },
    { emojiValue: 5, emoji: '💎', score: 25 },
    { emojiValue: 6, emoji: '🎰', score: 50 },
]
const start = '🎰'



/*------Variables (state)------*/
let totalPoints = 0;
let results = null;
let reel1 = null;
let reel2 = null;
let reel3 = null;
let match = null
let sound = true;


/*------Cached Element References------*/
const slot1 = document.getElementById('reel1');
const slot2 = document.getElementById('reel2');
const slot3 = document.getElementById('reel3');
let score = document.getElementById('points');
let status = document.getElementById('status')
let audio = document.getElementById('audio');
let newGame = document.getElementById('spinBtn');
let x = document.getElementById("myDIV");


/*------Event Listeners------*/
document.getElementById('spinBtn').addEventListener('click', spinClick);
document.getElementById('audio').addEventListener('click', toggleAudio);
document.getElementById('resetBtn').addEventListener('click', init) //When the game is over



let payout = document.getElementById('info').addEventListener('click', myFunction);


/*------Functions------*/
//Function to spin the reels and a random number for each reel
function spinClick() {
    // document.getElementById('spinBtn').style.

    if (totalPoints === 0) {
        init()
    }
    else {

    totalPoints -= 5
    score.innerText = -5
    setTimeout(() => {
        score.innerText = totalPoints
        console.log(totalPoints)
    }, 2000);
    pointerEvents = 'none' //Block SPIN button for been pressed during spinning
    let currentTime = 0;
    let interval = 250;     //Add interval to get a random number every 0.25 second
    let maxTime = 4500;      //For a total time of 4.5 seconds
    // console.log('START')
    let slotInterval = setInterval(function () {
        // console.log('Interval ==> ', currentTime)
        if (currentTime < maxTime) {

            currentTime += interval
            reel1 = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
            reel2 = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
            reel3 = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
            console.log('reelnums', reel1, reel2, reel3); //debug random numbers each time functions "runs"

            //Assign the emoji to the random number from reel1 using the function findEmoji
            let reel1EmojiObject = findEmoji(reel1);
            slot1.innerText = reel1EmojiObject[0].emoji
            // points += reel1EmojiObject[0].score // will not be used here

            //Assign the emoji to the random number from reel2 using the function findEmoji
            let reel2EmojiObject = findEmoji(reel2);
            slot2.innerText = reel2EmojiObject[0].emoji
            // points += reel2EmojiObject[0].score // will not be used here

            //Assign the emoji to the random number from reel3 using the function findEmoji
            let reel3EmojiObject = findEmoji(reel3);
            slot3.innerText = reel3EmojiObject[0].emoji
            // points += reel3EmojiObject[0].score // will not be used here

            status.innerText = '✰ ✰ ✰ ✰ ✰ SPINNING ✰ ✰ ✰ ✰ ✰';
            if (sound) {
                spin.play();
            }

        } else {
            // console.log('END')
            document.getElementById('spinBtn').style.pointerEvents = 'auto' //Enable SPIN button back after spinning
            clearInterval(slotInterval)
            render()
        }
    }, interval)
}
}

function findEmoji(foundNum) {                              //foundNum is the parameter that correspond to each random reel
    if (foundNum === null) {
        return;
    }
    let emojiFound = scoreCard.filter(function (obj) {      //returns(creates) an array from the scoreBoard using the filter method
        // console.log('find emoji??', obj.emojiValue)         //log each emoji value from the scoreBoard
        return obj.emojiValue === foundNum
    })
    // console.log('emoji found', emojiFound)                  //log each emoji value from the scoreBoard
    return emojiFound;
}

//Initialization function:
function init() {
    //Only start new game when totalPoints = 0
    //Here is how the game will start
    // totalPoints set to 100 for new game
    totalPoints = 100
    slot1.innerText = scoreCard[6].emoji;
    slot2.innerText = scoreCard[6].emoji;
    slot3.innerText = scoreCard[6].emoji;
    score.innerText = totalPoints
    reel1 = null
    reel2 = null
    reel3 = null
    results = null
    status.innerText = `✰ ✰ ✰ ✰ ✰ LET'S PLAY ✰ ✰ ✰ ✰ ✰`;
    x.style.visibility = 'collapse';
    newGame.innerText = 'SPIN'
    getWinner();
    render();
    
}

// Function to check for matchs and handle points
function getWinner() {
    results = null;
    console.log(reel1, reel2, reel3, results)

    if (reel1 === reel2 && reel1 === reel3 && reel2 === reel3) {
        if (reel1, reel2, reel3 === 6) {
            results = 'jackpot';
        }
        else {
            if (reel1, reel2, reel3 === 3) {
                results = 'happy-line';
                console.log(results);
            }
            else if (reel1, reel2, reel3 === 4) {
                results = 'cash-line';
            }
            else if (reel1, reel2, reel3 === 5) {
                results = 'diamond-line';
                
            }
            else {
                return;
            }
        }
    }
    else if (reel1 === reel2 || reel1 === reel3 || reel2 === reel3) {
        if (reel1 === reel2) {
            if (reel1 === 3) {
                results = 'double-happy'
            }
            if (reel1 === 4) {
                results = 'double-cash'
            }
            if (reel1 === 5) {
                results = 'double-diamond'
            }
        }
        else if (reel1 === reel3) {
            if (reel1 === 3) {
                results = 'double-happy'
            }
            if (reel1 === 4) {
                results = 'double-cash'
            }
            if (reel1 === 5) {
                results = 'double-diamond'
            }
        }
        else if (reel2 === reel3) {
            if (reel2 === 3) {
                results = 'double-happy'
            }
            if (reel2 === 4) {
                results = 'double-cash'
            }
            if (reel2 === 5) {
                results = 'double-diamond'
            }
        }
        else {
            return;
        }
    }
    else if (reel1 === 3 || reel2 === 3 || reel3 === 3) {
        results = 'single-happy'

    }
    else {
        return
    }

    console.log(reel1, reel2, reel3, results);


    /* Find a better way to account for points in here, now doing it in render function
    let roll1 = findEmoji(reel1)    
    let roll2 = findEmoji(reel2)    
    let roll3 = findEmoji(reel3)
    let rolledCombo = roll1[0].score + roll2[0].score + roll3[0].score; //get the total from each
    let winningCombos = [5, 10, 15, 20, 30, 50, 75, 150] 
    */
}


function render() { // Render function:
    // Displays the current points
    // Game over = no points
    getWinner();
    console.log('verify my score:before all', totalPoints)  //verify my score:before all
    points = 0;
    console.log('points before', points)
    if (results === 'jackpot') {
        status.innerText = "✰ ✰ ✰ ✰ ✰ JACKPOT ✰ ✰ ✰ ✰ ✰";
        points += 150;
        if (sound) {
            jackpot.play();
        }

    }
    else if (results === 'happy-line') {
        status.innerText = "✰ ✰ ✰ ✰ ✰ HAPPY LINE ✰ ✰ ✰ ✰ ✰";
        points += 15; // Work on it !?!?!?!?!?!?!?!?!?!?
        if (sound) {
            win.play();
        }

    }
    else if (results === 'cash-line') {
        status.innerText = "✰ ✰ ✰ ✰ ✰ CASH LINE ✰ ✰ ✰ ✰ ✰";
        points += 30; // Work on it !?!?!?!?!?!?!?!?!?!?
        if (sound) {
            win.play();
        }
    }
    else if (results === 'diamond-line') {
        status.innerText = "✰ ✰ ✰ ✰ ✰ DIAMOND LINE ✰ ✰ ✰ ✰ ✰";
        points += 75; // Work on it !?!?!?!?!?!?!?!?!?!?
        if (sound) {
            win.play();
        }
    }
    else if (results === 'double-happy') {
        status.innerText = "✰ ✰ ✰ ✰ ✰ DOUBLE HAPPY ✰ ✰ ✰ ✰ ✰";
        points += 10; // Work on it !?!?!?!?!?!?!?!?!?!?
        if (sound) {
            win.play();
        }
    }
    else if (results === 'double-cash') {
        status.innerText = "✰ ✰ ✰ ✰ ✰ DOUBLE CASH ✰ ✰ ✰ ✰ ✰";
        points += 20; // Work on it !?!?!?!?!?!?!?!?!?!?
        if (sound) {
            win.play();
        }
    }
    else if (results === 'double-diamond') {
        status.innerText = "✰ ✰ ✰ ✰ ✰ DOUBLE DIAMOND ✰ ✰ ✰ ✰ ✰";
        points += 50; // Work on it !?!?!?!?!?!?!?!?!?!?
        if (sound) {
            win.play();
        }
    }
    else if (results === 'single-happy') {
        status.innerText = "✰ ✰ ✰ ✰ ✰ BE HAPPY ✰ ✰ ✰ ✰ ✰";
        points += 5; // Work on it !?!?!?!?!?!?!?!?!?!?        
    }
    else {
        if (reel1 === null) {
            return;
        }
        if (totalPoints > 0) {
            status.innerText = "✰ ✰ ✰ ✰ ✰ SPIN AGAIN ✰ ✰ ✰ ✰ ✰";
        } else {
            status.innerText = "😭 😭 😭 😭 GAME OVER 😭 😭 😭 😭";
            newGame.innerText = 'PLAY'
            
        }
        if (sound) {
            lose.play();
        }
    }
    console.log('points after', points)  //verify my score:before all
    totalPoints += points 
    if (points > 0) {
        score.innerText = `+${points}`
    }
    // score.innerText = points
    
    setTimeout(() => {
        score.innerText = totalPoints
        console.log(totalPoints)
    }, 2000);

    console.log('verify my score:after all', totalPoints)  //verify my score:after all
    console.log('spin result', reel1, reel2, reel3)  //verification for the random numbers
}

//Function for audio effects. Toggle on/off
function toggleAudio() {
    if (!sound) {
        sound = true;
        audio.innerHTML = '<img src="images/audioOn.png">';
    }
    else {
        sound = false;
        spin.pause();
        win.pause();
        lose.pause();
        jackpot.pause();
        audio.innerHTML = '<img src="images/audioOff.png">';
    }
}

function myFunction() {
    
    if (x.style.visibility === "collapse") {
      x.style.visibility = "unset";
    } else {
      x.style.visibility = "collapse";
    }
  }

init();