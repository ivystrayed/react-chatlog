import React from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Heard it Through The Ivy Vine</h1>
      </header>
      <main>
          <ChatLog entries={chatMessages}></ChatLog>
      </main>
    </div>
  );
};

export default App;
