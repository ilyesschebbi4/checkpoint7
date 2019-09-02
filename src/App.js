import React from 'react';
import logo from './logo.svg';
import './App.css';

  
  class App extends React.Component {
    componentDidMount(){
      
      setTimeout(() => {
        alert('Hello')
      }, 1000);
    }
    componentWillUnmount(){
    
      setTimeout(() => {
        alert('Good Bye')
      }, 1000);
    }
    
    
      render (){
        return (
<p></p>
);
}
}

export default App;
