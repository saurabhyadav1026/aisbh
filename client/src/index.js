
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import App from './App'




console.log = () => {};
console.warn = () => {};
console.error = () => {};
window.onerror = ()=> {
  return true; // prevents showing any error in console
};








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

    <div id="main_content">


      <App ></App>

    </div>



    <footer id="footer">
      <div> @SbhTechHub PRODUCTIONS</div>
           
    </footer>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
