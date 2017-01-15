import './Controls.css';

import React, {Component, PropTypes} from 'react';

import Adjuster from 'components/Adjuster';

class Controls extends Component {
  static propTypes = {
    adjusters: PropTypes.array.isRequired,
    adjusterOnChange: PropTypes.func,
    colorFuncStr: PropTypes.string,
    shortNamesOnClick: PropTypes.func,
    useShortNames: PropTypes.bool.isRequired
  }

  static defaultProps = {
    adjusterOnChange: () => {},
    colorFuncStr: '',
    shortNamesOnClick: () => {}
  }

  render() {
    const {
      adjusters,
      adjusterOnChange,
      colorFuncStr,
      shortNamesOnClick,
      useShortNames
    } = this.props;

    const adjusterListItems = adjusters.map(a => {
      const props = {
        ...a,
        onChange: adjusterOnChange
      }

      return (
        <li key={`${a.name}Adjuster`}>
          <Adjuster {...props} />
        </li>
      );
    });

    return (
      <div className='controls'>
        <div className='color-function'>
          <label className='controls-heading' htmlFor='colorFunc'>
            Color function
            <button onClick={shortNamesOnClick}>
              {useShortNames ? 'Use full names' : 'Use short names' }
            </button>
          </label>
          <input className='resetInput color-function-input'
            id='colorFunc'
            type='text'
            readOnly
            value={colorFuncStr} />
        </div>
        <h3 className='controls-heading'>
          Adjusters
        </h3>
        <ul className='controls-list'>
          {adjusterListItems}
        </ul>
      </div>
    );
  };
}

export default Controls;
