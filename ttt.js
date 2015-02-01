var table = {
	
	//add array to keep track of agents and empty cells
	cellContents: []

};

table.setUp = function(){
	//build table after loading DOM
	buildTable($('#slider').val());
	
	//event listener for reset button
	$('#resetBtn').click(function(){ console.log("Click!");
		buildTable($('#slider').val());
	});
};

//Output the slider value to user while sliding
table.SliderChange = function (){
	$('#sizeNumber').html($('#slider').val());
}

//This function is called initially and everytime the user changes
//the size slider's value
table.buildTable = function(rowCol) {

	var row = document.getElementsByTagName('table')[0];
	row.innerHTML = '';
		
	//this loop runs through the rows
	for(var i = 0; i < rowCol; i++) {
		var tr = document.createElement('TR');
		row.appendChild(tr);
		
		//this loop runs through the columns
		for(var j = 0; j < rowCol; j++) {
			var col = document.getElementsByTagName('tr')[i];
			var td = document.createElement('TD');
			col.appendChild(td);
		}
	}
};

$(document).ready(table.setUp);
