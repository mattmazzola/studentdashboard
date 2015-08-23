import Ember from 'ember';
import moment from 'moment';
import d3 from 'd3';

const {
  on
} = Ember;

export default Ember.Component.extend({
  classNames: ['sa-timeline__inner'],

  setupSvg: on('didInsertElement', function () {

    var $ = window.jQuery;
    const height = 800;
  	const width = 2000;
  	//const aspect = Math.floor(height / width);
  	//const paddingLeft = 100;
  	const paddingBottom = 200;
  	const classLegendX = 130;
  	const rootSelector = ".sa-timeline__inner";
  	const root = $(rootSelector);

  	root.draggable({
  		axis: 'x'
  	});

  	const container = d3.select(rootSelector);
  	const svg = container.append("svg")
  		.attr({
  			width: '100%',
  			viewBox: `0 0 ${width} ${height}`,
  			preserveAspectRatio: 'xMidYMid'
  		});

  	const assignments = this.get('events');

  	// create x-scale
  	const minDomainDate = moment('2015-08-01T08:00:00Z');
  	const maxDomainDate = moment('2015-08-30T08:00:00Z');
  	const currentDateMoment = moment().set({
  		hours: 0,
  		minutes: 0,
  		seconds: 0,
  		milliseconds: 0
  	});




  	const xScale = d3.time.scale()
	    .domain([minDomainDate, maxDomainDate])
		  .range([classLegendX, width-classLegendX])
      ;

    // Add current date line.
  	svg
  		.append("line")
  		.attr({
  			x1: xScale(currentDateMoment),
  			y1: 0,
  			x2: xScale(currentDateMoment),
  			y2: height,
  			'stroke-width': 2,
  			'stroke': '#965b93'
  		})
    ;



  	// Add x axes
    const xAxisGrid = d3.svg.axis()
  		.scale(xScale)
  		.orient("bottom")
      .tickSize(-height)
  		.ticks(d3.time.days, 1)
      .tickFormat("")
  	;

  	const xAxisTicks = d3.svg.axis()
  		.scale(xScale)
  		.orient("bottom")
  		.ticks(d3.time.days, 1)
  	;

  	const xAxisOffsets = d3.svg.axis()
  		.scale(xScale)
  		.orient("bottom")
  		.ticks(d3.time.days, 2)
  		.tickFormat(date => {
  			var duration = moment.duration(moment(date).diff(currentDateMoment));
  			var days = duration.asDays();
  			return days;
  		})
  	;

  	const xAxisDates = d3.svg
  		.axis()
  		.scale(xScale)
  		.orient("bottom")
  		.ticks(d3.time.days, 2)
  		.tickFormat(date => moment(date).format('M/D'))
  	;

  	const xAxisDays = d3.svg
  		.axis()
  		.scale(xScale)
  		.orient("bottom")
  		.ticks(d3.time.days, 2)
  		.tickFormat(date => moment(date).format('ddd'))
  	;

  	// Add X-axis ticks
  	svg
  		.append("g")
  		.attr({
  			class: "axis axis--x axis--x-ticks"
  		})
  		.attr("transform", "translate(0," + (height - paddingBottom) + ")")
  		.call(xAxisTicks)
  	;

    svg
  		.append("g")
  		.attr({
  			class: "axis axis--x axis--x-grid"
  		})
  		.attr("transform", "translate(0," + (height - paddingBottom) + ")")
  		.call(xAxisGrid)
  	;

  	// Add X-axis Offsets
  	svg
  		.append("g")
  		.attr({
  			class: "axis axis--x axis--x-offsets"
  		})
  		.attr("transform", "translate(0," + (height - paddingBottom + 5) + ")")
  		.call(xAxisOffsets)
  	;

  	// Add X-axis Offsets
  	svg
  		.append("g")
  		.attr({
  			class: "axis axis--x axis--x-dates"
  		})
  		.attr("transform", "translate(0," + (height - paddingBottom + 35) + ")")
  		.call(xAxisDates)
  	;

  	// Add X-axis Offsets
  	svg
  		.append("g")
  		.attr({
  			class: "axis axis--x axis--x-days"
  		})
  		.attr("transform", "translate(0," + (height - paddingBottom + 65) + ")")
  		.call(xAxisDays)
  	;

  	// Add Class Legend
  	const classes = [
  		{
  			name: 'ECE200',
  		},
  		{
  			name: 'CHEM330'
  		},
  		{
  			name: 'PHYS200'
  		},
  		{
  			name: 'MATH300'
  		},
  		{
  			name: 'PSY100'
  		}
  	];

    const yScale = d3.scale.ordinal()
      .domain(classes.map(x => x.name))
      .rangeRoundPoints([0, 400])
    ;

    // Add y axes
    const yAxisGrid = d3.svg.axis()
      .scale(yScale)
      .tickSize(-width)
      .orient("left")
    ;

    svg
  		.append("g")
  		.attr({
  			class: "axis axis--y axis--y-grid"
  		})
    	.attr("transform", `translate(${130},${(height - paddingBottom - 500)})`)
  		.call(yAxisGrid)
  	;

    svg
      .selectAll('.axis--y-grid text')
      .attr("transform", `translate(${-50},0)`)
    ;

  	const stripNonDate = m => {
  		return m.set({
  			hours: 0,
  			minutes: 0,
  			seconds: 0,
  			milliseconds: 0
  		});
  	};

  	const scaledDate = event => xScale(stripNonDate(moment(event.dueDate)));

  	//const circles =
    svg
  		.selectAll("xyz")
  		.data(assignments)
  		.enter()
  		.append("circle")
  		.attr({
  			cx: scaledDate,
  			cy: d => yScale(d.classId) + height - paddingBottom - 500,
  			r: 25
  		})
  		.style({
  			fill: '#965b93'
  		})
  		.text(d => d.title)
      .on('click', (d) => {
        this.sendAction('action', d);
      })
  	;

  	//const lines =
    svg
  		.selectAll("xyz")
  		.data(assignments)
  		.enter()
  		.append("line")
  		.attr({
  			x1: scaledDate,
  			y1: height - paddingBottom,
  			x2: scaledDate,
  			y2: d => yScale(d.classId) + height - paddingBottom - 500,
  			'stroke-width': 2,
  			'stroke': 'rgba(150, 91, 147, 0.5)'
  		})
  	;
  })
});
