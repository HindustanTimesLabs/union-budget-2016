// Draw the chart
function draw() {

	var data = google.visualization.arrayToDataTable(data0);

	var options = options0;

	var formatter = new google.visualization.NumberFormat({
		suffix : '%',
		pattern : '#'
	});

	formatter.format(data, 1);
	formatter.format(data, 2);
	formatter.format(data, 3);

	var chart = new google.visualization.ColumnChart(document.getElementById('chart'));
	chart.draw(data, options);

}

// Initialize the chart
function init() {
	google.charts.load('current', {
		'packages' : ['corechart']
	});

	google.charts.setOnLoadCallback(draw);

}


$(document).ready(init);

//DATA
var data0 = [['Country', '< 30 min', '30 min - 1hr', '> 1hr'], ['India', 40, 36, 24], ['Indonesia', 44, 32, 24], ['UK', 53, 31, 16], ['Russia', 54, 32, 14], ['USA', 66, 26, 8]];

//OPTIONS

//global options
var colors = ['#0087c1','#fabb00','#da001a','#80a312','#f88a00','#7f4a94'];
var chartArea = {
	left : 100,
	top : 50,
	right : 30,
	bottom : 100,

};
var fontName = 'Roboto';
var hAxis = {
	title : 'Year',
	titleTextStyle : {
		fontSize : 16,
		color : '#5A5A5A'
	},
	slantedText: false
};
var legend = {
	position : 'top',
	alignment: 'center',
	textStyle : {
		fontSize: 14
	}
};
var tooltip = {
	trigger : 'focus'
};
var vAxis = {
	gridlines : {
		color : '#eee'
	},
	ticks : [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
	title : 'Commute time (% of all commutes)',
	titleTextStyle : {
		fontSize : 16,
		color : '#5A5A5A'
	}
};

//options sets
var options0 = {
	colors : colors,
	chartArea : chartArea,
	fontName : fontName,
	hAxis : hAxis,
	legend : legend,
	tooltip : tooltip,
	vAxis : vAxis,
	isStacked: true
};