/// <reference path="../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../typings/d3/d3.d.ts"/>

"use strict";

$(function () {
	var height = 800;
	var width = 2000;
	var aspect = Math.floor(height / width);
	var paddingLeft = 100;
	var paddingBottom = 100;
	var classLegendX = 130;
	var rootSelector = ".sa-timeline__inner";
	var root = $(rootSelector);

	root.draggable({
		axis: 'x'
	});

	var container = d3.select(rootSelector);
	var svg = container.append("svg").attr({
		width: '100%',
		viewBox: "0 0 " + width + " " + height,
		preserveAspectRatio: 'xMidYMid'
	});

	var assignments = [{
		dueDate: '2015-07-28T00:00:00Z',
		title: 'Assignment 1',
		description: '',
		classId: 1
	}, {
		dueDate: '2015-07-30T00:00:00Z',
		title: 'Assignment 2',
		description: '',
		classId: 2
	}, {
		dueDate: '2015-08-05T00:00:00Z',
		title: 'Assignment 3',
		description: '',
		classId: 1
	}, {
		dueDate: '2015-08-10T00:00:00Z',
		title: 'Assignment 4',
		description: '',
		classId: 2
	}];

	// create x-scale
	var minDomainDate = moment('2015-07-25T00:00:00Z');
	var maxDomainDate = moment('2015-08-10T00:00:00Z');
	var currentDateMoment = moment().set({
		hours: 0,
		minutes: 0,
		seconds: 0,
		milliseconds: 0
	});

	var xScale = d3.time.scale().domain([minDomainDate, maxDomainDate]).range([classLegendX, width - classLegendX]);

	var currentDateLine = svg.append("line").attr({
		x1: xScale(currentDateMoment),
		y1: 0,
		x2: xScale(currentDateMoment),
		y2: height,
		'stroke-width': 2,
		'stroke': '#965b93'
	});

	// Add x axises
	var xAxisTicks = d3.svg.axis().scale(xScale).orient("bottom").ticks(d3.time.days, 2);

	var xAxisOffsets = d3.svg.axis().scale(xScale).orient("bottom").ticks(d3.time.days, 2).tickFormat(function (date) {
		var duration = moment.duration(moment(date).diff(currentDateMoment));
		var days = duration.asDays();
		return days;
	});

	var xAxisDates = d3.svg.axis().scale(xScale).orient("bottom").ticks(d3.time.days, 2).tickFormat(function (date) {
		return moment(date).format('M/d');
	});

	var xAxisDays = d3.svg.axis().scale(xScale).orient("bottom").ticks(d3.time.days, 2).tickFormat(function (date) {
		return moment(date).format('dd');
	});

	// Add X-axis ticks
	svg.append("g").attr({
		"class": "axis axis--x axis--x-ticks"
	}).attr("transform", "translate(0," + (height - paddingBottom) + ")").call(xAxisTicks);
	// Add X-axis Offsets
	svg.append("g").attr({
		"class": "axis axis--x axis--x-offsets"
	}).attr("transform", "translate(0," + (height - paddingBottom + 5) + ")").call(xAxisOffsets);

	// Add X-axis Offsets
	svg.append("g").attr({
		"class": "axis axis--x axis--x-dates"
	}).attr("transform", "translate(0," + (height - paddingBottom + 35) + ")").call(xAxisDates);

	// Add X-axis Offsets
	svg.append("g").attr({
		"class": "axis axis--x axis--x-days"
	}).attr("transform", "translate(0," + (height - paddingBottom + 65) + ")").call(xAxisDays);

	// Add Class Legend
	var classes = [{
		name: 'ECE200'
	}, {
		name: 'CHEM330'
	}, {
		name: 'PHYS200'
	}, {
		name: 'MATH300'
	}, {
		name: 'PSY100'
	}];

	svg.selectAll("xyz").data(classes).enter().append("text").attr({
		'text-anchor': 'end',
		x: classLegendX,
		y: function y(d, i) {
			return height - (i * 30 + paddingBottom + 30);
		}
	}).text(function (d) {
		return d.name;
	});

	var stripNonDate = function stripNonDate(m) {
		return m.set({
			hours: 0,
			minutes: 0,
			seconds: 0,
			milliseconds: 0
		});
	};

	var scaledDate = function scaledDate(event) {
		return xScale(stripNonDate(moment(event.dueDate)));
	};

	var circles = svg.selectAll("xyz").data(assignments).enter().append("circle").attr({
		cx: scaledDate,
		cy: function cy(d) {
			return height - (100 + 30 + (d.classId === 1 ? 5 : 35));
		},
		r: 10
	}).style({
		fill: '#965b93'
	}).text(function (d) {
		return d.title;
	});

	var lines = svg.selectAll("xyz").data(assignments).enter().append("line").attr({
		x1: scaledDate,
		y1: height - paddingBottom,
		x2: scaledDate,
		y2: function y2(d) {
			return height - (100 + 30 + (d.classId === 1 ? 5 : 35));
		},
		'stroke-width': 2,
		'stroke': '#965b93'
	});
});
//# sourceMappingURL=app.js.map