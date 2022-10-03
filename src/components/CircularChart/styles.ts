import styled from 'styled-components';

export const SingleChart = styled.div`
    width: 90%;
    max-height: 100px;
    justify-content: space-around ;

    circular-chart {
        display: block;
        max-width: 80%;
        max-height: 150px;
        padding:30px;
      }
      
      .circle-bg {
        fill: none;
        stroke: rgba(255, 255, 255, 0.13);;
        stroke-width: 1.8;
      }
      
      .circle {
        fill: none;
        stroke-width: 2.8;
        stroke-linecap: round;
        animation: progress 1s ease-out forwards;
      }
      
      @keyframes progress {
        0% {
          stroke-dasharray: 0 100;
        }
      }
      
      .circular-chart.orange .circle {
        stroke: #ff9f00;
      }
      
      .circular-chart.green .circle {
        stroke: #6BFCFC;
      }
      
      .circular-chart.blue .circle {
        stroke: #3c9ee5;
      }
      
      .percentage {
        fill: #FFF;
        font-family: sans-serif;
        font-size: 0.5em;
        text-anchor: middle;
        font-family: 'Rajdhani', sans-serif;
        font-weight: 600;
        color: #FFF;
      }
`