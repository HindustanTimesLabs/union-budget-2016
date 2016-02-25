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
var data0 = [['Year', 'Avg. retail inflation', 'Finance minister', {role: 'tooltip'}, {role: 'annotation'}], ['1991-92', 13.5, 0, 'Manmohan Singh', 'Manmohan Singh'], ['1992-93', 9.6, 0, 'Manmohan Singh', ,], ['1993-94', 7.5, 0, 'Manmohan Singh', ,], ['1994-95', 10.1, 0, 'Manmohan Singh', ,], ['1995-96', 10.2, 0, 'Manmohan Singh', ,], ['1996-97', 9.4, 0, 'P Chidambaram', 'P Chidambaram'], ['1997-98', 6.8, 0, 'P Chidambaram', ,], ['1998-99', 13.1, 0, 'Yashwant Sinha', 'Yashwant Sinha'], ['1999-00', 3.4, 0, 'Yashwant Sinha', ,], ['2000-01', 3.8, 0, 'Yashwant Sinha', ,], ['2001-02', 4.3, 0, 'Yashwant Sinha', ,], ['2002-03', 4, 0, 'Yashwant Sinha', ,], ['2003-04', 3.9, 0, 'Jaswant Singh', 'Jaswant Singh'], ['2004-05', 3.8, 0, 'P Chidambaram', 'P Chidambaram'], ['2005-06', 4.4, 0, 'P Chidambaram', ,], ['2006-07', 6.7, 0, 'P Chidambaram', ,], ['2007-08', 6.2, 0, 'P Chidambaram', ,], ['2008-09', 9.1, 0, 'Pranab Mukherjee', 'Pranab Mukherjee'], ['2009-10', 12.4, 0, 'Pranab Mukherjee', ,], ['2010-11', 10.4, 0, 'Pranab Mukherjee', ,], ['2011-12', 8.4, 0, 'Pranab Mukherjee', ,], ['2012-13', 10.2, 0, 'P Chidambaram', 'P Chidambaram'], ['2013-14', 9.5, 0, 'P Chidambaram', ,], ['2014-15', 5.9, 0, 'Arun Jaitley', 'Arun Jaitley']];

//OPTIONS

//global options
var annotations = {
	style : 'line',
	textStyle : {
		fontName : 'Roboto',
		fontSize: 16,
		color : '#5A5A5A'
	}
};
var colors = ['#0087c1', '#000', '#80a312', '#fabb00', '#f88a00', '#7f4a94'];
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
	slantedTextAngle : 50,
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
	ticks : [0, 4, 8, 12, 16],
	title : 'Average retail inflation (%)',
	titleTextStyle : {
		fontSize : 16,
		color : '#5A5A5A'
	},
	baselineColor : '#fff'
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
