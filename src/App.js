import React, { Component } from 'react';
import './App.css';
import { Sidebar } from "./container/Sidebar"
import { MessageList } from "./container/MessagesList"
import { AddMessage } from "./container/AddMessage"

class App extends Component {
  render() {
    return (
      <div id="container">
        <Sidebar/>
        <section id="main">
          <MessageList/>
          <AddMessage/>
        </section>
      </div>
    );
  }
}

export default App;
