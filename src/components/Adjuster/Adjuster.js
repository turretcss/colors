import './Adjuster.css';

import React, {Component, PropTypes} from 'react';

class Adjuster extends Component {
  static propTypes = {
    enabled: PropTypes.bool.isRequired,
    max: PropTypes.number,
    min: PropTypes.number,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    unit: PropTypes.string,
    value: PropTypes.number.isRequired
  }

  static defaultProps = {
    enabled: false,
    max: 100,
    min: 0,
    onChange: () => {},
    unit: ''
  }

  render() {
    const {
      enabled,
      max,
      min,
      name,
      onChange,
      value
    } = this.props;

    return (
      <div className='adjuster'>
        <label className='adjuster-label'
          htmlFor={`adjuster${name}`}>

          <input className='adjuster-value-checkbox'
            id={`adjuster${name}`}
            type='checkbox'
            name={name}
            checked={enabled}
            onChange={onChange} />
            {name}
        </label>
        <div className={`adjuster-value ${enabled ? '' : 'adjuster-value-disabled'}`}>
          <div className='adjuster-range-container'>
            <input className='adjuster-value-range'
              aria-label={`${name} value`}
              type='range'
              name={`${name}Value`}
              min={min}
              max={max}
              value={value}
              onChange={onChange} />
          </div>

          <div className='adjuster-input-container'>
            <input className='adjuster-value-input'
              aria-label={`${name} value`}
              type='number'
              name={`${name}Value`}
              min={min}
              max={max}
              value={`${value}`}
              onChange={onChange} />
          </div>
        </div>
      </div>
    );
  }
}

export default Adjuster;
