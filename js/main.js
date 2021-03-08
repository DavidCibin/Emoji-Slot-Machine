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
let points = 0;
let results = null;
let reel1 = null;
let reel2 = null;
let reel3 = null;
let match = null
let sound = false;


/*------Cached Element References------*/
const slot1 = document.getElementById('reel1');
const slot2 = document.getElementById('reel2');
const slot3 = document.getElementById('reel3');
let score = document.getElementById('points');
let status = document.getElementById('status')
let audio = document.getElementById('audio');


/*------Event Listeners------*/
document.getElementById('spinBtn').addEventListener('click', spinClick);
document.getElementById('audio').addEventListener('click', toggleAudio);
document.getElementById('spinBtn').addEventListener('click', init) //When the game is over


/*------Functions------*/
//Function to spin the reels and a random number for each reel
function spinClick() {
    document.getElementById('spinBtn').style.pointerEvents = 'none' //Block SPIN button for been pressed during spinning
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
            // console.log('reeelnums', reel1, reel2, reel3); //debug random numbers each time functions "runs"

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

            status.innerText = 'SPINNING';
            score.innerText = totalPoints;
            // spin.play() //inactive while testing

        } else {
            // console.log('END')
            document.getElementById('spinBtn').style.pointerEvents = 'auto' //Enable SPIN button back after spinning
            clearInterval(slotInterval)
            render()
        }
    }, interval)
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
    points = 0
    totalPoints = 100
    slot1.innerText = scoreCard[6].emoji;
    slot2.innerText = scoreCard[6].emoji;
    slot3.innerText = scoreCard[6].emoji;
    score.innerText = totalPoints

}

// Function to check for matchs and handle points
function getWinner() {
   
    console.log(reel1, reel2, reel3)
    if (reel1 == reel2 && reel1 == reel3) {
        if (reel1 == 7 && reel2 == 7 && reel3 == 7) {
            results = 'jackpot';
        }
        else {
            results = 'line-combo';
        }
    }
    else if (reel1 == reel2 || reel1 == reel3 || reel2 == reel3) {
        results = 'winner'
    }
    else {
        results = 'loser'
    }

    console.log(results);


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
    console.log('verify my score:before all', totalPoints)  //verify my score:before all
    console.log(reel1, reel2, reel3)  //verification for the random numbers
    


    // Find a better way to account for points inside the getPoints function, to clear the render a little
    let roll1 = findEmoji(reel1)
    console.log(roll1)
    let roll2 = findEmoji(reel2)
    let roll3 = findEmoji(reel3)
    let rolledCombo = roll1[0].score + roll2[0].score + roll3[0].score; //get the total from each
    let winningCombos = [5, 10, 15, 20, 30, 50, 75, 150]


    let points = 0;
    if (rolledCombo == 150) {
        console.log('verify my score:before jackpot', totalPoints)  //verify my score:before jackpot
        totalPoints += 150;
        status.innerText = "✰ ✰ ✰ ✰ ✰ ✰ JACKPOT ✰ ✰ ✰ ✰ ✰ ✰";
        points.innerText = "150"; //Display points for 1 sec then display totalPoints??
        jackpot.play();
        console.log('verify my score:after jackpot', totalPoints)  //verify my score:after jackpot

    }
    else if (winningCombos.includes(rolledCombo)) {
        console.log('verify my score:before win', totalPoints)  //verify my score:before win
        console.log(rolledCombo)
        points = (reel1 + reel2 + reel3);
        totalPoints += rolledCombo//points
        status.innerText = `YOU WIN! ${rolledCombo}`
        score.innerText = `+${rolledCombo}`; //Display points for 1 sec then display totalPoints??
        win.play();
        console.log('verify my score:after win', totalPoints)  //verify my score:after win

    }
    else {
        console.log('verify my score:before lose', totalPoints)  //verify my score:before lose
        totalPoints -= 5;
        console.log('verify my score:after lose', totalPoints)  //verify my score:after lose
        if (totalPoints > 0) {
            status.innerText = "SPIN AGAIN";
            score.innerText = '-5'; //Display points for 1 sec then display totalPoints??
        } else {
            status.innerText = "😭 GAME OVER 😭";
        }
        lose.play();
    }

    getWinner();
    // Here we will handle the points, messages for win, lose, jackpot

}

//Function for audio effects. Toggle on/off
function toggleAudio() {  //toggle icon works, play/plause needs adjust to all sounds
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

init();