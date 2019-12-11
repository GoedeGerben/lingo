var input = "appel";
var newDiv = true;
var pogingen = 0;
var word = words[Math.floor(Math.random() * words.length)];
console.log(word)
for (var c = 0; c < word.length; c++) {
 	console.log(word.charAt(c));
}
document.getElementById("letter1").innerHTML = "De eerste letter: " + word.charAt(0);//shows the first letter of the word on the page
function submit() {
	input = document.getElementById("input").value;
	var correct = 0;
	for (var a = 0; a < input.length; a++) {
		document.getElementById("letters"+a).innerHTML = input.charAt(a);
 		if (word.charAt(a) == input.charAt(a)) {
 			document.getElementById("letters"+a).style.backgroundColor = "green";
 			document.getElementById("letters"+a).style.borderRadius = null;
 			correct++
 		}else if (word.indexOf(input.charAt(a)) >= 0) {
 			document.getElementById("letters"+a).style.backgroundColor = "yellow";
 			document.getElementById("letters"+a).style.borderRadius = "50%";
 		}else {
 			document.getElementById("letters"+a).style.backgroundColor = "white";
 			document.getElementById("letters"+a).style.borderRadius = null;
 		}
	}
	pogingen++
	if (correct == 5) {
		alert("Je wint.");
		location.reload();
	}
	if (pogingen == 5 && correct < 5) {
		alert("Je verliest. haha.");
		location.reload();
	}
}