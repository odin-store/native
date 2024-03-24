import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider as ReduxProvider } from "react-redux";
import "./styles/global/global.scss";
import "./styles/global/layout.scss";
import { store } from "./util/redux/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
);
