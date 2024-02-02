import { useState } from 'react';
import './App.css';
import useStorage from './Hooks/useStorage';

function App() {
  const cssStyling = {
    width:'50%',
    height:'40px',
    padding:"5px 8px", 
    fontSize:"20px"
  };

  const [storedValue, setStorage] = useStorage("storagekey", "");
  const [userInput, setUserInput] = useState(storedValue);

  const handleChange = (e) => {
    setUserInput(e.target.value);
    setStorage(e.target.value);
  };

  return (
    <>
      <h1>Learning Custom Hooks</h1>
      <input
        type="text"
        placeholder="What on your mind? 🤔 "
        style={cssStyling}
        value={userInput}
        onChange={handleChange}
        />
    </>
  );
}

export default App;