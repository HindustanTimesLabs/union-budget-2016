// Draw the chart
function draw() {

	var data = google.visualization.arrayToDataTable(data0);

	var options = options0;

	var formatter = new google.visualization.NumberFormat({
		suffix : '%',
		pattern : '#'
	});

	formatter.format(data, 1);

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
var data0 = [['Social Network', 'Penetration'], ['Facebook', 13], ['WhatsApp', 12], ['FB Messenger', 11], ['Google+', 10], ['Skype', 10], ['Twitter', 8], ['Hike', 8], ['LinkedIn', 7], ['Instagram', 7], ['WeChat', 6], ['Others', 8]];

//OPTIONS

//global options
var annotations = {
	textStyle : {
		fontName : 'Roboto',
		fontSize : 14,
		color : '#5A5A5A'
	}
};
var colors = ['#0087c1'];
var curveType = 'none';
var chartArea = {
	left : 100,
	top : 30,
	right : 30,
	bottom : 100,

};
var fontName = 'Roboto';
var hAxis = {
	title : 'Social network',
	titleTextStyle : {
		fontSize : 16,
		color : '#5A5A5A'
	},
	slantedText : true,
	slantedTextAngle : 30
};
var legend = {
	position : 'none'
};
var tooltip = {
	trigger : 'focus'
};
var vAxis = {
	gridlines : {
		color : '#eee'
	},
	ticks : [0, 4, 8, 12, 16],
	title : 'Penetration percentage',
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
	curveType : curveType,
	fontName : fontName,
	hAxis : hAxis,
	legend : legend,
	tooltip : tooltip,
	vAxis : vAxis,
};
