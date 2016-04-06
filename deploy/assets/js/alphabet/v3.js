var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

var width = 960,
    height = 500;


document.getElementById("txtLetters").value = alphabet.join("");

var svg = d3.select("#viz").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(32," + (height / 2) + ")");

function update(data) {


// DATA JOIN
// Join new data with old elements, if any.
var text = svg.selectAll("text")
    .data(data, function(d) { return d; });

// UPDATE
// Update old elements as needed.
text.attr("class", "update")
  .transition()
    .duration(750)
    .attr("x", function(d, i) { return i * 32; });

// ENTER
// Create new elements as needed.
text.enter().append("text")
    .attr("class", "enter")
    .attr("dy", ".35em")
    .attr("y", -60)
    .attr("x", function(d, i) { return i * 32; })
    .style("fill-opacity", 1e-6)
    .text(function(d) { return d; })
  .transition()
    .duration(750)
    .attr("y", 0)
    .style("fill-opacity", 1);

// EXIT
// Remove old elements as needed.
text.exit()
    .attr("class", "exit")
  .transition()
    .duration(750)
    .attr("y", 60)
    .style("fill-opacity", 1e-6)
    .remove();
}

// The initial display.
update(alphabet);


function generateLetters(){
	var aLetters = d3.shuffle(alphabet)
		.slice(0, Math.floor(Math.random() * 26))
	.sort();
	
	var letters = aLetters.join("");
	document.getElementById("txtLetters").value = letters;
	
}

function updateData(){
	var letters = document.getElementById("txtLetters").value.split("");
	update(letters);
}


// Grab a random sample of letters from the alphabet, in alphabetical order.
// setInterval(function() {
//   update(d3.shuffle(alphabet)
//       .slice(0, Math.floor(Math.random() * 26))
//       .sort());
// }, 1500);