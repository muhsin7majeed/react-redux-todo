import React from "react";
import "./App.css";
import Test from "./components/Todos";

import { Provider } from "react-redux";
import { createStore } from "redux";

// importing reducers, usually combined reducer
import todoReducer from "./components/reducers/todoReducer";
const store = createStore(todoReducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Test />
      </Provider>
    </div>
  );
}

export default App;
