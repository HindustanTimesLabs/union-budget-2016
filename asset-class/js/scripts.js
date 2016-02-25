// Draw the chart
function draw() {

	var data = google.visualization.arrayToDataTable(data0);

	var options = options0;

	var formatter = new google.visualization.NumberFormat({
		prefix : '₹',
		pattern : '##\,##\,##0'
	});

	formatter.format(data, 1);
	formatter.format(data, 3);
	formatter.format(data, 5);
	formatter.format(data, 7);

	var chart = new google.visualization.LineChart(document.getElementById('chart'));
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
var data0 = [['Year', 'Sensex', {role:'annotation'}, 'Post office time deposit', {role:'annotation'}, 'Bank FD', {role:'annotation'}, 'Gold', {role:'annotation'}], ['1991', 10000, , 10000, , 10000, , 10000, ,], ['1995', 38059.5, , 16850.6, , 16850.6, , 13502.6, ,], ['2000', 50707, , 30365.3, 'Post office time deposit', 31046.1, , 12752.5, ,], ['2005', 64498.9, , 52330.1, , 49434.5, , 20196.2, 'Gold'], ['2010', 170077.8, 'Sensex', 75126.7, , 68528.2, , 53375.6, ,], ['2015', 238332.2, , 107854.1, , 99530.4, 'Bank FD', 71985, ,]];

//OPTIONS

//global options
var annotations = {
	style : 'point',
	textStyle : {
		fontName : 'Roboto',
		fontSize: 16
	}
};
var colors = ['#0087c1', '#da001a', '#80a312', '#fabb00', '#f88a00', '#7f4a94'];
var curveType = 'none';
var chartArea = {
	left : 100,
	top : 30,
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
	slantedText : false
};
var focusTarget = 'category';
var legend = {
	position : 'none',
	textStyle : {
		fontSize : 14
	}
};
var tooltip = {
	trigger : 'focus'
};
var vAxis = {
	gridlines : {
		color : '#eee'
	},
	ticks : [0, 30000, 60000, 90000, 120000, 150000, 180000, 210000, 240000],
	title : 'Value (₹)',
	titleTextStyle : {
		fontSize : 16,
		color : '#5A5A5A'
	}
};

//options sets
var options0 = {
	annotations : annotations,
	colors : colors,
	chartArea : chartArea,
	fontName : fontName,
	focusTarget : focusTarget,
	hAxis : hAxis,
	legend : legend,
	tooltip : tooltip,
	vAxis : vAxis
};
