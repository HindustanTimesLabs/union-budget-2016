// Draw the chart
function draw() {

	var data = google.visualization.arrayToDataTable(data0);

	var options = options0;

	var chart = new google.visualization.PieChart(document.getElementById('chart'));
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
var data0 = [['Number of employees', 'Percent of all companies'], ['19 workers or fewer', 46.9], ['20 to 99 workers', 36.5], ['100 to 999 workers', 14.9], ['1,000 workers or more', 1.8]];

//OPTIONS

//global options
var colors = ['#0087c1','#da001a','#fabb00','#80a312'];
var curveType = 'none';
var chartArea = {
	left : 30,
	top : 30,
	right : 30,
	bottom : 30,

};
var fontName = 'Roboto';
var hAxis = {
	title : 'Year',
	titleTextStyle : {
		fontSize : 16,
		color : '#5A5A5A'
	},
	slantedText: true,
	slantedTextAngle: 45
};
var legend = {
	position : 'right'
};
var tooltip = {
	trigger : 'focus',
	text : 'percentage'
};
var vAxis = {
	gridlines : {
		color : '#eee'
	},
	ticks : [0, 50, 100, 150, 200, 250, 300],
	title : 'Avg. daily ploughing wage (₹)',
	titleTextStyle : {
		fontSize : 16,
		color : '#5A5A5A'
	}
};

//options sets
var options0 = {
	colors : colors,
	chartArea : chartArea,
	curveType : curveType,
	fontName : fontName,
	hAxis : hAxis,
	legend : legend,
	tooltip : tooltip,
	vAxis : vAxis
};