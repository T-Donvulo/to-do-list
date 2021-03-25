import React from 'react';
import ReactDOM from 'react-dom';
import Global from './component/Global/Global'
import App from './component/App/App';


ReactDOM.render(
  <React.StrictMode>
        <Global>
            <App />
        </Global>
    
  </React.StrictMode>,
  document.getElementById('root')
);


