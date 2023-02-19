import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'
import App from './frontend/components/App';
import * as serviceWorker from './serviceWorker';
import { AuthProvider, CHAIN } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";
import { createReactClient,studioProvider,LivepeerConfig } from "@livepeer/react";

const appAddress = '3fed620422308576aa17dbdf76df0bab8c715c69' 
const auth = new AuthProvider(`${appAddress}`, { //required
      network: 'testnet', //defaults to 'testnet'
      position: 'right', //defaults to right
      theme: 'dark', //defaults to dark
      alwaysVisible: true, //defaults to true which is Full UI mode
      chainConfig: {
        chainId: CHAIN.POLYGON_MUMBAI_TESTNET, //defaults to CHAIN.ETHEREUM_MAINNET
        rpcUrl: 'https://polygon-mumbai.g.alchemy.com/v2/-Q3bwbk7Y-wznNCM9wzRsSffp7R8zNUs', //defaults to 'https://rpc.ankr.com/eth'
      },
})

const client = createReactClient({
    provider:studioProvider({
        apiKey: "805433f7-f582-43f4-9b5c-4e1ccd023bb0"
    })
});

const rootElement = document.getElementById("root");
render(
    <ProvideAuth provider={auth}>
        <LivepeerConfig client={client}>
            <App auth={auth}/>
        </LivepeerConfig>
    </ProvideAuth>,
rootElement);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
