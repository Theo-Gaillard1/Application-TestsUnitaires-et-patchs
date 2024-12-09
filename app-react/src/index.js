import React from 'react';
import ReactDOM from 'react-dom';
import CarbonProvider from "carbon-react/lib/components/carbon-provider";
import GlobalStyle from "carbon-react/lib/style/global-style";
import sageTheme from "carbon-react/lib/style/themes/sage";
import "carbon-react/lib/style/fonts.css";
import Typography from "carbon-react/lib/components/typography";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const CarbonApp = (props) => {
  return (
    <CarbonProvider theme={sageTheme}>
      <GlobalStyle />
      <Typography></Typography>
      <App />
    </CarbonProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <CarbonApp />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
