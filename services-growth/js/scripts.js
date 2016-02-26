// Draw the chart
function draw() {

	var data = google.visualization.arrayToDataTable(data0);

	var options = options0;

	var formatter = new google.visualization.NumberFormat({
		prefix : '$',
		pattern : '#.## billion'
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
var data0 = [['Year', 'Invisible export earnings'], ['1991-92', 9.5], ['1992-93', 9.33], ['1993-94', 11.32], ['1994-95', 15.55], ['1995-96', 17.66], ['1996-97', 21.41], ['1997-98', 23.24], ['1998-99', 25.77], ['1999-00', 30.31], ['2000-01', 32.27], ['2001-02', 36.74], ['2002-03', 41.93], ['2003-04', 53.51], ['2004-05', 69.53], ['2005-06', 89.69], ['2006-07', 114.56], ['2007-08', 148.88], ['2008-09', 167.82], ['2009-10', 163.43], ['2010-11', 190.49], ['2011-12', 219.23], ['2012-13', 224.04], ['2013-14', 233.23], ['2014-15', 237.08]];

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
	ticks : [0, 40, 80, 120, 160, 200, 240],
	title : 'Invisible export earnings ($ billions)',
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