import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
};

/**
 * Used a framework for the chart, as it is stable works well, 
 * and for this task an overcustomised chart wasn't necessary
 */
class HorizontalBarChart extends React.Component {
  render() {
    const { options, data } = this.props
    return <Bar options={options} data={data} />
  }
}

export default HorizontalBarChart;