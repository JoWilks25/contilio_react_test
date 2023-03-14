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
    console.log('tableData', tableData);
    return (
      <div className='Table'>
        <tr className='HeaderRow'>
          {
            headerTitles.map((title) => <th className='HeaderCell'>{title}</th>)
          }
        </tr>
        {
          tableData.attributes.map((attribute) => {
            const { name, value } = attribute;
            return (
              <tr className='DataRow'>
                <td className='TableCell'>{name}</td>
                <td className='TableCell'>{value}</td>
              </tr>
            )
          })
        }
      </div>
    )
  }
}

export default Table;
