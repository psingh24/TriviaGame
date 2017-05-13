$(document).ready(function () {

    var count = 0;
    var clock = 30;
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var timeOut;
    var audio = new Audio("assets/images/theOffice.mp3");
    var question = $(".question"); var next =  $("#nextQuestion"); var answer = $(".answer"); var answer1 = $(".answer1"); var answer2 = $(".answer2"); var answer3 = $(".answer3"); var answer4 = $(".answer4");
    var replay = $("#replay"); var start = $("#start"); var results = $(".results"); 
    var theClock; 
                 


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
                            "In S3E9 'The Convict': What is the worst thing about prison according to Prison Mike'?",
                            "In S2E5 'Halloween': What is Jim's costume?"
                            ],

                answers: [
                        ["Jim Halpert", "Ryan Howard", "Michael Scott", "Erin Hannon"], ["Chris Rock", "Richard Pryor", "Robin Williams", "George Carlin"],
                        ["Killer Nanorobots", "Hot Dog Fingers", "Count Choculytise", "Hair Cancer"], ["$40", "$10", "$25", "$100"],
                        ["Toaster", "Microwave", "Blender", "Toaster Oven"], ["Amy", "Christy", "Kelly", "Katy"],
                        ["The Busiest Beaver Dundie", "The Bushiest Beaver Dundie", "Spicy Curry Dundie", "Whitest Sneaker Dundie"],
                        ["LUVMKR", "WLHUNG", "TODPKR", "BGDADY"], ["Gruel", "Dementors", "Gruel Sandwiches", "Eating Hair"],
                        ["Dave", "Bookface","Three Hole Punch Jim", "Rational Consumer"]
                        ],

                correctAnswers: ["Ryan Howard", "Chris Rock", "Hair Cancer", "$25", "Toaster Oven", "Katy", "The Bushiest Beaver Dundie",
                                "WLHUNG", "Dementors", "Bookface"
                                ],
                videoAnswers: [ "https://www.youtube.com/embed/4Q12Spp6mnI?autoplay=1", "https://www.youtube.com/embed/aeQIQuDL8aA?start=18&autoplay=1", "https://www.youtube.com/embed/ifFzxiSQsCE?start=52&end=102&autoplay=1", "https://www.youtube.com/embed/hX1cX9sxygA?autoplay=1",
                    "https://www.youtube.com/embed/eJGov6c1VmU?autoplay=1", "https://www.youtube.com/embed/YOjK1_JvZHQ?autoplay=1", "https://www.youtube.com/embed/vYb9XjZglSw?autoplay=1", "https://www.youtube.com/embed/6xST2zjX0UI?start=150&end=159&autoplay=1",
                    "https://www.youtube.com/embed/a7RoP1LKMeM?start=132&end=152&autoplay=1","https://www.youtube.com/embed/PQeXEYsPOZI?autoplay=1",],      

                videoLength: [20000, 27000, 50000, 18000, 14000, 31000, 13000, 9000, 21000, 9000],

        
        
        // Start game on click of start button, hide everything until button is pressed
        startGame: function() {
            next.hide();
            answer1.hide();
            answer2.hide();
            answer3.hide();
            answer4.hide();
            question.hide();
            replay.hide();

            //On click, start the game, display the questions, and start the audio
            start.click(function() {
                 audio.play();
                 object.displayQuestion()
                 object.timer();
                //Need to work on timer//
            });
        },

        pickingAnswer: function () {

            answer.on("click", function () {
                // console.log(object.correctAnswers[count])
                //answeredQuestion = true;
                selectedAnswer = $(this).text();
                    if (selectedAnswer === object.correctAnswers[count]) {
                        object.correctSelection();
                        clearInterval(theClock);
                        //Once clock is figured out, clear it
                    }
                    else {
                         object.wrongSelection();
                         clearInterval(theClock);
                           //Once clock is figured out, clear it
                    }
            })

        },

     correctSelection: function() {
        correctAnswers++;
         audio.pause();
       
        //   $(".question").html("<h2>Correct!!</h2>");
          results.html("<h2 class='text-center'>Correct!</h2>" + "<iframe class='text-center' width='' height='345' src='"+object.videoAnswers[count]+"'></iframe>");
           answer1.hide();
            answer2.hide();
            answer3.hide();
            answer4.hide();
            question.hide();
            replay.hide();
             next.show();
             $("#clock").hide();
            
             
   

           


        next.click(function() {
            clearTimeout(timeOut)
            object.nextQuestion()
            $(this).off("click")

            

        });
           timeOut = setTimeout(object.nextQuestion, object.videoLength[count]);

        
        
        // count++;
        // setTimeout(object.nextQuestion, object.videoLength[count]);
      
        
    },

    wrongSelection: function() {
        wrongAnswers++;
        audio.pause();
         results.html("<h2 class='text-center'>Incorrect!</h2>" + "<img src='assets/images/no.gif'>");
           answer1.hide();
            answer2.hide();
            answer3.hide();
            answer4.hide();
            question.hide();
            replay.hide();
             next.show();
             $("#clock").hide();
             

        next.click(function() {
            clearTimeout(timeOut)
            object.nextQuestion()
            $(this).off("click")

            

        });

           
       timeOut = setTimeout(object.nextQuestion, 5000);
    },

    lossDueToTime: function() {
            results.html("<h2>Times Up!!!</h2>");
            answer1.hide();
            answer2.hide();
            answer3.hide();
            answer4.hide();
            question.hide();
            replay.hide();
             next.show();
            wrongAnswers++;
             $("#clock").hide();

    //  next.click(function() {
    //         clearTimeout(timeOut)
    //         object.nextQuestion()
    //         $(this).off("click")

            

    //     });

            timeOut = setTimeout(object.nextQuestion, 5000);
    
    },


        displayQuestion: function () {
            start.hide();
            next.hide();
             answer1.show();
            answer2.show();
            answer3.show();
            answer4.show();
            question.show();
            question.text(object.questions[count]);
            answer.text(object.answers[count][0]);
            answer2.text(object.answers[count][1]);
            answer3.text(object.answers[count][2]);
            answer4.text(object.answers[count][3]);
            results.empty();
             audio.play();
              $("#clock").show();
            

            // object.pickingAnswer();

          
        },

        nextQuestion: function () {

              if (count < 9) {
	        count++;
            // console.log(count)
	        object.displayQuestion();
	        clock = 30;
	        object.timer();
	    }
	    else {
		    object.endScreen();
	    }
       
            
        },
        endScreen: function() {
            results.html("<div class='finalScreen'><h2>Game Over</h2><br><h3>Correct Answers:"+ correctAnswers +"</h3><br><h3>Wrong Answers:"+ wrongAnswers +"</h3><br><button id='replay' class='btn btn-success'>Replay</button></div>")
             question.empty();
            answer1.empty();
            answer2.empty();
            answer3.empty();
            answer4.empty();
            next.hide();
            audio.play();
            object.restart();



        },

        restart: function() {
            $("#replay").click(function() {
                count = 0;
                clock = 30;
                correctAnswers = 0;
                wrongAnswers = 0;
                object.timer();
                object.displayQuestion();
            })
        },
       
 


        timer: function() {
            theClock = setInterval(countDown, 1000)

            function countDown() {
                if (clock === 0){
                    clearInterval(theClock);
                     object.lossDueToTime();
                }
                else {
                    if (clock > 0) {
                        clock--;
                    }
                }
                $("#clock").html("<p>Timer:</p>" + clock);

            }

            
           
            
        }

    }


   
  object.startGame();
object.pickingAnswer();

//   object.nextQuestion();
    
});

