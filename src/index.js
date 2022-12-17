// var appID = "APP_ID";
// var region = "REGION";
// var appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
// CometChat.init(appID, appSetting).then(
//   () => {
//     console.log("Initialization completed successfully");
//   },
//   error => {
//     console.log("Initialization failed with error:", error);
//   }
// );


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// // import './index.css';

// ReactDOM.render(
// <React.StrictMode>
// 	<App />
// </React.StrictMode>,
// document.getElementById('root')
// );


import ReactDOM from "react-dom";
import App from "./App";
import { SessionProvider } from "@inrupt/solid-ui-react";
import "./index.css";
ReactDOM.render(
  <SessionProvider>
    <App />
  </SessionProvider>,
  document.getElementById("root")
);