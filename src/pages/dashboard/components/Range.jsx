import React from 'react'
import './Range.scss';

/**
 * Tried to make this a bit more dynamic, by letting it auto-calculate
 * the number of steps and labels as per the provided Options.
 * Had to do a subtraction (on the max) to ensure there were just 
 * as many labels as there were actual options, to avoid an 'orphan'
 * option.
 */
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
