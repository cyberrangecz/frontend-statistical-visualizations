module.exports = function() {
  let clustering = require('./../../node_modules/@muni-kypo-crp/clustering-visualization/json-server/db').get;
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
    ],
    clusters: clustering.clusters,
    clusters2: clustering.clusters2,
    radarChart: clustering.radarChart,
    sse1: clustering.sse1,
    sse2: clustering.sse2,
    sseNDim: clustering.sseWrong,
    clustering: {
      final_results: {
        estimated_time: 2135498,
        max_participant_score: 230,
        max_achievable_score: 250,
        max_participant_training_score: 30,
        max_participant_assessment_score: 200,
        max_participant_time: 2635498,
        average_time: 2335498,
        average_score: 150,
        average_training_score: 40,
        average_assessment_score: 200,
        player_data: [
          {
            id: 1,
            name: 'Jane',
            picture:
              'iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAACIUlEQVR4Xu3Ysa3YQAwFQbfknuz+S/jOl2AwVnQAg0keoAUv1a+fn59f/+vP778/r+kbxBhED3lB3yDGIHrIC/oGMQbRQ17QN4gxiB7ygr5BjEH0kBf0DWIMooe8oG8QYxA95AV9gxiD6CEv6BvEGEQPeUHfIMYgesgL+gYxBtFDXtA3iDGIHvKCvkGMQfSQF/QNYgyih7ygbxBjOLsxnN0Yzm4MZzeGsxvD2Y3h7MZwdmM4uzGc3RjObgxnN4azG8PZjeHsPv2Taky0JdoSbYlPH/cQ0ZZoS7QlPn3cQ0Rboi3Rlvj0cQ8RbYm2RFvi08c9RLQl2hJtiU8f9xDRlmhLtCU+fdxDRFuiLdGW+PRxDxFtibZEW+LTxz1EtCXaEm2JTx/3ENGWaEu0JT593ENEW6It0Zb49HEPEW2JtkRb4tPHPUS0JdoSbYlPH/cQ0ZZoS7QlPn3cQ0Rboi3RlhixsxvD2Y3h7MZwdmM4uzGc3RjObgxnN4azG8PZjeHsxnB2Yzi7MZzdGM5uDKL/e0Rboi3RlhiD6CGiLdGWaEuMQfQQ0ZZoS7QlxiB6iGhLtCXaEmMQPUS0JdoSbYkxiB4i2hJtibbEGEQPEW2JtkRbYgyih4i2RFuiLTEG0UNEW6It0ZYYg+ghoi3RlmhLjEH0ENGWaEu0JcYgeohoS7Ql2hJjED1EtCXaEm2JMYgeItoSbYm2xBhEDxFtibZEW+IfusaIXHtR21cAAAAASUVORK5CYII=',
            avatar_color: '#643165',
            training_run_id: 1,
            training_time: 2635498,
            training_score: 30,
            assessment_score: 200,
            finished: true,
          },
          {
            id: 2,
            name: 'John',
            picture:
              'iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAACIUlEQVR4Xu3Ysa3YQAwFQbfknuz+S/jOl2AwVnQAg0keoAUv1a+fn59f/+vP778/r+kbxBhED3lB3yDGIHrIC/oGMQbRQ17QN4gxiB7ygr5BjEH0kBf0DWIMooe8oG8QYxA95AV9gxiD6CEv6BvEGEQPeUHfIMYgesgL+gYxBtFDXtA3iDGIHvKCvkGMQfSQF/QNYgyih7ygbxBjOLsxnN0Yzm4MZzeGsxvD2Y3h7MZwdmM4uzGc3RjObgxnN4azG8PZjeHsPv2Taky0JdoSbYlPH/cQ0ZZoS7QlPn3cQ0Rboi3Rlvj0cQ8RbYm2RFvi08c9RLQl2hJtiU8f9xDRlmhLtCU+fdxDRFuiLdGW+PRxDxFtibZEW+LTxz1EtCXaEm2JTx/3ENGWaEu0JT593ENEW6It0Zb49HEPEW2JtkRb4tPHPUS0JdoSbYlPH/cQ0ZZoS7QlPn3cQ0Rboi3RlhixsxvD2Y3h7MZwdmM4uzGc3RjObgxnN4azG8PZjeHsxnB2Yzi7MZzdGM5uDKL/e0Rboi3RlhiD6CGiLdGWaEuMQfQQ0ZZoS7QlxiB6iGhLtCXaEmMQPUS0JdoSbYkxiB4i2hJtibbEGEQPEW2JtkRbYgyih4i2RFuiLTEG0UNEW6It0ZYYg+ghoi3RlmhLjEH0ENGWaEu0JcYgeohoS7Ql2hJjED1EtCXaEm2JMYgeItoSbYm2xBhEDxFtibZEW+IfusaIXHtR21cAAAAASUVORK5CYII=',
            avatar_color: '#100975',
            training_run_id: 2,
            training_time: 2635498,
            training_score: 50,
            assessment_score: 200,
            finished: true,
          },
        ],
      },
      levels: [
        {
          id: 40,
          order: 0,
          level_type: 'INFO_LEVEL',
          title: 'Info',
          estimated_time: 0,
          max_participant_score: 0,
          max_achievable_score: 0,
          max_participant_time: 4329,
          average_time: 4329,
          average_score: 0,
          player_data: [
            {
              id: 1,
              name: 'Jane',
              picture:
                'iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAACIUlEQVR4Xu3Ysa3YQAwFQbfknuz+S/jOl2AwVnQAg0keoAUv1a+fn59f/+vP778/r+kbxBhED3lB3yDGIHrIC/oGMQbRQ17QN4gxiB7ygr5BjEH0kBf0DWIMooe8oG8QYxA95AV9gxiD6CEv6BvEGEQPeUHfIMYgesgL+gYxBtFDXtA3iDGIHvKCvkGMQfSQF/QNYgyih7ygbxBjOLsxnN0Yzm4MZzeGsxvD2Y3h7MZwdmM4uzGc3RjObgxnN4azG8PZjeHsPv2Taky0JdoSbYlPH/cQ0ZZoS7QlPn3cQ0Rboi3Rlvj0cQ8RbYm2RFvi08c9RLQl2hJtiU8f9xDRlmhLtCU+fdxDRFuiLdGW+PRxDxFtibZEW+LTxz1EtCXaEm2JTx/3ENGWaEu0JT593ENEW6It0Zb49HEPEW2JtkRb4tPHPUS0JdoSbYlPH/cQ0ZZoS7QlPn3cQ0Rboi3RlhixsxvD2Y3h7MZwdmM4uzGc3RjObgxnN4azG8PZjeHsxnB2Yzi7MZzdGM5uDKL/e0Rboi3RlhiD6CGiLdGWaEuMQfQQ0ZZoS7QlxiB6iGhLtCXaEmMQPUS0JdoSbYkxiB4i2hJtibbEGEQPEW2JtkRbYgyih4i2RFuiLTEG0UNEW6It0ZYYg+ghoi3RlmhLjEH0ENGWaEu0JcYgeohoS7Ql2hJjED1EtCXaEm2JMYgeItoSbYm2xBhEDxFtibZEW+IfusaIXHtR21cAAAAASUVORK5CYII=',
              avatar_color: '#643165',
              training_run_id: 1,
              training_time: 2635498,
              participant_level_score: 30,
              finished: true,
            },
            {
              id: 2,
              name: 'John',
              picture:
                'iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAACIUlEQVR4Xu3Ysa3YQAwFQbfknuz+S/jOl2AwVnQAg0keoAUv1a+fn59f/+vP778/r+kbxBhED3lB3yDGIHrIC/oGMQbRQ17QN4gxiB7ygr5BjEH0kBf0DWIMooe8oG8QYxA95AV9gxiD6CEv6BvEGEQPeUHfIMYgesgL+gYxBtFDXtA3iDGIHvKCvkGMQfSQF/QNYgyih7ygbxBjOLsxnN0Yzm4MZzeGsxvD2Y3h7MZwdmM4uzGc3RjObgxnN4azG8PZjeHsPv2Taky0JdoSbYlPH/cQ0ZZoS7QlPn3cQ0Rboi3Rlvj0cQ8RbYm2RFvi08c9RLQl2hJtiU8f9xDRlmhLtCU+fdxDRFuiLdGW+PRxDxFtibZEW+LTxz1EtCXaEm2JTx/3ENGWaEu0JT593ENEW6It0Zb49HEPEW2JtkRb4tPHPUS0JdoSbYlPH/cQ0ZZoS7QlPn3cQ0Rboi3RlhixsxvD2Y3h7MZwdmM4uzGc3RjObgxnN4azG8PZjeHsxnB2Yzi7MZzdGM5uDKL/e0Rboi3RlhiD6CGiLdGWaEuMQfQQ0ZZoS7QlxiB6iGhLtCXaEmMQPUS0JdoSbYkxiB4i2hJtibbEGEQPEW2JtkRbYgyih4i2RFuiLTEG0UNEW6It0ZYYg+ghoi3RlmhLjEH0ENGWaEu0JcYgeohoS7Ql2hJjED1EtCXaEm2JMYgeItoSbYm2xBhEDxFtibZEW+IfusaIXHtR21cAAAAASUVORK5CYII=',
              avatar_color: '#100975',
              training_run_id: 2,
              training_time: 2635498,
              participant_level_score: 50,
              finished: true,
            },
          ],
        },
        {
          id: 41,
          order: 1,
          level_type: 'TRAINING_LEVEL',
          title: 'Finding open ports',
          estimated_time: 600000,
          max_participant_score: 30,
          max_achievable_score: 30,
          max_participant_time: 763290,
          average_time: 260290,
          average_score: 10,
          player_data: [
            {
              id: 1,
              name: 'Jane',
              picture:
                'iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAACIUlEQVR4Xu3Ysa3YQAwFQbfknuz+S/jOl2AwVnQAg0keoAUv1a+fn59f/+vP778/r+kbxBhED3lB3yDGIHrIC/oGMQbRQ17QN4gxiB7ygr5BjEH0kBf0DWIMooe8oG8QYxA95AV9gxiD6CEv6BvEGEQPeUHfIMYgesgL+gYxBtFDXtA3iDGIHvKCvkGMQfSQF/QNYgyih7ygbxBjOLsxnN0Yzm4MZzeGsxvD2Y3h7MZwdmM4uzGc3RjObgxnN4azG8PZjeHsPv2Taky0JdoSbYlPH/cQ0ZZoS7QlPn3cQ0Rboi3Rlvj0cQ8RbYm2RFvi08c9RLQl2hJtiU8f9xDRlmhLtCU+fdxDRFuiLdGW+PRxDxFtibZEW+LTxz1EtCXaEm2JTx/3ENGWaEu0JT593ENEW6It0Zb49HEPEW2JtkRb4tPHPUS0JdoSbYlPH/cQ0ZZoS7QlPn3cQ0Rboi3RlhixsxvD2Y3h7MZwdmM4uzGc3RjObgxnN4azG8PZjeHsxnB2Yzi7MZzdGM5uDKL/e0Rboi3RlhiD6CGiLdGWaEuMQfQQ0ZZoS7QlxiB6iGhLtCXaEmMQPUS0JdoSbYkxiB4i2hJtibbEGEQPEW2JtkRbYgyih4i2RFuiLTEG0UNEW6It0ZYYg+ghoi3RlmhLjEH0ENGWaEu0JcYgeohoS7Ql2hJjED1EtCXaEm2JMYgeItoSbYm2xBhEDxFtibZEW+IfusaIXHtR21cAAAAASUVORK5CYII=',
              avatar_color: '#643165',
              training_run_id: 1,
              training_time: 763290,
              participant_level_score: 30,
              finished: true,
            },
            {
              id: 2,
              name: 'John',
              picture:
                'iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAACIUlEQVR4Xu3Ysa3YQAwFQbfknuz+S/jOl2AwVnQAg0keoAUv1a+fn59f/+vP778/r+kbxBhED3lB3yDGIHrIC/oGMQbRQ17QN4gxiB7ygr5BjEH0kBf0DWIMooe8oG8QYxA95AV9gxiD6CEv6BvEGEQPeUHfIMYgesgL+gYxBtFDXtA3iDGIHvKCvkGMQfSQF/QNYgyih7ygbxBjOLsxnN0Yzm4MZzeGsxvD2Y3h7MZwdmM4uzGc3RjObgxnN4azG8PZjeHsPv2Taky0JdoSbYlPH/cQ0ZZoS7QlPn3cQ0Rboi3Rlvj0cQ8RbYm2RFvi08c9RLQl2hJtiU8f9xDRlmhLtCU+fdxDRFuiLdGW+PRxDxFtibZEW+LTxz1EtCXaEm2JTx/3ENGWaEu0JT593ENEW6It0Zb49HEPEW2JtkRb4tPHPUS0JdoSbYlPH/cQ0ZZoS7QlPn3cQ0Rboi3RlhixsxvD2Y3h7MZwdmM4uzGc3RjObgxnN4azG8PZjeHsxnB2Yzi7MZzdGM5uDKL/e0Rboi3RlhiD6CGiLdGWaEuMQfQQ0ZZoS7QlxiB6iGhLtCXaEmMQPUS0JdoSbYkxiB4i2hJtibbEGEQPEW2JtkRbYgyih4i2RFuiLTEG0UNEW6It0ZYYg+ghoi3RlmhLjEH0ENGWaEu0JcYgeohoS7Ql2hJjED1EtCXaEm2JMYgeItoSbYm2xBhEDxFtibZEW+IfusaIXHtR21cAAAAASUVORK5CYII=',
              avatar_color: '#100975',
              training_run_id: 2,
              training_time: 763290,
              participant_level_score: 20,
              finished: true,
            },
          ],
        },
        {
          id: 42,
          order: 2,
          level_type: 'TRAINING_LEVEL',
          title: 'Connecting via Telnet',
          estimated_time: 600000,
          max_participant_score: 0,
          max_achievable_score: 20,
          max_participant_time: 758743,
          average_time: 702043,
          average_score: 0,
          player_data: [
            {
              id: 1,
              name: 'Jane',
              picture:
                'iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAACIUlEQVR4Xu3Ysa3YQAwFQbfknuz+S/jOl2AwVnQAg0keoAUv1a+fn59f/+vP778/r+kbxBhED3lB3yDGIHrIC/oGMQbRQ17QN4gxiB7ygr5BjEH0kBf0DWIMooe8oG8QYxA95AV9gxiD6CEv6BvEGEQPeUHfIMYgesgL+gYxBtFDXtA3iDGIHvKCvkGMQfSQF/QNYgyih7ygbxBjOLsxnN0Yzm4MZzeGsxvD2Y3h7MZwdmM4uzGc3RjObgxnN4azG8PZjeHsPv2Taky0JdoSbYlPH/cQ0ZZoS7QlPn3cQ0Rboi3Rlvj0cQ8RbYm2RFvi08c9RLQl2hJtiU8f9xDRlmhLtCU+fdxDRFuiLdGW+PRxDxFtibZEW+LTxz1EtCXaEm2JTx/3ENGWaEu0JT593ENEW6It0Zb49HEPEW2JtkRb4tPHPUS0JdoSbYlPH/cQ0ZZoS7QlPn3cQ0Rboi3RlhixsxvD2Y3h7MZwdmM4uzGc3RjObgxnN4azG8PZjeHsxnB2Yzi7MZzdGM5uDKL/e0Rboi3RlhiD6CGiLdGWaEuMQfQQ0ZZoS7QlxiB6iGhLtCXaEmMQPUS0JdoSbYkxiB4i2hJtibbEGEQPEW2JtkRbYgyih4i2RFuiLTEG0UNEW6It0ZYYg+ghoi3RlmhLjEH0ENGWaEu0JcYgeohoS7Ql2hJjED1EtCXaEm2JMYgeItoSbYm2xBhEDxFtibZEW+IfusaIXHtR21cAAAAASUVORK5CYII=',
              avatar_color: '#643165',
              training_run_id: 1,
              training_time: 758743,
              participant_level_score: 0,
              finished: true,
            },
            {
              id: 2,
              name: 'John',
              picture:
                'iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAACIUlEQVR4Xu3Ysa3YQAwFQbfknuz+S/jOl2AwVnQAg0keoAUv1a+fn59f/+vP778/r+kbxBhED3lB3yDGIHrIC/oGMQbRQ17QN4gxiB7ygr5BjEH0kBf0DWIMooe8oG8QYxA95AV9gxiD6CEv6BvEGEQPeUHfIMYgesgL+gYxBtFDXtA3iDGIHvKCvkGMQfSQF/QNYgyih7ygbxBjOLsxnN0Yzm4MZzeGsxvD2Y3h7MZwdmM4uzGc3RjObgxnN4azG8PZjeHsPv2Taky0JdoSbYlPH/cQ0ZZoS7QlPn3cQ0Rboi3Rlvj0cQ8RbYm2RFvi08c9RLQl2hJtiU8f9xDRlmhLtCU+fdxDRFuiLdGW+PRxDxFtibZEW+LTxz1EtCXaEm2JTx/3ENGWaEu0JT593ENEW6It0Zb49HEPEW2JtkRb4tPHPUS0JdoSbYlPH/cQ0ZZoS7QlPn3cQ0Rboi3RlhixsxvD2Y3h7MZwdmM4uzGc3RjObgxnN4azG8PZjeHsxnB2Yzi7MZzdGM5uDKL/e0Rboi3RlhiD6CGiLdGWaEuMQfQQ0ZZoS7QlxiB6iGhLtCXaEmMQPUS0JdoSbYkxiB4i2hJtibbEGEQPEW2JtkRbYgyih4i2RFuiLTEG0UNEW6It0ZYYg+ghoi3RlmhLjEH0ENGWaEu0JcYgeohoS7Ql2hJjED1EtCXaEm2JMYgeItoSbYm2xBhEDxFtibZEW+IfusaIXHtR21cAAAAASUVORK5CYII=',
              avatar_color: '#100975',
              training_run_id: 2,
              training_time: 758743,
              participant_level_score: 0,
              finished: true,
            },
          ],
        },
        {
          id: 43,
          order: 3,
          level_type: 'TRAINING_LEVEL',
          title: 'Privilege Escalation',
          estimated_time: 900000,
          max_participant_score: 10,
          max_achievable_score: 20,
          max_participant_time: 1081137,
          average_time: 901137,
          average_score: 5,
          player_data: [
            {
              id: 1,
              name: 'Jane',
              picture:
                'iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAACIUlEQVR4Xu3Ysa3YQAwFQbfknuz+S/jOl2AwVnQAg0keoAUv1a+fn59f/+vP778/r+kbxBhED3lB3yDGIHrIC/oGMQbRQ17QN4gxiB7ygr5BjEH0kBf0DWIMooe8oG8QYxA95AV9gxiD6CEv6BvEGEQPeUHfIMYgesgL+gYxBtFDXtA3iDGIHvKCvkGMQfSQF/QNYgyih7ygbxBjOLsxnN0Yzm4MZzeGsxvD2Y3h7MZwdmM4uzGc3RjObgxnN4azG8PZjeHsPv2Taky0JdoSbYlPH/cQ0ZZoS7QlPn3cQ0Rboi3Rlvj0cQ8RbYm2RFvi08c9RLQl2hJtiU8f9xDRlmhLtCU+fdxDRFuiLdGW+PRxDxFtibZEW+LTxz1EtCXaEm2JTx/3ENGWaEu0JT593ENEW6It0Zb49HEPEW2JtkRb4tPHPUS0JdoSbYlPH/cQ0ZZoS7QlPn3cQ0Rboi3RlhixsxvD2Y3h7MZwdmM4uzGc3RjObgxnN4azG8PZjeHsxnB2Yzi7MZzdGM5uDKL/e0Rboi3RlhiD6CGiLdGWaEuMQfQQ0ZZoS7QlxiB6iGhLtCXaEmMQPUS0JdoSbYkxiB4i2hJtibbEGEQPEW2JtkRbYgyih4i2RFuiLTEG0UNEW6It0ZYYg+ghoi3RlmhLjEH0ENGWaEu0JcYgeohoS7Ql2hJjED1EtCXaEm2JMYgeItoSbYm2xBhEDxFtibZEW+IfusaIXHtR21cAAAAASUVORK5CYII=',
              avatar_color: '#643165',
              training_run_id: 1,
              training_time: 1081137,
              participant_level_score: 10,
              finished: true,
            },
            {
              id: 2,
              name: 'John',
              picture:
                'iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAACIUlEQVR4Xu3Ysa3YQAwFQbfknuz+S/jOl2AwVnQAg0keoAUv1a+fn59f/+vP778/r+kbxBhED3lB3yDGIHrIC/oGMQbRQ17QN4gxiB7ygr5BjEH0kBf0DWIMooe8oG8QYxA95AV9gxiD6CEv6BvEGEQPeUHfIMYgesgL+gYxBtFDXtA3iDGIHvKCvkGMQfSQF/QNYgyih7ygbxBjOLsxnN0Yzm4MZzeGsxvD2Y3h7MZwdmM4uzGc3RjObgxnN4azG8PZjeHsPv2Taky0JdoSbYlPH/cQ0ZZoS7QlPn3cQ0Rboi3Rlvj0cQ8RbYm2RFvi08c9RLQl2hJtiU8f9xDRlmhLtCU+fdxDRFuiLdGW+PRxDxFtibZEW+LTxz1EtCXaEm2JTx/3ENGWaEu0JT593ENEW6It0Zb49HEPEW2JtkRb4tPHPUS0JdoSbYlPH/cQ0ZZoS7QlPn3cQ0Rboi3RlhixsxvD2Y3h7MZwdmM4uzGc3RjObgxnN4azG8PZjeHsxnB2Yzi7MZzdGM5uDKL/e0Rboi3RlhiD6CGiLdGWaEuMQfQQ0ZZoS7QlxiB6iGhLtCXaEmMQPUS0JdoSbYkxiB4i2hJtibbEGEQPEW2JtkRbYgyih4i2RFuiLTEG0UNEW6It0ZYYg+ghoi3RlmhLjEH0ENGWaEu0JcYgeohoS7Ql2hJjED1EtCXaEm2JMYgeItoSbYm2xBhEDxFtibZEW+IfusaIXHtR21cAAAAASUVORK5CYII=',
              avatar_color: '#100975',
              training_run_id: 2,
              training_time: 1081137,
              participant_level_score: 0,
              finished: true,
            },
          ],
        },
        {
          id: 44,
          order: 4,
          level_type: 'ASSESSMENT_LEVEL',
          title: 'Test Example',
          estimated_time: 300000,
          max_participant_score: 200,
          max_achievable_score: 200,
          max_participant_time: 20202,
          average_time: 20202,
          average_score: 200,
          player_data: [
            {
              id: 1,
              name: 'Jane',
              picture:
                'iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAACIUlEQVR4Xu3Ysa3YQAwFQbfknuz+S/jOl2AwVnQAg0keoAUv1a+fn59f/+vP778/r+kbxBhED3lB3yDGIHrIC/oGMQbRQ17QN4gxiB7ygr5BjEH0kBf0DWIMooe8oG8QYxA95AV9gxiD6CEv6BvEGEQPeUHfIMYgesgL+gYxBtFDXtA3iDGIHvKCvkGMQfSQF/QNYgyih7ygbxBjOLsxnN0Yzm4MZzeGsxvD2Y3h7MZwdmM4uzGc3RjObgxnN4azG8PZjeHsPv2Taky0JdoSbYlPH/cQ0ZZoS7QlPn3cQ0Rboi3Rlvj0cQ8RbYm2RFvi08c9RLQl2hJtiU8f9xDRlmhLtCU+fdxDRFuiLdGW+PRxDxFtibZEW+LTxz1EtCXaEm2JTx/3ENGWaEu0JT593ENEW6It0Zb49HEPEW2JtkRb4tPHPUS0JdoSbYlPH/cQ0ZZoS7QlPn3cQ0Rboi3RlhixsxvD2Y3h7MZwdmM4uzGc3RjObgxnN4azG8PZjeHsxnB2Yzi7MZzdGM5uDKL/e0Rboi3RlhiD6CGiLdGWaEuMQfQQ0ZZoS7QlxiB6iGhLtCXaEmMQPUS0JdoSbYkxiB4i2hJtibbEGEQPEW2JtkRbYgyih4i2RFuiLTEG0UNEW6It0ZYYg+ghoi3RlmhLjEH0ENGWaEu0JcYgeohoS7Ql2hJjED1EtCXaEm2JMYgeItoSbYm2xBhEDxFtibZEW+IfusaIXHtR21cAAAAASUVORK5CYII=',
              avatar_color: '#643165',
              training_run_id: 1,
              training_time: 20202,
              participant_level_score: 200,
              finished: true,
            },
            {
              id: 2,
              name: 'John',
              picture:
                'iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAACIUlEQVR4Xu3Ysa3YQAwFQbfknuz+S/jOl2AwVnQAg0keoAUv1a+fn59f/+vP778/r+kbxBhED3lB3yDGIHrIC/oGMQbRQ17QN4gxiB7ygr5BjEH0kBf0DWIMooe8oG8QYxA95AV9gxiD6CEv6BvEGEQPeUHfIMYgesgL+gYxBtFDXtA3iDGIHvKCvkGMQfSQF/QNYgyih7ygbxBjOLsxnN0Yzm4MZzeGsxvD2Y3h7MZwdmM4uzGc3RjObgxnN4azG8PZjeHsPv2Taky0JdoSbYlPH/cQ0ZZoS7QlPn3cQ0Rboi3Rlvj0cQ8RbYm2RFvi08c9RLQl2hJtiU8f9xDRlmhLtCU+fdxDRFuiLdGW+PRxDxFtibZEW+LTxz1EtCXaEm2JTx/3ENGWaEu0JT593ENEW6It0Zb49HEPEW2JtkRb4tPHPUS0JdoSbYlPH/cQ0ZZoS7QlPn3cQ0Rboi3RlhixsxvD2Y3h7MZwdmM4uzGc3RjObgxnN4azG8PZjeHsxnB2Yzi7MZzdGM5uDKL/e0Rboi3RlhiD6CGiLdGWaEuMQfQQ0ZZoS7QlxiB6iGhLtCXaEmMQPUS0JdoSbYkxiB4i2hJtibbEGEQPEW2JtkRbYgyih4i2RFuiLTEG0UNEW6It0ZYYg+ghoi3RlmhLjEH0ENGWaEu0JcYgeohoS7Ql2hJjED1EtCXaEm2JMYgeItoSbYm2xBhEDxFtibZEW+IfusaIXHtR21cAAAAASUVORK5CYII=',
              avatar_color: '#100975',
              training_run_id: 2,
              training_time: 20202,
              participant_level_score: 200,
              finished: true,
            },
          ],
        },
        {
          id: 45,
          order: 5,
          level_type: 'ASSESSMENT_LEVEL',
          title: 'Assessment Example',
          estimated_time: 300000,
          max_participant_score: 0,
          max_achievable_score: 100,
          max_participant_time: 7610,
          average_time: 7610,
          average_score: 0,
          player_data: [
            {
              id: 1,
              name: 'Jane',
              picture:
                'iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAACIUlEQVR4Xu3Ysa3YQAwFQbfknuz+S/jOl2AwVnQAg0keoAUv1a+fn59f/+vP778/r+kbxBhED3lB3yDGIHrIC/oGMQbRQ17QN4gxiB7ygr5BjEH0kBf0DWIMooe8oG8QYxA95AV9gxiD6CEv6BvEGEQPeUHfIMYgesgL+gYxBtFDXtA3iDGIHvKCvkGMQfSQF/QNYgyih7ygbxBjOLsxnN0Yzm4MZzeGsxvD2Y3h7MZwdmM4uzGc3RjObgxnN4azG8PZjeHsPv2Taky0JdoSbYlPH/cQ0ZZoS7QlPn3cQ0Rboi3Rlvj0cQ8RbYm2RFvi08c9RLQl2hJtiU8f9xDRlmhLtCU+fdxDRFuiLdGW+PRxDxFtibZEW+LTxz1EtCXaEm2JTx/3ENGWaEu0JT593ENEW6It0Zb49HEPEW2JtkRb4tPHPUS0JdoSbYlPH/cQ0ZZoS7QlPn3cQ0Rboi3RlhixsxvD2Y3h7MZwdmM4uzGc3RjObgxnN4azG8PZjeHsxnB2Yzi7MZzdGM5uDKL/e0Rboi3RlhiD6CGiLdGWaEuMQfQQ0ZZoS7QlxiB6iGhLtCXaEmMQPUS0JdoSbYkxiB4i2hJtibbEGEQPEW2JtkRbYgyih4i2RFuiLTEG0UNEW6It0ZYYg+ghoi3RlmhLjEH0ENGWaEu0JcYgeohoS7Ql2hJjED1EtCXaEm2JMYgeItoSbYm2xBhEDxFtibZEW+IfusaIXHtR21cAAAAASUVORK5CYII=',
              avatar_color: '#643165',
              training_run_id: 1,
              training_time: 7610,
              participant_level_score: 0,
              finished: true,
            },
            {
              id: 2,
              name: 'John',
              picture:
                'iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAACIUlEQVR4Xu3Ysa3YQAwFQbfknuz+S/jOl2AwVnQAg0keoAUv1a+fn59f/+vP778/r+kbxBhED3lB3yDGIHrIC/oGMQbRQ17QN4gxiB7ygr5BjEH0kBf0DWIMooe8oG8QYxA95AV9gxiD6CEv6BvEGEQPeUHfIMYgesgL+gYxBtFDXtA3iDGIHvKCvkGMQfSQF/QNYgyih7ygbxBjOLsxnN0Yzm4MZzeGsxvD2Y3h7MZwdmM4uzGc3RjObgxnN4azG8PZjeHsPv2Taky0JdoSbYlPH/cQ0ZZoS7QlPn3cQ0Rboi3Rlvj0cQ8RbYm2RFvi08c9RLQl2hJtiU8f9xDRlmhLtCU+fdxDRFuiLdGW+PRxDxFtibZEW+LTxz1EtCXaEm2JTx/3ENGWaEu0JT593ENEW6It0Zb49HEPEW2JtkRb4tPHPUS0JdoSbYlPH/cQ0ZZoS7QlPn3cQ0Rboi3RlhixsxvD2Y3h7MZwdmM4uzGc3RjObgxnN4azG8PZjeHsxnB2Yzi7MZzdGM5uDKL/e0Rboi3RlhiD6CGiLdGWaEuMQfQQ0ZZoS7QlxiB6iGhLtCXaEmMQPUS0JdoSbYkxiB4i2hJtibbEGEQPEW2JtkRbYgyih4i2RFuiLTEG0UNEW6It0ZYYg+ghoi3RlmhLjEH0ENGWaEu0JcYgeohoS7Ql2hJjED1EtCXaEm2JMYgeItoSbYm2xBhEDxFtibZEW+IfusaIXHtR21cAAAAASUVORK5CYII=',
              avatar_color: '#100975',
              training_run_id: 2,
              training_time: 7610,
              participant_level_score: 0,
              finished: true,
            },
          ],
        },
      ]
    }
  }
};
