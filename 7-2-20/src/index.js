// const papa = require('papaparse');
// const DataFrame = require("dataframe-js").DataFrame;

import file from "url:../static/cs448b_ipasn.csv"


/* NOTE: the following was used for data analysis, could be brought back in for better analysis */

// let count = 0;
// let headers;
// let csvData = [];

// papa.parse(file, {
//     header: true,
//     download: true,
//     step: function({data, errors, meta}) {
//         if (count == 0) headers = meta.fields
//         count++;
//         csvData.push(data)
//     },
//     complete: function(results, file) {
//         console.log(`Parsing complete read ${count} records.`); 
//         // Note: 
//         // Headers are - date, l_ipn, r_asn, f
//         const df  = new DataFrame(csvData, headers)
//     }
// });

// set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 1560 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// set the ranges
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// define the 1st line
var valueline = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.f); });

// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Get the data
d3.csv(file, function(error, data) {
  if (error) throw error;

  // format the data
  data.forEach(function(d) {
      d.date = d3.timeParse("%Y-%m-%d")(d.date);
      d.f = +d.f;
  });

  // Scale the range of the data
  x.domain(d3.extent(data, function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) {
	  return Math.max(10000); })]);

//   Add the valueline path.
  svg.append("path")
      .data([data])
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 1.5)
      .attr("d", valueline);

  // Add the X Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // Add the Y Axis
  svg.append("g")
      .call(d3.axisLeft(y));

});