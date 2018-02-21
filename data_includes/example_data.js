//var shuffleSequence = seq("setcounter","intro",sepWith("sep", rshuffle(startsWith("a"),startsWith("b"))))
//var shuffleSequence = seq("intro", "sst1", rshuffle("sst", "ssf", "ssu", "ext", "exf", "exu"));
//var randomCode = Math.random().toString(36).substr(2,9);
//var completionCode = String("QUANT-" + randomCode);
//var completionMessage = "Thank you for your participation. The results were successfully transmitted. Your participation code is: "+ completionCode;
var shuffleSequence =seq("setcounter","consent","intro","practice1","practice2","practice3","realexperiment",rshuffle(startsWith("quant")),"exit");
//var shuffleSequence =seq("setcounter",rshuffle(startsWith("quant")),"exit");
//var shuffleSequence = seq("practicea1","exit");
//var shuffleSequence = seq("practiceb1",rshuffle(startsWith("quant")));

//var practiceItemTypes = ["practice"];

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
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true,
        countsForProgressBar: true,
        continueMessage: "Click here to continue."
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
    }
  ];

var Blanka=blank("_________________________________________________________________")
var annequestion1="<p>Anne: ____________________?</p>"
var taskquestion="<p><i>What do you think Anne's question was?</i></p>"
var items = [
    ["sep", "Separator", { }],
    ["consent", "Form", {consentRequired: true, html: { include: "intro.html" }, validators: {},continueMessage:"Click here to continue."} ],
    ["intro", "Form", {html: { include: "example_intro0.html" }, validators: {},continueMessage:"Click here to continue."} ],
    ["ainstructions", "Form", {html: { include: "example_intro1.html" },validators: {},continueMessage:"Click here to continue."} ],
    ["binstructions", "Form", {html: { include: "example_intro2.html" },validators: {} ,continueMessage:"Click here to continue."}],
     ["realexperiment", "Form", {html: { include: "example_intro3.html" },validators: {},continueMessage:"Click here to continue."} ],
    ["exit", "Form", {html: { include: "exit.html" },validators: {},continueMessage:"Click here to continue."} ],


["practicea1","Form", {html:"<p>Remember Ann can't see the picture, but Bob can. So Ann is asking Bob a question about the picture.</p>"+annequestion1+ "<p>Bob: There are more stars than moons.</p>"+ "<p><i>What do you think Anne's question was?</i> (Keep this question in mind because you’ll use it later!)</p>"+ Blanka.html, validators:Blanka.validators}],
["practiceb1", "VraagX", {html:{ include: "practiceb1.html" }}],
["fullexperimentmessage", "Form", {html: {include: "fullexperimentmessage.html"},continueMessage:"Click here to continue."}],
["practicefull1","Form", {html:"<p>Remember Ann can't see the picture, but Bob can. So Ann is asking Bob a question about the picture.</p>"+annequestion1+ "<p>Bob: There are two types of shapes. </p>"+ taskquestion+ Blanka.html,validators:Blanka.validators}, "VraagX", {html:{ include: "practicefull1.html" }}],
["practicefull2","Form", {html:"<p>Remember Ann can't see the picture, but Bob can. So Ann is asking Bob a question about the picture.</p>"+annequestion1+ "<p>Bob: Moons are yellow and stars are blue.</p>"+ taskquestion+ Blanka.html,validators:Blanka.validators}, "VraagX", {html:{ include: "practicefull2.html" }}],

["practice1","Form", {html: {include: "practiceb1.html" }}],
["practice2","Form", {html: {include: "practicefull1.html" }}],
["practice3","Form", {html: {include: "practicefull2.html" }}],

[["quant.tr",1],"Form", {html: {include: "quant_tr_1.html" }}],
[["quant.tr",2],"Form", {html: {include: "quant_tr_2.html" }}],
[["quant.tr",3],"Form", {html: {include: "quant_tr_3.html" }}],
[["quant.tr",4],"Form", {html: {include: "quant_tr_4.html" }}],
[["quant.tr",5],"Form", {html: {include: "quant_tr_5.html" }}],
[["quant.tr",6],"Form", {html: {include: "quant_tr_6.html" }}],
[["quant.tr",7],"Form", {html: {include: "quant_tr_7.html" }}],
[["quant.tr",8],"Form", {html: {include: "quant_tr_8.html" }}],
[["quant.tr",9],"Form", {html: {include: "quant_tr_9.html" }}],
[["quant.tr",10],"Form", {html: {include: "quant_tr_10.html" }}],
[["quant.tr",11],"Form", {html: {include: "quant_tr_11.html" }}],
[["quant.tr",12],"Form", {html: {include: "quant_tr_12.html" }}],
[["quant.tr",13],"Form", {html: {include: "quant_tr_13.html" }}],
[["quant.tr",14],"Form", {html: {include: "quant_tr_14.html" }}],
[["quant.tr",15],"Form", {html: {include: "quant_tr_15.html" }}],
[["quant.tr",16],"Form", {html: {include: "quant_tr_16.html" }}],
[["quant.tr",17],"Form", {html: {include: "quant_tr_17.html" }}],
[["quant.tr",18],"Form", {html: {include: "quant_tr_18.html" }}],
[["quant.tr",19],"Form", {html: {include: "quant_tr_19.html" }}],
[["quant.tr",20],"Form", {html: {include: "quant_tr_20.html" }}],
[["quant.tr",21],"Form", {html: {include: "quant_tr_21.html" }}],
[["quant.tr",22],"Form", {html: {include: "quant_tr_22.html" }}],
[["quant.tr",23],"Form", {html: {include: "quant_tr_23.html" }}],
[["quant.tr",24],"Form", {html: {include: "quant_tr_24.html" }}],
[["quant.tr",25],"Form", {html: {include: "quant_tr_25.html" }}],
[["quant.tr",26],"Form", {html: {include: "quant_tr_26.html" }}],
[["quant.tr",27],"Form", {html: {include: "quant_tr_27.html" }}],
[["quant.tr",28],"Form", {html: {include: "quant_tr_28.html" }}],
[["quant.tr",29],"Form", {html: {include: "quant_tr_29.html" }}],
[["quant.tr",30],"Form", {html: {include: "quant_tr_30.html" }}],


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

   return {
       html: "<p>" + ihtml+ "</p>" + e,
       validators: validators
   };
   //return "<p>" + ihtml+ "</p>" + e
}
