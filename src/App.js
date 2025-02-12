import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {loadProvider} from "./store/interactions";
import {loadNetwork} from "./store/interactions";
import {Navbar} from "./components";
function App() {
  const dispatch = useDispatch();
  const loadBlockchainData = async()=>{
    const provider = loadProvider(dispatch);
    const chainId = await loadNetwork(provider, dispatch);

  };

  useEffect(()=>{
    loadBlockchainData();
  });
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
