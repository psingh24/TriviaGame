$(document).ready(function() {


var questions = ["In S1E1 'Pilot': Who started their first day at Dunder Mifflin Scranton?",
 "In S1E2 'Diversity Day': What famous comedian's stand up routine does Michael imitate?",
 "In S1E3 'Health Care': Which of these is NOT one of Jim and Pam's made up diseases?",
 "In S1E4 'The Alliance': How much money does Michael donate to Oscar's nephew's charity, not realizing it is a walk-a-thon and the amount is per mile?",
 "In S1E5 'Basketball': What small appliance of Pam's breaks down? (It was given to her at her engagement party three years earlier)",
 "In S1E6 'Hot Girl' What is the Hot Girl's name?",
 "In S2E1 'The Dundies': What Dundie award does Phyllis take home?",
 "In S2E2 'Sexual Harassment': What is on Todd Packer's vanity license plate?",
 "In S2E3 'Office Olympics': What does Pam name 'Box of paper snowshoe racing'?",
 "In S2E4 'The Fire': What are Meredith's five DVD choices for the game 'Desert Island'?",
 ];

var answers = [["Jim Halpert", "Ryan Howard", "Michael Scott", "Erin Hannon"], ["Chris Rock", "Richard Pryor", "Robin Williams", "George Carlin" ],
["Killer Nanorobots", "Hot Dog Fingers", "Spontaneous Dental Hydroplosion", "Hair Cancer"], ["$40", "$10", "$25", "$100"],
["Toaster", "Microwave", "Blender", "Toaster Oven"], ["Amy", "Christy", "Kelly", "Katy"],
 ["The Busiest Beaver Dundie", "The Bushiest Beaver Dundie", "Spicy Curry Dundie", "Whitest Sneaker Dundie"],
 ["LUVMKR", "WLHUNG", "TODPKR", "BGDADY"], ["Flonkerton", "Icelandic Snowshoe Racing", "Bixinng", "Pergerhosen"],
 ["The Shawshank Redemption, 40 Year Old Virgin, Gentlemen Prefer Blondes, Disney's Sleeping Beauty, Life of Pi",
"Gone With The Wind, The Burbs, Clerks II, Sense & Sensibility, Chronicles of Riddick",
"Legends of the Fall, Legally Blonde, Bridges of Madison County, My Big Fat Greek Wedding, Ghost (but just that one scene)",
"Fargo, Edward Scissor-hands, The Breakfast Club, Dazed and Confused, The Princess Bride"]];

var correctAnswers = ["B. Ryan Howard", "A. Chris Rock", "D. Hair Cancer", "C. $25", "D. Toaster Oven", "D. Katy", "B. The Bushiest Beaver Dundie",
 "B. WLHUNG", "A. Flonkerton", "C. Legends of the Fall, Legally Blonde, Bridges of Madison County, My Big Fat Greek Wedding, Ghost (but just that one scene)"]




$(".question").html("<h2>"+questions[0]+"</h2>")
$(".answer1").html("<h3>"+answers[0][0]+"</h3>")
$(".answer2").html("<h3>"+answers[0][1]+"</h3>")
$(".answer3").html("<h3>"+answers[0][2]+"</h3>")
$(".answer4").html("<h3>"+answers[0][3]+"</h3>")























var start = 10;

function timer() {
    $("#clock").text(start)
    start--;

    if (start < 0) {
        $("#clock").html("<p>Times Up!!</p>")
    }
}


setInterval(timer, 1000)





})