import React from 'react'
import './DashboardPage.scss';
import Table from './Table';

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
      this.setState({ allData: data[0], tableData: data[0], title: data?.[0]?.title })
    })
  }

  render() {
    const { state: { tableData, title } } = this;
    console.log('tableData', tableData);
    return (
      <div className='DashboardPage'>
        <h1>{title}</h1>
        <div className='TableChartContainer'>
          {/* Table */}
          <div className='TableContainer'>
            {!tableData ? <span>...Loading</span> : <Table tableData={tableData} />}
          </div>
          <div className='ChartContainer'>
            Chart goes here
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardPage;
