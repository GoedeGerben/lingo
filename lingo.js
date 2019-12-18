var input = "appel";
var playing = true;
var pogingen = 0;
var word = words[Math.floor(Math.random() * words.length)];

console.log(word)
for (var c = 0; c < word.length; c++) {
 	console.log(word.charAt(c));
}

document.getElementById("letter1").innerHTML = "De eerste letter: " + word.charAt(0);//shows the first letter of the word on the page
function submitWord() {
	input = document.getElementById("input").value;
	var correct = 0;
	if (playing) {
		for (var a = 0; a < input.length; a++) {
			var letter = document.createElement("div");
			letter.innerHTML = input.charAt(a);
			letter.setAttribute("id", "letters"+a);
			document.getElementById("textContainer").appendChild(letter);
	 		if (word.charAt(a) == input.charAt(a)) {
	 			letter.style.backgroundColor = "green";
	 			letter.style.borderRadius = null;
	 			correct++
	 		}else if (word.indexOf(input.charAt(a)) >= 0) {
	 			letter.style.backgroundColor = "yellow";
	 			letter.style.borderRadius = "50%";
	 		}else {
	 			letter.style.backgroundColor = "white";
	 			letter.style.borderRadius = null;
	 		}
		}
	}
	pogingen++
	if (correct == 5) {
		alert("Je wint.");
		playing = false;
	}
	if (pogingen == 5 && correct < 5) {
		alert("Je verliest. haha.");
		playing = false;
	}
	return false;
}