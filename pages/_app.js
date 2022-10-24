import "../styles/globals.css";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { store, persistor } from "../redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
      <ToastContainer />
    </Provider>
  );
}

export default MyApp;
