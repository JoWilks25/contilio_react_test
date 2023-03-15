import React from 'react'
import './Table.scss';

const headerTitles = ['Name', 'Value']

/**
 * Kept the table simple using the <table> etc tags, as there were 
 * so few data points, that installing a library seemed like overkill
 */
class Table extends React.Component {
  render() {
    const { tableData, title } = this.props;
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
            tableData.map((dataObj, index) => {
              const { name, value, unit } = dataObj;
              return (
                <tr key={`${title}-${name}-${value}-${index}`} className='DataRow'>
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
