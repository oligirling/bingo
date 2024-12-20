import { useState, useEffect } from 'react';
import { phraseSets } from './data/phrases';
import './App.css';

function App() {
  const [number, setNumber] = useState('');
  const [phrase, setPhrase] = useState('');
  const [selectedSet, setSelectedSet] = useState('standard');
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    if (number) {
      const currentPhrase = phraseSets[selectedSet].phrases[number];
      setPhrase(currentPhrase || 'No phrase found');
    } else {
      setPhrase('');
    }
  }, [number, selectedSet]);

  return (
    <div className="app">
      <header>
        <button 
          className="settings-button"
          onClick={() => setShowSettings(!showSettings)}
        >
          ⚙️
        </button>
      </header>

      <main>
        <h1>Bingo Caller</h1>
        
        {phrase && (
          <div className="phrase">
            <span className="number">{number}</span>
            <span className="text">{phrase}</span>
          </div>
        )}

        <input
          type="number"
          pattern="[0-9]*"
          inputMode="numeric"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter number"
          autoFocus
        />
      </main>

      {showSettings && (
        <div className="settings-modal">
          <h2>Select Phrase Set</h2>
          <select 
            value={selectedSet}
            onChange={(e) => setSelectedSet(e.target.value)}
          >
            {Object.entries(phraseSets).map(([key, set]) => (
              <option key={key} value={key}>
                {set.name}
              </option>
            ))}
          </select>
          <button onClick={() => setShowSettings(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default App;