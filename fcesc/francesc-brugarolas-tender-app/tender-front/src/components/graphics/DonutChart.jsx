import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import * as d3 from 'd3';
import './barchart.sass';

const MOCK_DATA = [12, 5, 23, 14, 9, 31];
const COLORS = [ '#5c1800', '#a02b00', '#e53d00', '#ea6433', '#f29e80', '#fad8cc', 'red', 'green' ];

function DonutChart() {
  const [ data ] = useState( [ ...MOCK_DATA ] );
  const svgRef = useRef();
  const [ width, setWidth ] = useState( 0 );

  function getTotal(array){
    const totalReducer = (a, b) => a + b;
    return array.reduce(totalReducer);
  }

  function drawChart(){
    const w = (width === 0) ? Math.floor(Number(window.getComputedStyle(svgRef.current).width.slice(0,-2))) : width;
    const radius = Math.floor(Math.min(400, w * 0.5 * 0.8));
    const h = Math.floor(Math.max(Math.min(w, 500), radius*2)) + 10;  
    const donutWidth = Math.max(40, Math.floor(radius / Math.PI));

    const total = getTotal(data);

    function slice(d, i){
      const startA = ( i === 0 ) ? 0 : getTotal( data.slice( 0, i ) );
      const endA = getTotal( data.slice( 0, i + 1) );
      const radiantsStartA = (startA/total)*Math.PI*2;
      const radiantsEndA = (endA/total)*Math.PI*2;
      const arc = d3
        .arc()
        .innerRadius(radius-donutWidth)
        .outerRadius(radius)
        .startAngle(radiantsStartA)
        .endAngle(radiantsEndA);
      return arc;
    }

    const svg = d3.select(svgRef.current)
      .append("svg")
      .attr("width", w)
      .attr("height", h)

    svg.selectAll("path")
      .data(data)
      .enter()
      .append("path")
      .attr("transform", `translate(${Math.floor(w/2)}, ${Math.floor(h/2)})`)
      .attr("d", (d, i) => slice(d, i)())
      .attr("fill", (d, i) => {console.log(COLORS[i]); return `${COLORS[i]}`})
      .attr("stroke", `#f6f6f6`)
      .attr("stroke-width", "1px")
      .transition().duration(2000)
      .attr("transform", `translate(${Math.floor(w/2)}, ${Math.floor(h/2)}) rotate(180)`);
  }

  function setNewSize(){
    if(svgRef.current){
      setWidth(Math.floor(Number(window.getComputedStyle(svgRef.current).width.slice(0,-2))));
    }
  }

  useLayoutEffect(() => {
    window.addEventListener('resize', setNewSize);
    d3.select(svgRef.current).selectAll('*').remove();
    return () => {
      window.removeEventListener('resize', setNewSize);
    }
  })

  useEffect(()=>{
    drawChart();
  }, [ data, width ]);


  return(
    <div className='chart__container'>
      <div className='charts chart1' ref={svgRef}>
      </div>
    </div>
  );
}

export default DonutChart;