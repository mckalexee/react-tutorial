import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/normalize.css/normalize.css';
import './index.scss';

const Index = () => {
  const helloText = 'Hello World!';

  return <div>{helloText}</div>;
};

ReactDOM.render(<Index />, document.getElementById('root'));

