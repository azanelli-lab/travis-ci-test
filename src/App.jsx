import React from 'react';
import List from './List';
import './App.css';

class App extends React.Component {
  render() {
    const items = [
      { id: 1, label: 'Item 1' },
      { id: 2, label: 'Item 2' },
      { id: 3, label: 'Item 3' },
    ];

    return (
      <div className="app">
        <header className="app__header">
          <h1 className="app__title">Welcome</h1>
        </header>
        <div className="app__intro">
          <List items={items} />
        </div>
      </div>
    );
  }
}

export default App;
