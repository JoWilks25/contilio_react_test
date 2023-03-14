import React from 'react'
import './DashboardPage.scss';
import Table from './Table';
import HorizontalBarChart from '../../components/HorizontalBarChart';

class DashboardPage extends React.Component {
  constructor() {
    super()
    this.state = {
      allData: null,
      tableData: null,
      title: '',
    }
  }

  componentDidMount() {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then((response) => {
      return response.json();
    }).then((data) => {
      const { title, attributes } = data[0]
      this.setState({ allData: data[0], tableData: attributes, title: title})
    })
  }

  generateChartData() {
    const { tableData, title } = this.state;
    return {
      labels: tableData?.map((datum) => `${datum.name} (${datum.unit})`),
      datasets: [
        {
          label: title,
          data: tableData?.map((datum) => datum.value),
          borderColor: 'rgb(0, 185, 255)',
          backgroundColor: 'rgba(0, 185, 255, 0.5)',
        },
      ],
    }
  };

  render() {
    const test = this.generateChartData()
    console.log(test);
    const { state: { tableData, title } } = this;
    return (
      <div className='DashboardPage'>
        <h1>{title}</h1>
        <div className='TableChartContainer'>
          <div className='TableContainer'>
            {!tableData ? <span>...Loading</span> : <Table tableData={tableData} />}
          </div>
          <div className='ChartContainer'>
            {!tableData ? <span>...Loading</span> : <HorizontalBarChart data={test} />}
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardPage;
