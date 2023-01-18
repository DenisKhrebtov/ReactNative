import { Provider } from "react-redux";

import { store } from "./assets/redux/store";

import { Main } from "./assets/Main";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
