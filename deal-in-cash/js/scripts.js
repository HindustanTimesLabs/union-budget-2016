// By Harry Stevens for the Hindustan Times, 2016

function select() {
	$('.legend-item').click(function() {

		$('.legend-item').addClass('unselected').removeClass('selected');
		$(this).addClass('selected').removeClass('unselected');

		var div = ($(this)[0]).children[0];
		var data = google.visualization.arrayToDataTable(window['data' + $(div).attr('val')]);
		var options = window['options' + $(div).attr('val')];
		var formatter = new google.visualization.NumberFormat({
			suffix : '%',
			pattern : '#'
		});

		if ($(div).attr('val') == 0) {
			formatter.format(data, 1);
			formatter.format(data, 2);
			formatter.format(data, 3);
			formatter.format(data, 4);
			formatter.format(data, 5);
			formatter.format(data, 6);
			formatter.format(data, 7);
		} else {
			formatter.format(data, 1);
		}

		var chart = new google.visualization.LineChart(document.getElementById('chart-savings'));
		chart.draw(data, options);

	});
}

// Draw the chart
function draw() {

	var data = google.visualization.arrayToDataTable(data0);

	var options = options0;

	var formatter = new google.visualization.NumberFormat({
		suffix : '%',
		pattern : '#'
	});
	formatter.format(data, 1);
	formatter.format(data, 2);
	formatter.format(data, 3);
	formatter.format(data, 4);
	formatter.format(data, 5);
	formatter.format(data, 6);
	formatter.format(data, 7);

	var chart = new google.visualization.LineChart(document.getElementById('chart-savings'));
	chart.draw(data, options);

	select();

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
var data0 = [['Year', 'Bank deposits', 'Non-banking deposits', 'Life insurance fund', 'Provident and pension fund', 'Post office and other small savings', 'Shares, debentures, mutual funds', 'Others'], ['1991-92', 26, 3, 10, 18, 7, 10, 13], ['1992-93', 37, 8, 9, 18, 5, 10, 5], ['1993-94', 33, 11, 9, 17, 6, 9, 3], ['1994-95', 38, 8, 8, 15, 9, 9, 2], ['1995-96', 32, 11, 11, 18, 8, 7, 0], ['1996-97', 32, 16, 10, 19, 7, 4, 2], ['1997-98', 43, 4, 11, 19, 13, 3, 0], ['1998-99', 38, 4, 11, 22, 14, 2, -2], ['1999-00', 35, 2, 12, 23, 12, 7, 0], ['2000-01', 38, 1, 14, 21, 16, 5, 0], ['2001-02', 40, 0, 14, 15, 18, 3, -1], ['2002-03', 38, 4, 16, 14, 17, 2, -1], ['2003-04', 40, 0, 13, 13, 22, 2, -2], ['2004-05', 39, 0, 15, 12, 24, 2, -1], ['2005-06', 45, 0, 14, 11, 15, 6, 0], ['2006-07', 56, 1, 15, 9, 3, 7, 1], ['2007-08', 50, 0, 22, 9, -4, 10, 2], ['2008-09', 57, 2, 21, 10, -4, 0, 1], ['2009-10', 40, 2, 26, 13, 4, 5, 0], ['2010-11', 51, 0, 19, 13, 3, 0, 1], ['2011-12', 56, 1, 21, 10, -2, 2, 0], ['2012-13', 55, 2, 17, 12, -1, 4, 0], ['2013-14', 60, 2, 16, 11, 1, 3, 0], ['2014-15', 47, 2, 19, 16, 0, 5, 0]];
var data1 = [['Year', 'Bank deposits'], ['1991-92', 26], ['1992-93', 37], ['1993-94', 33], ['1994-95', 38], ['1995-96', 32], ['1996-97', 32], ['1997-98', 43], ['1998-99', 38], ['1999-00', 35], ['2000-01', 38], ['2001-02', 40], ['2002-03', 38], ['2003-04', 40], ['2004-05', 39], ['2005-06', 45], ['2006-07', 56], ['2007-08', 50], ['2008-09', 57], ['2009-10', 40], ['2010-11', 51], ['2011-12', 56], ['2012-13', 55], ['2013-14', 60], ['2014-15', 47]];
var data2 = [['Year', 'Non-banking deposits'], ['1991-92', 3], ['1992-93', 8], ['1993-94', 11], ['1994-95', 8], ['1995-96', 11], ['1996-97', 16], ['1997-98', 4], ['1998-99', 4], ['1999-00', 2], ['2000-01', 1], ['2001-02', 0], ['2002-03', 4], ['2003-04', 0], ['2004-05', 0], ['2005-06', 0], ['2006-07', 1], ['2007-08', 0], ['2008-09', 2], ['2009-10', 2], ['2010-11', 0], ['2011-12', 1], ['2012-13', 2], ['2013-14', 2], ['2014-15', 2]];
var data3 = [['Year', 'Life insurance fund'], ['1991-92', 10], ['1992-93', 9], ['1993-94', 9], ['1994-95', 8], ['1995-96', 11], ['1996-97', 10], ['1997-98', 11], ['1998-99', 11], ['1999-00', 12], ['2000-01', 14], ['2001-02', 14], ['2002-03', 16], ['2003-04', 13], ['2004-05', 15], ['2005-06', 14], ['2006-07', 15], ['2007-08', 22], ['2008-09', 21], ['2009-10', 26], ['2010-11', 19], ['2011-12', 21], ['2012-13', 17], ['2013-14', 16], ['2014-15', 19]];
var data4 = [['Year', 'Provident and pension fund'], ['1991-92', 18], ['1992-93', 18], ['1993-94', 17], ['1994-95', 15], ['1995-96', 18], ['1996-97', 19], ['1997-98', 19], ['1998-99', 22], ['1999-00', 23], ['2000-01', 21], ['2001-02', 15], ['2002-03', 14], ['2003-04', 13], ['2004-05', 12], ['2005-06', 11], ['2006-07', 9], ['2007-08', 9], ['2008-09', 10], ['2009-10', 13], ['2010-11', 13], ['2011-12', 10], ['2012-13', 12], ['2013-14', 11], ['2014-15', 16]];
var data5 = [['Year', 'Post office and other small savings'], ['1991-92', 7], ['1992-93', 5], ['1993-94', 6], ['1994-95', 9], ['1995-96', 8], ['1996-97', 7], ['1997-98', 13], ['1998-99', 14], ['1999-00', 12], ['2000-01', 16], ['2001-02', 18], ['2002-03', 17], ['2003-04', 22], ['2004-05', 24], ['2005-06', 15], ['2006-07', 3], ['2007-08', -4], ['2008-09', -4], ['2009-10', 4], ['2010-11', 3], ['2011-12', -2], ['2012-13', -1], ['2013-14', 1], ['2014-15', 0]];
var data6 = [['Year', 'Shares, debentures & mutual funds'], ['1991-92', 10], ['1992-93', 10], ['1993-94', 9], ['1994-95', 9], ['1995-96', 7], ['1996-97', 4], ['1997-98', 3], ['1998-99', 2], ['1999-00', 7], ['2000-01', 5], ['2001-02', 3], ['2002-03', 2], ['2003-04', 2], ['2004-05', 2], ['2005-06', 6], ['2006-07', 7], ['2007-08', 10], ['2008-09', 0], ['2009-10', 5], ['2010-11', 0], ['2011-12', 2], ['2012-13', 4], ['2013-14', 3], ['2014-15', 5]];
var data7 = [['Year', 'Others'], ['1991-92', 13], ['1992-93', 5], ['1993-94', 3], ['1994-95', 2], ['1995-96', 0], ['1996-97', 2], ['1997-98', 0], ['1998-99', -2], ['1999-00', 0], ['2000-01', 0], ['2001-02', -1], ['2002-03', -1], ['2003-04', -2], ['2004-05', -1], ['2005-06', 0], ['2006-07', 1], ['2007-08', 2], ['2008-09', 1], ['2009-10', 0], ['2010-11', 1], ['2011-12', 0], ['2012-13', 0], ['2013-14', 0], ['2014-15', 0]];

//OPTIONS

//global options
var curveType = 'none';
var chartArea = {
	left : 100,
	top : 30,
	right : 30,
	bottom : 100,

};
var aggregationTarget = 'category';
var fontName = 'Roboto';
var hAxis = {
	title : 'Year',
	titleTextStyle : {
		fontSize : 16,
		color : '#5A5A5A'
	}
};
var legend = {
	position : 'none'
};
var selectionMode = 'multiple';
var tooltip = {
	showColorCode : true,
	trigger : 'focus'
};
var vAxis = {
	gridlines : {
		color : '#eee'
	},
	ticks : [-5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65],
	title : 'Share of savings (%)',
	titleTextStyle : {
		fontSize : 16,
		color : '#5A5A5A'
	}
};

//options sets
var options0 = {
	aggregationTarget : aggregationTarget,
	chartArea : chartArea,
	curveType : curveType,
	focusTarget : 'category',
	fontName : fontName,
	hAxis : hAxis,
	legend : legend,
	tooltip : tooltip,
	vAxis : vAxis,
	selectionMode : selectionMode
};
var options1 = {
	aggregationTarget : aggregationTarget,
	chartArea : chartArea,
	colors : ['#4c79d2'],
	curveType : curveType,
	focusTarget : 'datum',
	fontName : fontName,
	hAxis : hAxis,
	legend : legend,
	tooltip : tooltip,
	vAxis : vAxis,
	selectionMode : selectionMode
};
var options2 = {
	aggregationTarget : aggregationTarget,
	chartArea : chartArea,
	colors : ['#dc3912'],
	curveType : curveType,
	focusTarget : 'datum',
	fontName : fontName,
	hAxis : hAxis,
	legend : legend,
	tooltip : tooltip,
	vAxis : vAxis,
	selectionMode : selectionMode
};
var options3 = {
	aggregationTarget : aggregationTarget,
	chartArea : chartArea,
	colors : ['#ff9900'],
	curveType : curveType,
	focusTarget : 'datum',
	fontName : fontName,
	hAxis : hAxis,
	legend : legend,
	tooltip : tooltip,
	vAxis : vAxis,
	selectionMode : selectionMode
};
var options4 = {
	aggregationTarget : aggregationTarget,
	chartArea : chartArea,
	colors : ['#109618'],
	curveType : curveType,
	focusTarget : 'datum',
	fontName : fontName,
	hAxis : hAxis,
	legend : legend,
	tooltip : tooltip,
	vAxis : vAxis,
	selectionMode : selectionMode
};
var options5 = {
	aggregationTarget : aggregationTarget,
	chartArea : {
		left : 100,
		top : 30,
		right : 30,
		bottom : 100,
	},
	colors : ['#990099'],
	curveType : curveType,
	focusTarget : 'datum',
	fontName : fontName,
	hAxis : hAxis,
	legend : legend,
	tooltip : tooltip,
	vAxis : vAxis,
	selectionMode : selectionMode
};
var options6 = {
	aggregationTarget : aggregationTarget,
	chartArea : chartArea,
	colors : ['#0099c6'],
	curveType : curveType,
	focusTarget : 'datum',
	fontName : fontName,
	hAxis : hAxis,
	legend : legend,
	tooltip : tooltip,
	vAxis : vAxis,
	selectionMode : selectionMode
};
var options7 = {
	aggregationTarget : aggregationTarget,
	chartArea : chartArea,
	colors : ['#dd4477'],
	curveType : curveType,
	focusTarget : 'datum',
	fontName : fontName,
	hAxis : hAxis,
	legend : legend,
	tooltip : tooltip,
	vAxis : vAxis,
	selectionMode : selectionMode
}; 