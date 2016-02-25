// Draw the chart
function draw() {

	var data = google.visualization.arrayToDataTable(data0);

	var options = options0;

	var formatter = new google.visualization.NumberFormat({
		prefix : '₹',
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
var data0 = [['Year', 'Avg. daily ploughing wage'], ['1995', 46.69], ['1996', 47.89], ['1997', 49.12], ['1998', 64.87], ['1999', 67.86], ['2000', 63.1], ['2001', 64.99], ['2002', 69.97], ['2003', 71.5], ['2004', 72.19], ['2005', 72.63], ['2006', 76.15], ['2007', 86.72], ['2008', 96.82], ['2009', 114.66], ['2010', 131.36], ['2011', 159.89], ['2012', 186.48], ['2013', 218.24], ['2014', 256.72], ['2015', 272.87]];

//OPTIONS

//global options
var colors = ['#0087c1','#da001a'];
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
	slantedText: true,
	slantedTextAngle: 45
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
	vAxis : vAxis,
};