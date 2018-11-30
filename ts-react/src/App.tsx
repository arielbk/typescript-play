import * as React from 'react';
import Form from './Form';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Form text="hello" age={27} />
      </div>
    );
  }
}

export default App;
