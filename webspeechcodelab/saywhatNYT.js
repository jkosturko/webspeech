
// <!DOCTYPE html>
// <meta charset="utf-8">
// <title>Web Speech API Demo</title>

// <h1>NY Times</h1>
// <div id="status">
// </div>
// <p></p>
// <form action="http://google.com/search" method="get">

alert('sayWhat?');
document.getElementById("masthead-search-button").innerHTML('
  <input name="q" id="input_field" size="100"><button onclick="reco.toggleStartStop()" style="border: 0; background-color:transparent"><img id="status_img" src="mic.gif" alt="Start"></button>
');



// <script src="webspeech.js"></script>

var reco = new WebSpeechRecognition();
reco.statusText('status');
reco.statusImage('status_img');
reco.finalResults('input_field');

reco.onEnd = function() {
	if (reco.final_transcript.indexOf("homepage") != -1) {
			window.location.href = 'http://www.nytimes.com/';
	}

	if (reco.final_transcript.indexOf("theater") != -1) {
			window.location.href = 'http://www.nytimes.com/pages/theater/index.html';
	}

	if (reco.final_transcript.indexOf("sports") != -1) {
			window.location.href = 'http://www.nytimes.com/pages/sports/index.html';
	}

	if (reco.final_transcript.indexOf("baseball") != -1) {
			window.location.href = 'http://www.nytimes.com/pages/sports/baseball/index.html';
	}

	if (reco.final_transcript.indexOf("football") != -1) {
			window.location.href = 'http://www.nytimes.com/pages/sports/football/index.html';
	}

	if (reco.final_transcript.indexOf("email") != -1) {
		window.location.href = 'http://www.nytimes.com/most-popular-emailed';
	}

	if (reco.final_transcript.indexOf("restaurant") != -1) {
		window.location.href = 'http://www.nytimes.com/restaurants/search/';
	}

	if (reco.final_transcript.indexOf("today's paper") != -1) {
			window.location.href = 'http://www.nytimes.com/pages/todayspaper/index.html';
	}

	if (reco.final_transcript.indexOf("weather") != -1) {
			window.location.href = 'http://www.nytimes.com/weather';
	}

	if (reco.final_transcript.indexOf("Bill Cunningham") != -1) {
				window.location.href = 'http://www.nytimes.com/video/on-the-street/';
	}

	if (reco.final_transcript.indexOf("video") != -1) {

		if (reco.final_transcript.indexOf("business") != -1) {
				window.location.href = 'http://www.nytimes.com/video/business/';
		}

		if (reco.final_transcript.indexOf("technology") != -1) {
				window.location.href = 'http://www.nytimes.com/video/technology/';
		}		

	}	

	if (reco.final_transcript.indexOf("article") != -1) {
			
		if (reco.final_transcript.indexOf("random") != -1) {
			window.location.href = 'http://www.nytimes.com/2014/01/30/us/politics/democrats-look-to-tie-gop-senate-candidates-to-unpopular-house.html';
		}
	}

	console.log("Bill Cunningham, video: business, sports, baseball, most emailed, homepage")

  if (reco.final_transcript != '') {
  	console.log(reco.final_transcript);
   // input_field.form.submit();
  }
};