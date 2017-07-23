import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home/Home';
import registerServiceWorker from './registerServiceWorker';

require('./Home/Home.css');

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
