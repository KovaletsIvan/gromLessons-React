import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.querySelector('#root');

const renderSeconds = (time) => {
  const seconds = new Date(time).getSeconds();
  const styleEven = {
    backgroundColor: 'white',
    color: 'black',
  };

  const styleOdd = {
    backgroundColor: 'black',
    color: 'white',
  };

  const style = seconds % 2 === 0 ? styleEven : styleOdd;

  const element = (
    <>
      <span className="seconds" style={style}>
        Now is {seconds}
      </span>
    </>
  );

  ReactDOM.render(element, rootElement);
};

setInterval(() => renderSeconds(new Date()), 1000);
