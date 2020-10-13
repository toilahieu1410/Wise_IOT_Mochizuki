
import React from 'react';
import MyStack from './AppNavigator';
import {Provider} from 'react-redux';
import store from './redux/index';
const App = () => {
  return (
    <Provider store={store}>
      <MyStack/>
    </Provider>

  );
};

export default App;
