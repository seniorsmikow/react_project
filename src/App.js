import React from 'react';
import classes from './App.module.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

function App(props) {
  
  return (
    
    <div className={classes.App}>
      <Header />
      <Main state={props.state} dispatch={props.dispatch} />
    </div>
    
  );
}

export default App;
