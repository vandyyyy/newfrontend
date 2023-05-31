import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store from "./redux/store";
import { configureChains, WagmiConfig, createClient } from "wagmi"
import {polygonMumbai} from "wagmi/chains";
import {publicProvider } from "wagmi/providers/public";
// import { createClient } from 'wagmi';
const { chains,provider,webSocketProvider } = configureChains([polygonMumbai],[publicProvider()],);

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider
})


ReactDOM.render(
  <WagmiConfig client={client}>
  <Provider store={Store}>
    <App />
  </Provider>
  </WagmiConfig>,
  document.getElementById("root")
);

reportWebVitals();
