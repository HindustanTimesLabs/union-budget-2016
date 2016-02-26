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
var data0 = [['Years', 'Avg. GDP growth', 'Prime Minister', {role: 'tooltip'}, {role: 'annotation'}], ['1991-96', 5.2, 0, 'PV Narasimha Rao', 'PV Narasimha Rao'], ['1996-97', 7.9, 0, 'HD Deve Gowda', 'HD Deve Gowda'], ['1997-98', 4.3, 0, 'IK Gujral', 'IK Gujral'], ['1998-2004', 5.8, 0, 'AB Vajpayee', 'AB Vajpayee'], ['2004-14', 7.1, 0, 'Manmohan Singh', 'Manmohan Singh'], ['2014- Present', 7.4, 0, 'Narendra Modi', 'Narendra Modi']];

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
	title : 'Years',
	titleTextStyle : {
		fontSize : 16,
		color : '#5A5A5A'
	},
	slantedText : false,
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
	ticks : [0, 2, 4, 6, 8, 10],
	title : 'Average GDP growth (%)',
	titleTextStyle : {
		fontSize : 16,
		color : '#5A5A5A'
	},
	baselineColor : '#000'
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
	vAxis : vAxis,
	series : {
		1 : {
			lineWidth : 1,
			dataOpacity: 0,
			pointSize: .000001
		}
	}
};
