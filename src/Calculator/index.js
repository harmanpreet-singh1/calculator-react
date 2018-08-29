/********************************************
 * Author: Harmanpreet Singh
 * Date: 29th Aug 2018
 ********************************************/

import React, { PureComponent } from 'react';
import Head from './view/Head';
import MainLayout from './view/MainLayout';
import keys from './view/MainLayout/keys';
import './styles.css';

import process from './logic/processKey';

/******************************************
 * This initial state will be loaded first.
 ******************************************/
export const initialState = {
  open: false,
  currentEntry: 0,
  nextEntry: null,
  operation: null,
  float: false,
  memory: null,
  automaticTurnOff: null,
  lastAction: null,
  lastCalculation: {},
};

const automaticTurnOffTime = 600000; // Automatically turns off after 1 min of inactivity

/******************************************
 * Main component starts here and I used PureComponent because 
 * React.PureComponent implements shouldComponentUpdate() with a shallow prop and state comparison.
 ******************************************/
class Calculator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  /******************************************
  * This is the main click handler for all the buttons. 
  * It will change the state and also restart the timer for turing of the calculator after 1 min of inactivity.
  ******************************************/
  handleClick = (key) => {
    const { automaticTurnOff } = this.state;
    if (automaticTurnOff) {
      clearTimeout(automaticTurnOff);
    }
    this.setState({
      lastAction: null,
      lastCalculation: {},
      ...process(this.state, key), // Calling process function which will return the new state as required.
      automaticTurnOff: setTimeout(() => {
        const turnOffKey = keys.find(k => k.value === "off");
        this.setState(process(this.state, turnOffKey));
      }, automaticTurnOffTime)
    });
  }

  render() {
    const { open, nextEntry, currentEntry, memory } = this.state;
    return (
      <div className="calculator">
        <Head />
        <main>
          <div className="screen">
            <div className="in">
              <span className="display-value">
                {open ? nextEntry || currentEntry : ''}
              </span>
              {!!memory &&
                <span className="memory-sign">
                  M
                  <div>&#x029EB;</div>
                  E
                </span>
              }
            </div>
          </div>
          <div className="pad">
            <h2 className="model-text">SL-300SV</h2>
            <MainLayout
              onChange={this.handleClick}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default Calculator;
