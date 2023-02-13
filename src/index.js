import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'
import App from './frontend/components/App';
import * as serviceWorker from './serviceWorker';
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";
import { createReactClient,studioProvider,LivepeerConfig } from "@livepeer/react";

const provider = new AuthProvider(`3fed620422308576aa17dbdf76df0bab8c715c69`) // required
const client = createReactClient({
    provider:studioProvider({
        apiKey: "805433f7-f582-43f4-9b5c-4e1ccd023bb0"
    })
});

const rootElement = document.getElementById("root");
render(
    <ProvideAuth provider={provider}>
        <LivepeerConfig client={client}>
            <App />
        </LivepeerConfig>
    </ProvideAuth>,
rootElement);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
