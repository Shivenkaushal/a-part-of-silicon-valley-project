var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
var myVoice = new p5.Speech(); // new P5.Speech object

myRec.continuous = true; // do continuous recognition
//myRec.interimResults = true; // allow partial recognition (faster, less accurate)


function setup() {
	// graphics stuff:
	createCanvas(windowWidth, windowHeight);
	background("black");
	fill("white");
	// instructions:
	textSize(32);
	textAlign(CENTER);
	text("choose first button or second button", width / 2, height / 2);
	myRec.onResult = showResult;
	myRec.start();
  
  myVoice.speak("choose first button or second button");

}

function draw() {
	// why draw when you can talk?
}

function showResult() {
	if (myRec.resultValue === true) {
		background("black");
		
    //myVoice.interrupt = checkbox.elt.checked;
		
      if(myRec.resultString === "first button" || myRec.resultString === "second button" ){
     myVoice.speak(myRec.resultString); 
        console.log(myRec.resultString);
        text(myRec.resultString, width / 2, height / 2);
      }
		else {
          text("undefined", width / 2, height / 2);
          myVoice.speak("undefined");
        }
	}
}