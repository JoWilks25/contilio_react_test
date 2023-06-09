import React from 'react'
import './DashboardPage.scss';
import Table from './components/Table';
import HorizontalBarChart from './components/HorizontalBarChart';
import Range from './components/Range';

/**
 * 
 * I define existing states with 'null' and empty strings, so I can use
 * a basic falsy check for determining when to render loading indicators
 * or when to render the actual component. (Use this pattern to deal
 * mostly with async data sourcing).
 * 
 * Had a scrolling issue on the x-axis, which I didn't fix as I could
 * tell it was going to take too much time, (when you decrease the width
 * of the page you'll see it).
 * To offset the issue somewhat, I centre aligned the content of the tables
 * to try minimise to some degree the content floating off to the left of 
 * the screen.
 */
class DashboardPage extends React.Component {
  constructor() {
    super()
    this.state = {
      allData: null,
      tableData: null,
      title: '',
    }
    this.handleRangeChange = this.handleRangeChange.bind(this)
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
      this.setState({ allData: data, tableData: attributes, title: title })
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

  handleRangeChange(event) {
    const { title, attributes } = this.state.allData[event.target.value]
    this.setState({ tableData: attributes, title: title })
  }

  render() {
    const { tableData, title, allData } = this.state;
    return (
      <div className='DashboardPage'>
        <h1>{title}</h1>
        <div className='TableChartContainer'>
          <div className='TableContainer'>
            {!tableData ? <span>...Loading</span> : <Table tableData={tableData} title={title} />}
          </div>
          <div className='ChartContainer'>
            {!tableData ? <span>...Loading</span> : <HorizontalBarChart data={this.generateChartData()} />}
          </div>
        </div>
        <div className='RangeContainer'>
          {!tableData 
            ? <span>...Loading</span>
            : <Range options={allData?.map((dataObj) => dataObj?.title)} onHandleChange={this.handleRangeChange} />}
        </div>
      </div>
    )
  }
}

export default DashboardPage;
