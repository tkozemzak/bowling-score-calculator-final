 Live demo URL: https://tkozemzak.github.io/bowling-score-calculator-final/

 Run app locally:
 1. Clone github repo
 2. npm install
 3. npm start


 Instructions:
 1. Enter your name
 2. Enter the amount of pins hit per throw for each frame.
 3. Submit each frame, one at a time
 4. If 10 frames were not played, click "Submit Score Now" to view your scoreboard.
 5. If 10 frames were played, your scoreboard will display after the final frame submission.


 Notes:
 1. I've only tested this on Chrome and Edge, with the window fully maximized. This application will not be responsive if the user tries different window sizes.
 2. I would've liked to write unit tests if I had more time. 
 3. Most of my efforts were spent on the logic for calculating scores. UI design, form validation, etc are lacking and were not my focus for this challenge.
 4. In ScoreForm.js, ideally I would separate the 2 forms into separate components to clean things up.
 5. For this challenge, my 'authentication' is only used for storing the user's name. In any application that requires any form of security I would default to JWT for authentication.


Challenge:

Bowling Exercise (SE)
User Story
Title: Bowling Scoring Application
Description
As a bowler, I want to be able to enter a list of bowling frame scores so that I can see the
progress and total score of my game.

Acceptance Criteria:
• I will have a place to enter a series of scores per frame.
• A strike is scored as defined below.
• A spare is scored as defined below.
• An incomplete game is scored up to the last frame provided.


Information
Please read through the following and develop a solution to complete the user story. Your deliverable
should be working code (github, zip file, other... up to you) with some brief instructions.

Definitions
Frame
A frame consists of 2 opportunities to knock down 10 bowling pins with a bowling ball. The 10 pins
are then reset for the next frame.

How to Score

Strike
If you knock down all 10 pins in the first shot of a
frame, you get a strike.

A strike earns 10 points plus the sum of your next
two shots.

Spare
If you knock down all 10 pins using both shots of
a frame, you get a spare.

A spare earns 10 points plus the sum of your next
one shot.

Open Frame
If you do not knock down all 10 pins using both
shots of your frame (9 or fewer pins knocked
down), you have an open frame.

An open frame only earns the number of pins
knocked down.

The 10th Frame
The 10th frame is a bit different:
If you roll a strike in the first shot of the 10th
frame, you get 2 more shots.

The score for the 10th frame is the total number
of pins knocked down in the 10th frame.

If you roll a spare in the first two shots of the
10th frame, you get 1 more shot.
If you leave the 10th frame open after two shots,
the game is over and you do not get an additional
shot.

Some definitions from http://www.fryes4fun.com/Bowling/scoring.htm