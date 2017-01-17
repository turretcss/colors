import './Swatch.css';

import React, {Component, PropTypes} from 'react';

class Swatch extends Component {
  static propTypes = {
    baseColor: PropTypes.string.isRequired,
    baseColorDisplay: PropTypes.string.isRequired,
    contrastColor: PropTypes.string.isRequired,
    colorOnChange: PropTypes.func,
    outputColor: PropTypes.string,
  }

  static defaultProps = {
    colorOnChange: () => {}
  }

  render() {
    const {
      baseColor,
      baseColorDisplay,
      colorOnChange,
      contrastColor,
      outputColor,
    } = this.props;

    return (
      <div className='swatch'
        style={{
          backgroundColor: outputColor || baseColor,
          swatch: contrastColor
        }}>

        <div className='swatch-inner'>
          <input className='reset-input swatch-input'
            style={{
              swatch: contrastColor
            }}
            type='text'
            value={baseColorDisplay}
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
