// Draw the chart
function draw() {

	var data = google.visualization.arrayToDataTable(data0);

	var options = options0;

	var formatter = new google.visualization.NumberFormat({
		pattern : '#.## million'
	});

	formatter.format(data, 1);
	formatter.format(data, 3);

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
var data0 = [['Year', 'Public sector', {role:'annotation'}, 'Private sector', {role:'annotation'}], ['1991-92', 19.21, , 7.85, ,], ['1992-93', 19.33, , 7.85, ,], ['1993-94', 19.45, , 7.93, ,], ['1994-95', 19.47, , 8.06, ,], ['1995-96', 19.43, , 8.51, ,], ['1996-97', 19.56, 'Public sector', 8.69, 'Private sector'], ['1997-98', 19.42, , 8.75, ,], ['1998-99', 19.41, , 8.7, ,], ['1999-00', 19.31, , 8.65, ,], ['2000-01', 19.14, , 8.65, ,], ['2001-02', 18.77, , 8.43, ,], ['2002-03', 18.58, , 8.42, ,], ['2003-04', 18.2, , 8.25, ,], ['2004-05', 18.01, , 8.45, ,], ['2005-06', 18.19, , 8.77, ,], ['2006-07', 18, , 9.24, ,], ['2007-08', 17.67, , 9.88, ,], ['2008-09', 17.8, , 10.38, ,], ['2009-10', 17.86, , 10.85, ,], ['2010-11', 17.55, , 11.45, ,], ['2011-12', 17.61, , 12.04, ,]];

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
	slantedText : true,
	slantedTextAngle : 40
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
	ticks : [0, 5, 10, 15, 20, 25],
	title : 'People employed (millions)',
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
