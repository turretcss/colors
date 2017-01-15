import './Swatch.css';

import React, {Component, PropTypes} from 'react';

class Swatch extends Component {
  static propTypes = {
    inputColor: PropTypes.string.isRequired,
    inputColorDisplay: PropTypes.string.isRequired,
    inputColorOnChange: PropTypes.func,
    inputContrastColor: PropTypes.string.isRequired,
    outputColor: PropTypes.string.isRequired,
    outputContrastColor: PropTypes.string.isRequired
  }

  static defaultProps = {
    inputColorOnChange: () => {}
  }

  render() {
    const {
      inputColor,
      inputColorDisplay,
      inputColorOnChange,
      inputContrastColor,
      outputColor,
      outputContrastColor
    } = this.props;

    return (
      <div className='swatches'>
        <div className='swatch-container'
          style={{
            backgroundColor: inputColor,
            swatch: inputContrastColor
          }}>

          <div className='swatch-info'>
            <input className='reset-input swatch-input'
              style={{
                swatch: inputContrastColor
              }}
              type='text'
              value={inputColorDisplay}
              autoComplete='off'
              autoCorrect='off'
              autoCapitalize='off'
              spellCheck='false'
              onChange={inputColorOnChange} />
            <small>Base hex, rgb(a), or keyword swatch</small>
          </div>
        </div>

        <div className='swatch-container'
          style={{
            backgroundColor: outputColor,
            color: outputContrastColor
          }}>
          <div className='swatch-info'>
            <input className='reset-input swatch-input'
              style={{
                color: outputContrastColor
              }}
              type='text'
              readOnly
              value={outputColor} />
            <small>Output color</small>
          </div>
        </div>
      </div>
    );
  };
}

export default Swatch;
