import Ember from 'ember';
import moment from 'moment';
import d3 from 'd3';

const {
  on
} = Ember;

export default Ember.Component.extend({
  classNames: ['sa-timeline__container'],

  setupSvg: on('didInsertElement', function () {
    const height = 800;
  	const width = 1800;
  	//const aspect = Math.floor(height / width);
  	//const paddingLeft = 100;
  	const paddingBottom = 200;
  	const classLegendX = 130;
  	const rootSelector = ".sa-timeline__container";
    const events = this.get('events');

  	const assignments = events.map(event => {
      let assignment = event.toJSON();
      assignment.id = event.get('id');
      return assignment;
    });

  	// create x-scale
  	const minDomainDate = moment().add(-10, 'days');
  	const maxDomainDate = moment().add(30, 'days');
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

  	// Add x axes
    const xAxisGrid = d3.svg.axis()
  		.scale(xScale)
  		.orient("bottom")
      .tickSize(-height+300)
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
  		// .ticks(d3.time.days, 2)
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
  		// .ticks(d3.time.days, 2)
  		.tickFormat(date => moment(date).format('M/D'))
  	;

  	const xAxisDays = d3.svg
  		.axis()
  		.scale(xScale)
  		.orient("bottom")
  		// .ticks(d3.time.days, 2)
  		.tickFormat(date => moment(date).format('ddd'))
  	;
    // Add Class Legend
  	const classes = assignments.map(assignment => { return { name: assignment.classId}; })

    const yScale = d3.scale.ordinal()
      .domain(classes.map(x => x.name))
      .rangeRoundPoints([0, 400])
    ;

    // Add y axes
    const yAxisGrid = d3.svg.axis()
      .scale(yScale)
      .tickSize(-width+260)
      .orient("left")
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

    const zoomed = (svg) => {
      svg.select('.axis--x-ticks').call(xAxisTicks);
      svg.select('.axis--x-grid').call(xAxisGrid);
      svg.select('.axis--x-offsets').call(xAxisOffsets);
      svg.select('.axis--x-dates').call(xAxisDates);
      svg.select('.axis--x-days').call(xAxisDays);

      svg.selectAll('line.eventpole')
        .attr({
          x1: scaledDate,
          x2: scaledDate
        })
      ;

      svg.selectAll('circle.event')
        .attr({
          cx: scaledDate,
    			cy: d => yScale(d.classId) + height - paddingBottom - 500,
        })
      ;
    };

    const zoom = d3.behavior.zoom()
      .x(xScale)
      .scaleExtent([0.125, 3])
      .on("zoom", () => zoomed(svg))
    ;

    const container = d3.select(rootSelector);
  	const svg = container.append("svg")
  		.attr({
  			width: '100%',
  			viewBox: `0 0 ${width} ${height}`,
  			preserveAspectRatio: 'xMidYMid'
  		})
    ;

    svg
      .append('rect')
      .attr({
        width: width,
        height: height
      })
      .classed('zoomtarget', true)
      .call(zoom)
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


    svg
  		.selectAll("xyz")
  		.data(assignments)
  		.enter()
  		.append("circle")
      .classed('event', true)
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
        const model = events.find(event => event.get('id') === d.id);
        this.sendAction('action', model);
      })
  	;

    svg
  		.selectAll("xyz")
  		.data(assignments)
  		.enter()
  		.append("line")
      .classed('eventpole', true)
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
