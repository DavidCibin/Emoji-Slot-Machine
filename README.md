# Emoji Slot Machine - Created by David Cibin
### [Github](https://github.com/davidisurf)
 
![Emoji Slot Machine Main Screenshot](images/screenshot-desktop.jpg)

## About
 
Hi! My name is David Cibin. I'm from Brazil but currently living in Massachusetts. I am participating in the Software Engineer Program offered by [General Assembly](https://www.generalassemb.ly) and this is my project to present to the end of Unit 1 program. The unit 1 program consists of Javascript, HTML and CSS.
 
## Introduction
The purpose of this project is to help us understand the control flow behind the program and an opportunity to show our skills acquired after only two weeks in the program. One of the reasons I chose the slot machine, it brings me back to Vegas, a place that I have good memories of after living there for a few months. You will not find more options to play(gamble) inside a casino than slot machines. Actually I remember the first time I landed at Vegas airport, the first impact I had was to see all those slot machines inside the airport. And in Vegas you will find them everywhere. In coffee shops, restaurants, gift stores, you name it! 
 
  
## Getting Started
 
You will be able to enjoy my game here (link in here). I used surge to deploy my game and you also can take a peek in (link for game repo here)
 
## The Game
 
The slot machine here produced by me is the standard layout of the game,  featuring a screen displaying three reels that "spin" when the game is activated. 
 
Each reel consists of a series of 8 emojis displayed randomly when the spin button is clicked. Here are the emojis chose by me: 🤢 😱 😭 🤬 😃 🤑 💎 🎰. 
 
The game in this case starts with 50 points.
 
The main purpose of the game is to get more points and here is the trick part, now it’s all about luck. Because you will only get more points, if after each spin, you get a combination of emojis. These combinations are displayed below on a “payout” screenshot. So, if you don’t get any of those combos you will lose 5 points after each spin.
 
The game will be over when it reaches 0 point.
 
Did you know?
By law, in Nevada the minimum payout for a slot machine is 75% and in New Jersey the minimum is 83%. Trust me, the “house” always wins!!
 
## Technology
 
To accomplish this project, here are the list of used tools:
* Visual Studio Code
* JavaScript
* HTML5
* CSS
* Git
* GitHub
* Surge
* And many hours of Google search.
 
## Next steps.
 
The game is definitely not over. Here are some other features to be implemented:
 
Mobile version will be featured soon!
 
The multiplier: add one more button to multiple by “2” the result of a possible combination. The downside is if you don’t get a combination you will lose twice the cost per play.
 
Like the classic slot machines, a handle will be introduced to the side of the machine, so when you click it, the handle will tilt down for a second, replicating the movement when you pull a slot machines handle to play. 
 

## Pseudocode
 
The data structure used for this game:
 
* Constants:
    * all sound effects
    * Object: used to store each emoji and a correspondent number to each one. Here named scoreBoard
* Variables:
    * Total points
    * Results
    * One for each reel
    * One for each random number generated and to assign to each emoji
    * Sound control
* Cached element references
    * Elements to grab each reel
    * Element to display the score
    * Element to display all game messages
    * Element to audio toggle on/off
    * Element for information: display the game combos
    * Element for the Spin button
* Event listeners
    * Handle the click event to spin the reels
    * Handle the click event to toggle audio on/off
    * Handle the click to open a display for the game payout combination
* Functions
    * Function spinClick: used to spin the reels, generate a random number for each reel, all in a specified timeframe
    * Function findEmoji: works together with the spinClick function. Getting each number generated randomly and assigns each emoji value stored in the scoreBoard object. 
    * Function getWinner: check for the result generated by the spinClick function and find if any of the results has a match.
    * Function render: check for matches found by the getWinner function , displays the winner combos if any and also control all the points. 
    * Function toggleAudio: controls the audios effects and if the user preference for audio on/off
    * Function infoPayout: control the display of the payout combination and cost per play
 
 

