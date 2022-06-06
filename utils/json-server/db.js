module.exports = function() {
  return {
    instances: [
      {
        "title" : "Test analytical dashboard",
        "date" : "2022-04-08",
        "duration" : 190104000,
        "instance_id" : 3,
        "average_score" : 200.0,
        "median_score" : 200.0,
        "participants" : [ {
          "user_ref_id" : 1,
          "user_name" : "\"Demo Admin\"",
          "levels" : [ {
            "level_id" : 1,
            "level_title": "Title of level 1",
            "hints_taken" : 1,
            "wrong_answers" : ["answer1", "answer2", "answer3", "answer4"],
            "duration" : 21337,
            "score" : 30
          }, {
            "level_id" : 2,
            "level_title": "Title of level 2",
            "hints_taken" : 1,
            "wrong_answers" : ["booom"],
            "duration" : 8624,
            "score" : 90
          }, {
            "level_id" : 3,
            "level_title": "Title of level 3",
            "hints_taken" : 0,
            "wrong_answers" : [],
            "duration" : 10896,
            "score" : 100
          } ]
        }, {
          "user_ref_id" : 2,
          "user_name" : "\"Demo User\"",
          "levels" : [ {
            "level_id" : 1,
            "level_title": "Title of level 1",
            "hints_taken" : 0,
            "wrong_answers" : ["flag", "answer1", "answer1", "answer1",],
            "duration" : 216205,
            "score" : 50
          }, {
            "level_id" : 2,
            "level_title": "Title of level 2",
            "hints_taken" : 1,
            "wrong_answers" : [],
            "duration" : 23967,
            "score" : 90
          }, {
            "level_id" : 3,
            "level_title": "Title of level 3",
            "hints_taken" : 2,
            "wrong_answers" : ["five"],
            "duration" : 8294,
            "score" : 40
          } ]
        } ],
        "levels" : [ {
          "level_id" : 1,
          "correct_answer" : "2323",
          "correct_answers_submitted" : 2,
          "wrong_answers" : [ "flag", "answer1", "answer1", "answer1", "answer2", "answer3", "answer4" ]
        }, {
          "level_id" : 2,
          "correct_answer" : "Top_Secret_Flag",
          "correct_answers_submitted" : 2,
          "wrong_answers" : [ "booom" ]
        }, {
          "level_id" : 3,
          "correct_answer" : "Cant_Guess_This",
          "correct_answers_submitted" : 2,
          "wrong_answers" : [ "five" ]
        } ]
      },
      {
        "title" : "[Alpha] Test analytical dashboard",
        "date" : "2022-04-18",
        "duration" : 90104000,
        "instance_id" : 8,
        "average_score" : 250.0,
        "median_score" : 210.0,
        "participants" : [ {
          "user_ref_id" : 4,
          "user_name" : "\"Joe Doe\"",
          "levels" : [ {
            "level_id" : 1,
            "level_title": "Title of level 1",
            "hints_taken" : 1,
            "wrong_answers" : ["answer1", "answer4"],
            "duration" : 35337,
            "score" : 20
          }, {
            "level_id" : 2,
            "level_title": "Title of level 2",
            "hints_taken" : 1,
            "wrong_answers" : ["booomd"],
            "duration" : 9524,
            "score" : 70
          }, {
            "level_id" : 3,
            "level_title": "Title of level 3",
            "hints_taken" : 0,
            "wrong_answers" : [],
            "duration" : 15696,
            "score" : 120
          } ]
        }, {
          "user_ref_id" : 5,
          "user_name" : "\"Jane Basic\"",
          "levels" : [ {
            "level_id" : 1,
            "level_title": "Title of level 1",
            "hints_taken" : 0,
            "wrong_answers" : ["flag", "answer1", "answer2", "answer2"],
            "duration" : 216205,
            "score" : 30
          }, {
            "level_id" : 2,
            "level_title": "Title of level 2",
            "hints_taken" : 0,
            "wrong_answers" : [],
            "duration" : 93967,
            "score" : 110
          }, {
            "level_id" : 3,
            "level_title": "Title of level 2",
            "hints_taken" : 0,
            "wrong_answers" : ["six"],
            "duration" : 80294,
            "score" : 20
          } ]
        } ],
        "levels" : [ {
          "level_id" : 1,
          "correct_answer" : "2323",
          "correct_answers_submitted" : 2,
          "wrong_answers" : [ "answer1", "answer4", "flag", "answer1", "answer2", "answer2"]
        }, {
          "level_id" : 2,
          "correct_answer" : "Top_Secret_Flag",
          "correct_answers_submitted" : 2,
          "wrong_answers" : [ "booomd" ]
        }, {
          "level_id" : 3,
          "correct_answer" : "Cant_Guess_This",
          "correct_answers_submitted" : 2,
          "wrong_answers" : [ "six" ]
        } ]
      }
    ]
  }
};
