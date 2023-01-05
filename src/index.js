import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import '../node_modules/react-bootstrap/dist/react-bootstrap'; //react bootstrap configuration
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import store from './store/index';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>);
