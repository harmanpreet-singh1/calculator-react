/********************************************
 * Author: Harmanpreet Singh
 * Date: 29th Aug 2018
 ********************************************/

import React, { PureComponent } from 'react';
import Logo from './casio_logo.svg';
import './styles.css';

/******************************************
 * Calculator Header component starts here.
 * React.PureComponent implements shouldComponentUpdate() with a shallow prop and state comparison.
 ******************************************/
class CalculatorHead extends PureComponent {
  render() {
    return (
      <header className="head">
        <img src={Logo} alt="Casio Logo" />
        <div className="solar-power">
          <div className="solar-row">
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
          </div>
          <div className="tag-line">TWO WAY POWER</div>
        </div>
      </header>
    );
  }
}

export default CalculatorHead;
