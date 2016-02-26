// Draw the chart
function draw() {

	var data = google.visualization.arrayToDataTable(data0);

	var options = options0;

	var formatter = new google.visualization.NumberFormat({
		suffix : '%',
		pattern : '#.#'
	});

	formatter.format(data, 1);

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
var data0 = [['Year', 'Bank loan rate'], ['1991-92', 16.5], ['1992-93', 19], ['1993-94', 19], ['1994-95', 15], ['1995-96', 16.5], ['1996-97', 14.5], ['1997-98', 14], ['1998-99', 12], ['1999-00', 12], ['2000-01', 11], ['2001-02', 11], ['2002-03', 10.75], ['2003-04', 10.25], ['2004-05', 10.25], ['2005-06', 10.25], ['2006-07', 12.25], ['2007-08', 12.25], ['2008-09', 11.5], ['2009-10', 11], ['2010-11', 8.25], ['2011-12', 10], ['2012-13', 9.7], ['2013-14', 10], ['2014-15', 10], ['2015-16', 9.7]];

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
	slantedTextAngle: 50
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
	ticks : [0, 5, 10, 15, 20],
	title : 'Bank loan rate (%)',
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