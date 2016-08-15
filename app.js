function jsonTable() {
	var data = {
		headers: ["First Name", "Last Name", "Age"],
		rows: [
		["John", "Doe", 30],
		["Jane", "Doe", 27],
		["Mac", "Smith", 52]
		]
	};

	var container = document.getElementById("tableContainer");
	var tableHead = container.createTHead(); //<tHead>
	container.appendChild(tableHead);
  	var tableBody = document.createElement("tBody"); //<tBody>
  	container.appendChild(tableBody);
  	var tableRow = document.createElement("tr");
  	tableHead.appendChild(tableRow);
  	container.style.width = '30%';
  	container.style.border = '1px solid black';
  	tableHead.setAttribute('bgColor', 'lightgrey');

	// header
	for (var i = 0; i < data.headers.length; i++) {
		var heading = document.createElement("th"); //<th>
		var headingText = document.createTextNode(data.headers[i]);
		heading.appendChild(headingText);
		tableRow.appendChild(heading);
		heading.style.border = '1px solid black';
	}
	
	// data
	for (var i = 0; i < data.rows.length; i++) {
		tableRow = document.createElement("tr");
		tableBody.appendChild(tableRow);
		for (var j = 0; j < data.rows[i].length; j++) {
			var tableData = document.createElement("td");
			tableRow.appendChild(tableData);
			var colData = document.createTextNode(data.rows[i][j]);
			tableData.appendChild(colData);
			tableData.style.border = '1px solid black';
		}
	}
};