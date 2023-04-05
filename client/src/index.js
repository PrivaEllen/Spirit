import React, { createContext } from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import TestStore from './store/TestStore';
import UserStore from './store/UserStore';

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
      user: new UserStore(),
      test: new TestStore()
    }}>
      <App />
    </Context.Provider>,
    document.getElementById('root')
);
