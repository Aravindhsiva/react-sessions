import logo from './logo.svg';
import './App.css';
import React, { Fragment, useState } from 'react';

// import LifeCycleComp from './screens/lifeCycle/lifecycle';
// import ProductScreen from './screens/lifeCycle/response-transform';
import PropsExample from './screens/props/props';
import BodyWrapper from './screens/props/body';
import HomeScreen from './screens/props/homeScreen';
import DashBoard from './screens/props/dashboardScreen';

const App =  () =>{
  const [toggle, setToggle] = useState(false);
  return <Fragment>
    <BodyWrapper >
      {toggle ? <DashBoard /> : <HomeScreen />}
    </BodyWrapper>
    <br/>
    <br/>
    <br/>
    <br/>
    <button className='btn btn-primary' onClick={e => { setToggle(!toggle) }}>Toggle</button>
  </Fragment>
}

export default App;
