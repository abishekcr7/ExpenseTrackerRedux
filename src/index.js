import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';
import AuthContext, { AuthContextProvider } from './Components/Store/Auth-Context';
import ExpenseProvider from './Components/Store/ExpenseProvider';
import { Provider } from 'react-redux';
import store from './Components/Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <AuthContextProvider>
    {/* <ExpenseProvider> */}
  <BrowserRouter>
    <App />
  </BrowserRouter>
  {/* </ExpenseProvider> */}
  </AuthContextProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
