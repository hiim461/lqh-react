import React from "react";
import ReactDOM from "react-dom/client";
//Lưu ý import phía trước file css
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

//import redux store
import store from "./store";
//import component Provider từ react-redux để kết nối redux store với component của react
import { Provider } from "react-redux";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render tương tự innerHTML của root
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>

  // </React.StrictMode>
  //Lưu ý nếu để stru=ict mode thì nó sẽ chạy luôn unmount trong effect
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
