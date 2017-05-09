$(document).ready(function () {

    var showImage;

    var count = 0;
    var clock = 5;
    var correctAnswers = 0;
    var wrongAnswers = 0;


    var object = {


        questions: [
                    "In S1E1 'Pilot': Who started their first day at Dunder Mifflin Scranton?",
                    "In S1E2 'Diversity Day': What famous comedian's stand up routine does Michael imitate?",
                    "In S1E3 'Health Care': Which of these is NOT one of Jim and Pam's diseases?",
                    "In S1E4 'The Alliance': How much money does Michael donate to Oscar's nephew's charity, not realizing it is a walk-a-thon and the amount is per mile?",
                    "In S1E5 'Basketball': What small appliance of Pam's breaks down? (It was given to her at her engagement party three years earlier)",
                    "In S1E6 'Hot Girl' What is the Hot Girl's name?",
                    "In S2E1 'The Dundies': What Dundie award does Phyllis take home?",
                    "In S2E2 'Sexual Harassment': What is on Todd Packer's vanity license plate?",
                    "In S2E3 'Office Olympics': What does Pam name 'Box of paper snowshoe racing'?",
                    "In S2E4 'The Fire': What are Meredith's five DVD choices for the game 'Desert Island'?"
                    ],

        answers: [
                  ["Jim Halpert", "Ryan Howard", "Michael Scott", "Erin Hannon"], ["Chris Rock", "Richard Pryor", "Robin Williams", "George Carlin"],
                  ["Killer Nanorobots", "Hot Dog Fingers", "Count Choculytise", "Hair Cancer"], ["$40", "$10", "$25", "$100"],
                  ["Toaster", "Microwave", "Blender", "Toaster Oven"], ["Amy", "Christy", "Kelly", "Katy"],
                  ["The Busiest Beaver Dundie", "The Bushiest Beaver Dundie", "Spicy Curry Dundie", "Whitest Sneaker Dundie"],
                  ["LUVMKR", "WLHUNG", "TODPKR", "BGDADY"], ["Flonkerton", "Icelandic Snowshoe Racing", "Bixinng", "Pergerhosen"],
                  ["The Shawshank Redemption, 40 Year Old Virgin, Gentlemen Prefer Blondes, Disney's Sleeping Beauty, Life of Pi",
                   "Gone With The Wind, The Burbs, Clerks II, Sense & Sensibility, Chronicles of Riddick",
                   "Legends of the Fall, Legally Blonde, Bridges of Madison County, My Big Fat Greek Wedding, Ghost (but just that one scene)",
                   "Fargo, Edward Scissor-hands, The Breakfast Club, Dazed and Confused, The Princess Bride"]
                ],

        correctAnswers: ["Ryan Howard", "Chris Rock", "Hair Cancer", "$25", "Toaster Oven", "Katy", "The Bushiest Beaver Dundie",
                        "WLHUNG", "Flonkerton", "Legends of the Fall, Legally Blonde, Bridges of Madison County, My Big Fat Greek Wedding, Ghost (but just that one scene)"
                        ],
        videoAnswers: [ "https://www.youtube.com/embed/4Q12Spp6mnI?autoplay=1", "https://www.youtube.com/embed/aeQIQuDL8aA?autoplay=1", "https://www.youtube.com/embed/ifFzxiSQsCE?start=52&end=102&autoplay=1", "https://www.youtube.com/embed/hX1cX9sxygA?autoplay=1",
               "https://www.youtube.com/embed/eJGov6c1VmU?autoplay=1", "https://www.youtube.com/embed/YOjK1_JvZHQ?autoplay=1", "https://www.youtube.com/embed/vYb9XjZglSw?autoplay=1", "https://www.youtube.com/embed/6xST2zjX0UI?start=150&end=159&autoplay=1",
               "https://goo.gl/cIHCsV","https://goo.gl/4hBky4"],      


              

        videoLength: [19000, 43000, 50000, 18000, 14000, 31000, 13000, 9000, 14000, 49000],
        startGame: function() {
            $("#start").click(function() {
                object.displayQuestion();
                //Need to work on timer//
            });
        },

        pickingAnswer: function () {

            $(".answer").on("click", function () {
                // console.log(object.correctAnswers[count])
                //answeredQuestion = true;
                selectedAnswer = $(this).text();
                    if (selectedAnswer === object.correctAnswers[count]) {
                        object.correctSelection();
                        //Once clock is figured out, clear it
                    }
                    else {
                         object.wrongSelection();
                           //Once clock is figured out, clear it
                    }
            })

        },

     correctSelection: function() {
        correctAnswers++;
          $(".question").html("<h2>Correct!!</h2>");
          $(".mainArea").html("<h2 class='text-center'>Correct!</h2>" + "<iframe class='text-center' width='420' height='345' style=' position:relative; left:361px; top:30px' src='"+object.videoAnswers[count]+"'></iframe>"+"<br><button class='nextQuestion'>Next Question</button>")

setTimeout(object.wait, 4000);
    },

    wrongSelection: function() {
setTimeout(object.wait, 4000);
    },



        displayQuestion: function () {
            $(".question").text(object.questions[count]);
            $(".answer1").text(object.answers[count][0]);
            $(".answer2").text(object.answers[count][1]);
            $(".answer3").text(object.answers[count][2]);
            $(".answer4").text(object.answers[count][3]);

          
        },

        startSlideshow: function () {

            showImage = setInterval(object.nextQuestion, 6000);
        },

        nextQuestion: function () {
       
            console.log(count)

            $(".question").empty();
            $(".answer1").empty();
            $(".answer2").empty();
            $(".answer3").empty();
            $(".answer4").empty();

            setTimeout(object.displayQuestion, 1000);
             count++;
            if (count === object.questions.length) {
                count = 0;
            }
        },



    wait: function wait() {
	        if (count < 10) {
	        count++;
	        object.displayQuestion();
	        counter = 5;
	        // object.timer();
	    }
	    else {
		    // finalScreen();
	    }
},
        timer: function() {

             $("#clock").html(clock);
             clock--;

             if (clock < 0) {
                clock= 5;
             }
        }

    }
  object.displayQuestion();
// setInterval(object.timer, 1000);

   
  

    object.startSlideshow();
    object.nextQuestion();
    object.pickingAnswer();
});

