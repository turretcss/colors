import './Swatch.css';

import React, {Component, PropTypes} from 'react';

class Swatch extends Component {
  static propTypes = {
    inputColor: PropTypes.string.isRequired,
    inputColorDisplay: PropTypes.string.isRequired,
    inputContrastColor: PropTypes.string.isRequired,
    colorOnChange: PropTypes.func,
    outputColor: PropTypes.string.isRequired,
  }

  static defaultProps = {
    colorOnChange: () => {}
  }

  render() {
    const {
      inputColor,
      inputColorDisplay,
      colorOnChange,
      inputContrastColor,
      outputColor,
    } = this.props;

    return (
      <div className='swatch'
        style={{
          backgroundColor: outputColor || inputColor,
          swatch: inputContrastColor
        }}>

        <div className='swatch-inner'>
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
            onChange={colorOnChange} />
          <small>Base hex, rgb(a), or keyword swatch</small>
        </div>
      </div>
    );
  };
}

export default Swatch;
