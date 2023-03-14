import React from 'react'
import './Table.scss';

const headerTitles = ['Name', 'Value']

class Table extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    const { props: { tableData } } = this;
    return (
      <table className='Table'>
        <thead>
          <tr className='HeaderRow'>
            {
              headerTitles.map((title) => <th key={title} className='HeaderCell'>{title}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            tableData.map((dataObj) => {
              const { name, value, unit } = dataObj;
              return (
                <tr key={value} className='DataRow'>
                  <td className='TableCell'>{name}</td>
                  <td className='TableCell'>{`${value}${unit}`}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }
}

export default Table;
