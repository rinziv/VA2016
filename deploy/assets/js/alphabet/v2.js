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
      .data(data, function(d){return d});

  // UPDATE
  // Update old elements as needed.
  text.attr("class", "update");

  // ENTER
  // Create new elements as needed.
  text.enter().append("text")
      .attr("class", "enter")
      .text(function(d) { return d; })   //// 
      .attr("dy", ".35em");

  // ENTER + UPDATE
  // Appending to the enter selection expands the update selection to include
  // entering elements; so, operations on the update selection after appending to
  // the enter selection will apply to both entering and updating nodes.
	  text.attr("x", function(d, i) { return i * 32; });  /////

  // EXIT
  // Remove old elements as needed.
  text.exit().remove();
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