// Draw the chart
function draw() {

	var data = google.visualization.arrayToDataTable(data0);

	var options = options0;

	var formatter0 = new google.visualization.NumberFormat({
		prefix : '₹',
		pattern : '#,###,### crore'
	});

	var formatter1 = new google.visualization.NumberFormat({
		suffix : '%',
		pattern : '#.##'
	});

	formatter0.format(data, 1);
	formatter1.format(data, 2);

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
var data0 = [['Year', 'Total', 'Pct. of GDP'], ['1991', 19900, 2.91], ['1992', 21300, 2.70], ['1993', 26500, 2.82], ['1994', 28300, 2.66], ['1995', 32700, 2.58], ['1996', 35900, 2.47], ['1997', 43500, 2.65], ['1998', 51100, 2.73], ['1999', 62700, 2.96], ['2000', 64700, 2.95], ['2001', 70300, 2.92], ['2002', 72200, 2.83], ['2003', 77400, 2.68], ['2004', 91700, 2.83], ['2005', 101700, 2.75], ['2006', 108500, 2.53], ['2007', 116800, 2.34], ['2008', 143600, 2.55], ['2009', 187400, 2.89], ['2010', 210800, 2.71], ['2011', 231600, 2.62], ['2012', 252300, 2.53], ['2013', 277700, 2.45], ['2014', 291000, 2.43]];

//OPTIONS

//global options
var colors = ['#0087c1', '#da001a', '#80a312', '#fabb00', '#f88a00', '#7f4a94'];
var curveType = 'none';
var chartArea = {
	left : 100,
	top : 50,
	right : 100,
	bottom : 100,

};
var focusTarget = 'category';
var fontName = 'Roboto';
var hAxis = {
	title : 'Year',
	titleTextStyle : {
		fontSize : 16,
		color : '#5A5A5A'
	},
	slantedText : true,
	slantedTextAngle: 60
};
var legend = {
	position : 'top',
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
	title : 'Population (millions)',
	titleTextStyle : {
		fontSize : 16,
		color : '#5A5A5A'
	}
};

//options sets
var options0 = {
	colors : colors,
	chartArea : chartArea,
	focusTarget : focusTarget,
	fontName : fontName,
	hAxis : hAxis,
	legend : legend,
	tooltip : tooltip,
	series : [{
		targetAxisIndex : 0
	}, {
		targetAxisIndex : 1
	}],
	vAxes : [{
		maxValue : 0,
		title : 'Total military spending (₹ crores)',
		titleTextStyle : {
			fontSize : 16,
			color : '#0087c1'
		},
		textStyle : {
			color : '#0087c1'
		}
	}, {
		ticks : [0,1,2,3,4],
		title : 'Military spending (% GDP)',
		titleTextStyle : {
			fontSize : 16,
			color : '#da001a'
		},
		textStyle : {
			color : '#da001a'
		}
	}],

}

