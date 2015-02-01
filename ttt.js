var table = {
	
	//add array to keep track of agents and empty cells
	cellContents: []

};

table.setUp = function(){
	//build table after loading DOM
	table.buildTable($('#slider').val());
	
	//event listener for reset button
	$('#resetBtn').click(function(){ console.log("Click!");
		table.buildTable($('#slider').val());
	});
};

//Output the slider value to user while sliding
table.SliderChange = function (){
	$('#sizeNumber').html($('#slider').val());
}

table.randomNum = function(){
	return Math.floor((Math.random() * 3) + 1);
}

//This function is called initially and every time the user changes
//the slider's value
table.buildTable = function(rowCol) {

	var row = document.getElementsByTagName('table')[0];
	
	//initialize variables
	var col;
	var td;
	var tr;
	
	//clear table
	row.innerHTML = '';
		
	//this loop runs through the rows
	for(var i = 0; i < rowCol; i++) {
		tr = document.createElement('TR');
		row.appendChild(tr);
		
		//this loop runs through the columns
		for(var j = 0; j < rowCol; j++) {
			col = document.getElementsByTagName('tr')[i];
			td = document.createElement('TD');
			col.appendChild(td);
		}
	}
};

$(document).ready(table.setUp);

/* Add to red,blue,empty % slider function 
		(how to dynamically change slider max attr)
		
$('#slider').attr('min', A_Route[0]);
$('#slider').attr('max', A_Route[3]); */