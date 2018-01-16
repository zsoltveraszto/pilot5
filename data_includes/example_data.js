//var shuffleSequence = seq("setcounter","intro",sepWith("sep", rshuffle(startsWith("a"),startsWith("b"))))
//var shuffleSequence = seq("intro", "sst1", rshuffle("sst", "ssf", "ssu", "ext", "exf", "exu"));
var shuffleSequence = seq("setcounter","intro","ainstructions","practicea1","binstructions","practiceb1","fullexperimentmessage","practicefull1","practicefull2","realexperiment",rshuffle(startsWith("quant")));
var completionMessage = "Thank you for your participation. The results were successfully transmitted. Your participation code is: "
var randomCode = Math.random().toString(36).substr(2,9); 
var completionCode = String("NPI-" + randomCode); 

var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence."
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(Bad)", rightComment: "(Good)"
    },
    "Question", {
        hasCorrect: true
    },
//    "Message", {
//        hideProgressBar: true
//    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true,
        countsForProgressBar: true
//        continueMessage: "Click here to continue."
    },
    "Vraag", {
        as: [["1", "1. Good"], ["0", "0. Not good"]],
        presentAsScale: true,
        showNumbers: false,
        //leftComment: "Good",
        //rightComment: "Not good",
    },
    "Zin", {
        hideProgressBar: true,
        mode: "self-paced reading",
        display: "in place",
        blankText: "(Press the space bar to continue.)",
   },
    "VraagX", {
      hideProgressBar: true
    },
    "Message", {
      hideProgressBar: true,
      transfer: "keypress"
    }];

var items = [
    ["sep", "Separator", { }],
    ["intro", "Form", {
        html: { include: "example_intro0.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],
    ["ainstructions", "Form", {
        html: { include: "example_intro1.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],
    ["binstructions", "Form", {
        html: { include: "example_intro2.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],
    ["realexperiment", "Form", {
        html: { include: "example_intro3.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],


["practicea1","Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: There are more stars than moons.</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}],
["practiceb1", "Zin", {s: ["There are more stars than moons."]}, "VraagX", {html:{ include: "practiceb1.html" }}],
["fullexperimentmessage", "Form", {html: {include: "fullexperimentmessage.html"}}],
["practicefull1","Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: There are three red stars. </p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["There are three red stars. "]}, "VraagX", {html:{ include: "practicefull1.html" }}],
["practicefull2","Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: More of the stars are green than yellow.</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["More of the stars are green than yellow."]}, "VraagX", {html:{ include: "practicefull2.html" }}],



[["quant.tr",1],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the shapes are red</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the shapes are red"]}, "VraagX", {html:{ include: "quant_tr_1.html" }}],
[["quant.fa",1],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the shapes are red</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the shapes are red"]}, "VraagX", {html:{ include: "quant_fa_1.html" }}],
[["quant.ta",1],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the shapes are red</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the shapes are red"]}, "VraagX", {html:{ include: "quant_ta_1.html" }}],
[["quant.tr",2],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the shapes are green</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the shapes are green"]}, "VraagX", {html:{ include: "quant_tr_2.html" }}],
[["quant.fa",2],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the shapes are green</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the shapes are green"]}, "VraagX", {html:{ include: "quant_fa_2.html" }}],
[["quant.ta",2],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the shapes are green</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the shapes are green"]}, "VraagX", {html:{ include: "quant_ta_2.html" }}],
[["quant.tr",3],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the shapes are blue</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the shapes are blue"]}, "VraagX", {html:{ include: "quant_tr_3.html" }}],
[["quant.fa",3],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the shapes are blue</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the shapes are blue"]}, "VraagX", {html:{ include: "quant_fa_3.html" }}],
[["quant.ta",3],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the shapes are blue</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the shapes are blue"]}, "VraagX", {html:{ include: "quant_ta_3.html" }}],
[["quant.tr",4],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the shapes are yellow</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the shapes are yellow"]}, "VraagX", {html:{ include: "quant_tr_4.html" }}],
[["quant.fa",4],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the shapes are yellow</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the shapes are yellow"]}, "VraagX", {html:{ include: "quant_fa_4.html" }}],
[["quant.ta",4],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the shapes are yellow</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the shapes are yellow"]}, "VraagX", {html:{ include: "quant_ta_4.html" }}],
[["quant.tr",5],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the triangles are red</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the triangles are red"]}, "VraagX", {html:{ include: "quant_tr_5.html" }}],
[["quant.fa",5],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the triangles are red</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the triangles are red"]}, "VraagX", {html:{ include: "quant_fa_5.html" }}],
[["quant.ta",5],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the triangles are red</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the triangles are red"]}, "VraagX", {html:{ include: "quant_ta_5.html" }}],
[["quant.tr",6],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the triangles are green</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the triangles are green"]}, "VraagX", {html:{ include: "quant_tr_6.html" }}],
[["quant.fa",6],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the triangles are green</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the triangles are green"]}, "VraagX", {html:{ include: "quant_fa_6.html" }}],
[["quant.ta",6],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the triangles are green</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the triangles are green"]}, "VraagX", {html:{ include: "quant_ta_6.html" }}],
[["quant.tr",7],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the triangles are black</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the triangles are black"]}, "VraagX", {html:{ include: "quant_tr_7.html" }}],
[["quant.fa",7],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the triangles are black</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the triangles are black"]}, "VraagX", {html:{ include: "quant_fa_7.html" }}],
[["quant.ta",7],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the triangles are black</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the triangles are black"]}, "VraagX", {html:{ include: "quant_ta_7.html" }}],
[["quant.tr",8],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the triangles are orange</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the triangles are orange"]}, "VraagX", {html:{ include: "quant_tr_8.html" }}],
[["quant.fa",8],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the triangles are orange</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the triangles are orange"]}, "VraagX", {html:{ include: "quant_fa_8.html" }}],
[["quant.ta",8],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the triangles are orange</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the triangles are orange"]}, "VraagX", {html:{ include: "quant_ta_8.html" }}],
[["quant.tr",9],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the circles are blue</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the circles are blue"]}, "VraagX", {html:{ include: "quant_tr_9.html" }}],
[["quant.fa",9],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the circles are blue</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the circles are blue"]}, "VraagX", {html:{ include: "quant_fa_9.html" }}],
[["quant.ta",9],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the circles are blue</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the circles are blue"]}, "VraagX", {html:{ include: "quant_ta_9.html" }}],
[["quant.tr",10],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the circles are yellow</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the circles are yellow"]}, "VraagX", {html:{ include: "quant_tr_10.html" }}],
[["quant.fa",10],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the circles are yellow</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the circles are yellow"]}, "VraagX", {html:{ include: "quant_fa_10.html" }}],
[["quant.ta",10],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the circles are yellow</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the circles are yellow"]}, "VraagX", {html:{ include: "quant_ta_10.html" }}],
[["quant.tr",11],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the circles are black</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the circles are black"]}, "VraagX", {html:{ include: "quant_tr_11.html" }}],
[["quant.fa",11],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the circles are black</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the circles are black"]}, "VraagX", {html:{ include: "quant_fa_11.html" }}],
[["quant.ta",11],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the circles are black</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the circles are black"]}, "VraagX", {html:{ include: "quant_ta_11.html" }}],
[["quant.tr",12],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the circles are orange</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the circles are orange"]}, "VraagX", {html:{ include: "quant_tr_12.html" }}],
[["quant.fa",12],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the circles are orange</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the circles are orange"]}, "VraagX", {html:{ include: "quant_fa_12.html" }}],
[["quant.ta",12],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the circles are orange</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the circles are orange"]}, "VraagX", {html:{ include: "quant_ta_12.html" }}],
[["quant.tr",13],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the squares are red</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the squares are red"]}, "VraagX", {html:{ include: "quant_tr_13.html" }}],
[["quant.fa",13],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the squares are red</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the squares are red"]}, "VraagX", {html:{ include: "quant_fa_13.html" }}],
[["quant.ta",13],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the squares are red</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the squares are red"]}, "VraagX", {html:{ include: "quant_ta_13.html" }}],
[["quant.tr",14],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the squares are yellow</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the squares are yellow"]}, "VraagX", {html:{ include: "quant_tr_14.html" }}],
[["quant.fa",14],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the squares are yellow</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the squares are yellow"]}, "VraagX", {html:{ include: "quant_fa_14.html" }}],
[["quant.ta",14],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the squares are yellow</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the squares are yellow"]}, "VraagX", {html:{ include: "quant_ta_14.html" }}],
[["quant.tr",15],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the squares are black</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the squares are black"]}, "VraagX", {html:{ include: "quant_tr_15.html" }}],
[["quant.fa",15],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the squares are black</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the squares are black"]}, "VraagX", {html:{ include: "quant_fa_15.html" }}],
[["quant.ta",15],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: Some of the squares are black</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["Some of the squares are black"]}, "VraagX", {html:{ include: "quant_ta_15.html" }}],
[["quant.tr",16],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the circle that is green</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the circle that is green"]}, "VraagX", {html:{ include: "quant_tr_16.html" }}],
[["quant.fa",16],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the circle that is green</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the circle that is green"]}, "VraagX", {html:{ include: "quant_fa_16.html" }}],
[["quant.ta",16],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the circle that is green</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the circle that is green"]}, "VraagX", {html:{ include: "quant_ta_16.html" }}],
[["quant.tr",17],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the triangle that is green</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the triangle that is green"]}, "VraagX", {html:{ include: "quant_tr_17.html" }}],
[["quant.fa",17],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the triangle that is green</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the triangle that is green"]}, "VraagX", {html:{ include: "quant_fa_17.html" }}],
[["quant.ta",17],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the triangle that is green</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the triangle that is green"]}, "VraagX", {html:{ include: "quant_ta_17.html" }}],
[["quant.tr",18],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the square that is yellow</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the square that is yellow"]}, "VraagX", {html:{ include: "quant_tr_18.html" }}],
[["quant.fa",18],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the square that is yellow</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the square that is yellow"]}, "VraagX", {html:{ include: "quant_fa_18.html" }}],
[["quant.ta",18],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the square that is yellow</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the square that is yellow"]}, "VraagX", {html:{ include: "quant_ta_18.html" }}],
[["quant.tr",19],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the circle that is red</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the circle that is red"]}, "VraagX", {html:{ include: "quant_tr_19.html" }}],
[["quant.fa",19],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the circle that is red</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the circle that is red"]}, "VraagX", {html:{ include: "quant_fa_19.html" }}],
[["quant.ta",19],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the circle that is red</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the circle that is red"]}, "VraagX", {html:{ include: "quant_ta_19.html" }}],
[["quant.tr",20],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the square that is blue</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the square that is blue"]}, "VraagX", {html:{ include: "quant_tr_20.html" }}],
[["quant.fa",20],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the square that is blue</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the square that is blue"]}, "VraagX", {html:{ include: "quant_fa_20.html" }}],
[["quant.ta",20],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the square that is blue</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the square that is blue"]}, "VraagX", {html:{ include: "quant_ta_20.html" }}],
[["quant.tr",21],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the circle that is yellow</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the circle that is yellow"]}, "VraagX", {html:{ include: "quant_tr_21.html" }}],
[["quant.fa",21],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the circle that is yellow</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the circle that is yellow"]}, "VraagX", {html:{ include: "quant_fa_21.html" }}],
[["quant.ta",21],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the circle that is yellow</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the circle that is yellow"]}, "VraagX", {html:{ include: "quant_ta_21.html" }}],
[["quant.tr",22],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the triangle that is red</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the triangle that is red"]}, "VraagX", {html:{ include: "quant_tr_22.html" }}],
[["quant.fa",22],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the triangle that is red</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the triangle that is red"]}, "VraagX", {html:{ include: "quant_fa_22.html" }}],
[["quant.ta",22],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the triangle that is red</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the triangle that is red"]}, "VraagX", {html:{ include: "quant_ta_22.html" }}],
[["quant.tr",23],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the triangle that is blue</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the triangle that is blue"]}, "VraagX", {html:{ include: "quant_tr_23.html" }}],
[["quant.fa",23],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the triangle that is blue</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the triangle that is blue"]}, "VraagX", {html:{ include: "quant_fa_23.html" }}],
[["quant.ta",23],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the triangle that is blue</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the triangle that is blue"]}, "VraagX", {html:{ include: "quant_ta_23.html" }}],
[["quant.tr",24],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the square that is green</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the square that is green"]}, "VraagX", {html:{ include: "quant_tr_24.html" }}],
[["quant.fa",24],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the square that is green</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the square that is green"]}, "VraagX", {html:{ include: "quant_fa_24.html" }}],
[["quant.ta",24],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the square that is green</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the square that is green"]}, "VraagX", {html:{ include: "quant_ta_24.html" }}],
[["quant.tr",25],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the circle that is blue</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the circle that is blue"]}, "VraagX", {html:{ include: "quant_tr_25.html" }}],
[["quant.fa",25],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the circle that is blue</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the circle that is blue"]}, "VraagX", {html:{ include: "quant_fa_25.html" }}],
[["quant.ta",25],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the circle that is blue</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the circle that is blue"]}, "VraagX", {html:{ include: "quant_ta_25.html" }}],
[["quant.tr",26],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the triangle that is yellow</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the triangle that is yellow"]}, "VraagX", {html:{ include: "quant_tr_26.html" }}],
[["quant.fa",26],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the triangle that is yellow</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the triangle that is yellow"]}, "VraagX", {html:{ include: "quant_fa_26.html" }}],
[["quant.ta",26],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the triangle that is yellow</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the triangle that is yellow"]}, "VraagX", {html:{ include: "quant_ta_26.html" }}],
[["quant.tr",27],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the square that is black</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the square that is black"]}, "VraagX", {html:{ include: "quant_tr_27.html" }}],
[["quant.fa",27],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the square that is black</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the square that is black"]}, "VraagX", {html:{ include: "quant_fa_27.html" }}],
[["quant.ta",27],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the square that is black</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the square that is black"]}, "VraagX", {html:{ include: "quant_ta_27.html" }}],
[["quant.tr",28],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the circle that is orange</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the circle that is orange"]}, "VraagX", {html:{ include: "quant_tr_28.html" }}],
[["quant.fa",28],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the circle that is orange</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the circle that is orange"]}, "VraagX", {html:{ include: "quant_fa_28.html" }}],
[["quant.ta",28],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the circle that is orange</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the circle that is orange"]}, "VraagX", {html:{ include: "quant_ta_28.html" }}],
[["quant.tr",29],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the square that is orange</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the square that is orange"]}, "VraagX", {html:{ include: "quant_tr_29.html" }}],
[["quant.fa",29],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the square that is orange</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the square that is orange"]}, "VraagX", {html:{ include: "quant_fa_29.html" }}],
[["quant.ta",29],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the square that is orange</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the square that is orange"]}, "VraagX", {html:{ include: "quant_ta_29.html" }}],
[["quant.tr",30],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the triangle that is black</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the triangle that is black"]}, "VraagX", {html:{ include: "quant_tr_30.html" }}],
[["quant.fa",30],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the triangle that is black</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the triangle that is black"]}, "VraagX", {html:{ include: "quant_fa_30.html" }}],
[["quant.ta",30],"Form", {html:"<p>Anne: ____________________?</p>"+ "<p>Bob: It is the triangle that is black</p>"+ "<p><i>What do you think Anne's question was?</i></p>"+ blank("_________________________________________________________________")}, "Zin", {s: ["It is the triangle that is black"]}, "VraagX", {html:{ include: "quant_ta_30.html" }}]


];



function blank(a, b) {
   var sentence = b ? b : a;
   var n = b ? a : null;

   var seq = [""];
   var inBlank = false;
   for (var i = 0; i < sentence.length; ++i) {
       var c = sentence.charAt(i)
       if (inBlank) {
           if (c == '_')
               (seq[seq.length-1])++;
           else {
               seq.push(c);
               inBlank = true;
           }
       }
       else {
           if (c != '_')
               seq[seq.length-1] += c
           else {
               seq.push(1);
               inBlank = true;
           }
       }
   }

   var ihtml = "";
   var bcount = 0;
   for (var i = 0; i < seq.length; ++i) {
       if (typeof(seq[i]) == "number") {
           ++bcount;
           var input = " <input type='text' name='blank-" + bcount + "' size='" + (n ? n : seq[i]) + "'></input> ";
           ihtml += input;
       }
       else {
           ihtml += $("<div>").text(seq[i])[0].innerHTML;
       }
   }

   var e = "<p>";
   var validators = { };
   var bcount = 0;
   for (var i = 0; i < seq.length; ++i) {
       if (typeof(seq[i]) == "number") {
           ++bcount;
           e += "<label class='error' for='blank-" + bcount + "'></label>";
           validators['blank-' + bcount] = function (s) { if (s && ! s.match(/^\s*$/)) return true; else return "You must fill in the blank."; }
       }
   }
   e += "</p>"

//   return {
//       html: "<p>" + ihtml+ "</p>" + e,
//       validators: validators
//   };
   return "<p>" + ihtml+ "</p>" + e
}
