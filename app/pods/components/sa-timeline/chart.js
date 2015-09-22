import moment from 'moment';
import d3 from 'd3';

function timeline() {
  const height = 800;
  const width = 1800;
  const minScale = 1;
  const maxScale = 10;
  //const aspect = Math.floor(height / width);
  //const paddingLeft = 100;
  const paddingBottom = 200;
  const classLegendX = 130;
  const circleDefaultRadius = 25;

  const stripNonDate = m => {
    return m.set({
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    });
  };

  const minDomainDate = stripNonDate(moment()).add(-10, 'days');
  const maxDomainDate = stripNonDate(moment()).add(100, 'days');
  const currentDateMoment = stripNonDate(moment());

  const circleRadius = (circleDefaultRadius, maxScale) => {
    return (scale) => {
      if(scale > 7) {
        return circleDefaultRadius;
      }
      else {
        return scale/maxScale * circleDefaultRadius;
      }
    }
  }(circleDefaultRadius, maxScale);

  let classes;
  let data;
  let dataKey;
  let svg;

  console.log(`timeline created`);

  // Things to run one time.
  function chart(element) {
    const container = d3.select(element);
    svg = container.append("svg")
  		.attr({
  			width: '100%',
  			viewBox: `0 0 ${width} ${height}`,
  			preserveAspectRatio: 'xMidYMid'
  		})
    ;
  }

  chart.classes = (value) => {
    classes = value;
    return chart;
  };

  chart.data = (value, key) => {
    data = value;
    dataKey = key;
    return chart;
  };

  chart.update = () => {
    console.log('classes: ', classes);
    console.log('data: ', data);

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
  			var days = Math.floor(duration.asDays());
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

    const scaledDate = event => xScale(stripNonDate(moment(event.dueDate)));

    const zoom = d3.behavior.zoom()
      .x(xScale)
      .scaleExtent([minScale, maxScale])
      .on("zoom", () => zoomed(svg))
    ;

    const zoomed = (svg) => {

      // TODO: How to add limits to panning / translating.
      // https://github.com/mbostock/d3/issues/1084
      const [ translateX, translateY ] = zoom.translate();
      const [ viewPortDomainMin, viewPortdomainMax ] = xScale.domain();
      const [ minRangePixel, maxRangePixel ] = xScale.range();
      const viewPortRangeMin = xScale(minDomainDate);
      const viewPortRangeMax = xScale(maxDomainDate);
      const scale = zoom.scale();

      console.log(`zoomed:
        domainMin:\t\t\t${minDomainDate.toString()}
        viewPortDomainMin:\t${viewPortDomainMin}
        viewPortRangeMin:\t${viewPortRangeMin}

        domainMax:\t\t\t${maxDomainDate.toString()}
        viewPortdomainMax:\t${viewPortdomainMax}
        viewPortRangeMax:\t${viewPortRangeMax}

        translateX:\t\t${translateX}
        minRangePixel:\t${minRangePixel}
        maxRangePixel:\t${maxRangePixel}
        scale:\t\t${zoom.scale()}
      `);

      // if(viewPortRangeMin > minRangePixel) {
      //   zoom.translate([0, translateY]);
      // }
      // else if(domainMax > maxDomainDate) {
      //   zoom.translate([translateX - maxRangePixel + rangeMax, translateY]);
      // }

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
          r: circleRadius(scale)
        })
      ;

    };

    zoom.scale(5);
    zoom.translate([-900,0]);

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
  		.data(data, dataKey)
  		.enter()
  		.append("circle")
      .classed('event', true)
  		.attr({
  			cx: scaledDate,
  			cy: d => yScale(d.classId) + height - paddingBottom - 500,
  			r: circleRadius(zoom.scale())
  		})
  		.style({
  			fill: '#965b93'
  		})
  		.text(d => d.title)
      .on('click', (d) => {
        const model = data.find(event => event.id === d.id);
        console.log(model);
        // this.sendAction('action', model);
      })
  	;

    svg
  		.selectAll("xyz")
  		.data(data)
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

  };


  return chart;
}

export default timeline;
