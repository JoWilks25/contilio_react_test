import React from 'react'
import './Range.scss';


class Range extends React.Component {
  render() {
    const { options, onHandleChange } = this.props;
    return (
      <div className='RangeContainer'>
        <input type="range" id="range" name="temp" list="values" min={0} max={options.length - 1} step={1} onChange={onHandleChange}/>
        <datalist id="values">
          {
            options.map((option, index) => <option key={option} value={index} label={option} />)
          }
        </datalist>
      </div>
    )
  }
}

export default Range;
