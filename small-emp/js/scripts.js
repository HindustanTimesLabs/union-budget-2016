// Draw the chart
function draw() {

	var data = google.visualization.arrayToDataTable(data0);

	var options = options0;

	var formatter = new google.visualization.NumberFormat({
		pattern : '#.## million'
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
var data0 = [['Year', 'Employees'], ['1991-92', 16.6], ['1992-93', 17.48], ['1993-94', 18.26], ['1994-95', 19.14], ['1995-96', 19.79], ['1996-97', 20.59], ['1997-98', 21.32], ['1998-99', 22.06], ['1999-00', 22.91], ['2000-01', 24.09], ['2001-02', 24.93], ['2002-03', 26.02], ['2003-04', 27.14], ['2004-05', 28.26], ['2005-06', 29.49], ['2006-07', 80.52], ['2007-08', 84.2], ['2008-09', 88.08], ['2009-10', 92.18], ['2010-11', 96.52], ['2011-12', 101.17], ['2012-13', 106.14], ['2013-14', 111.43]];

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
	ticks : [0, 20, 40, 60, 80, 100, 120],
	title : 'Employees at small and tiny enterprirses (millions)',
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