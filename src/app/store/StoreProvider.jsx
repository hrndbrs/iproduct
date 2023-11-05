"use client";

import { store } from ".";
import { Provider } from "react-redux";

function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default StoreProvider;
