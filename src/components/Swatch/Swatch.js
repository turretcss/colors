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
        <div className='swatchContainer baseColorContainer'
          style={{
            backgroundColor: inputColor,
            swatch: inputContrastColor
          }}>

          <div className='swatchInfo'>
            <input className='resetInput swatchInput'
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

        <div className='swatchContainer outputColorContainer'
          style={{
            backgroundColor: outputColor,
            color: outputContrastColor
          }}>
          <div className='swatchInfo'>
            <input className='resetInput swatchInput'
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
