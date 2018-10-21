import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Login from "./login/Login";

ReactDOM.render(<Login />, document.getElementById('root'));
registerServiceWorker();
