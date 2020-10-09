import React from 'react';
import './App.css';
import CakeContainer from './component/CakeContainer';
import { Provider } from 'react-redux'
import { store } from './redux/Store';
import HookCakeContainer from './component/HookCakeContainer';
import IceCreamContainer from './component/IceCreamContainer';
import HookIceCreamContainer from './component/HookIceCreamContainer';
import ItemContainer from './component/ItemContainer';
import UserContatiner from './component/UserContatiner';

function App() {
  return (
    <Provider store={store}>
       <div className="App">
         {/* <ItemContainer cake/>
         <ItemContainer/>
      <HookCakeContainer/>
      <CakeContainer/>
      <IceCreamContainer/>
      <HookIceCreamContainer/> */}
      <UserContatiner/>
      </div>
    </Provider>
   
  );
}

export default App;
