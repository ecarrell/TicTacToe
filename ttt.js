var table = {
	
	//Initial size of table

	
	
	
};

//This function is called initially and everytime the user changes
//the size slider's value
function buildTable(rowCol) {

	//this loop runs through the rows
	for(var i = 0; i < rowCol; i++) {
		var row = document.getElementsByTagName('table')[0];
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
$(document).ready(function(){
$('#resetBtn').click(function(){ console.log("Click!");});
});
