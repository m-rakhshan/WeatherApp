import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
//redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./src/redux/store";
import { Auth0Provider } from "react-native-auth0";
//navigation
import Root from "./src/naivgation";
//custom import
import colors from "./src/constants/colors";
import Loader from "./src/components/splash";
import { KEYS } from './src/constants/keys';

const App = () => {
  return (
    <Auth0Provider
      domain={KEYS.AUTHO_DOMAIN}
      clientId={KEYS.AUTHO_CLIENT_ID}
    >
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <>
            <StatusBar style={"light"} backgroundColor={colors.black} />
            <Root />
          </>
        </PersistGate>
      </Provider>
    </Auth0Provider>
  );
};

export default App;
