import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import * as d3 from "d3";



function BarChart(props) {

  const svgRef = useRef();
  const data = props.data;
  const [w, setWidth] = useState(data.length * 85 || 400);
  const [h, setHeight] = useState(400);
  const colors = ['#EBE767', '#229E38', '#87B242'];

  function drawChart() {
    function getHMax() {
      const callback = (acc, value) => acc > value ? acc : value;

      return data.reduce(callback)
    }

    setWidth(data.length * 90);
    if (data.length) {
      setHeight(getHMax() * 5 + 30);
    }

    const svg = d3.select('div.chart')
      .append("svg")
      .attr("width", w)
      .attr("height", h);
    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 90)
      .attr("width", 80)
      .transition().duration(1000)
      .attr("y", (d, i) => h - 5 * d)
      .attr("height", (d, i) => d * 5)
      .attr("fill", (d, i) => `${colors[i]}`);
    svg.selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d) => `${((d / 100) * 100).toFixed()} %`)
      .transition().duration(1000)
      .attr("x", (d, i) => (i * 90) + 20)
      .attr("y", (d, i) => h - (5 * d) - 10)
  }

  function setNewSize() {
    if (svgRef.current) {
      setWidth(Math.floor(Number(window.getComputedStyle(svgRef.current).width.slice(0, -2))))
    }
  }

  useLayoutEffect(() => {
    window.addEventListener('resize', setNewSize);
    d3.select(svgRef.current).selectAll('*').remove();
    return () => {
      window.removeEventListener('resize', setNewSize);
    }
  })

  useEffect(() => {

    drawChart();

  }, [data.length, w]);

  return (
    <div ref={svgRef} className='chart'>

    </div>
  )
}

export default BarChart;