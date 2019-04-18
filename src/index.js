import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Container from './Components/Container'

// const NameContext = React.createContext();

const App = () => {
  return (
    // <NameContext.Provider value={'Galina'}>
    //   <div className="App">
    //     <NameContext.Consumer>
    //       {value => <h1>Hello! My Name is {value}!</h1>}
    //     </NameContext.Consumer>
    //   </div>
	// </NameContext.Provider>
	<Container />
  )
}
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
