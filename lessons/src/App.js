import { useState } from 'react';
import './App.css';
import Fun2 from './components/dz1_class';
import Fun1 from './components/dz1_function';

function App() {
  const [value, SetValue] = useState(true);
  const changeValue = () => {
    SetValue(false);
  };
  return (
    <div className='App'>
      <header className='App-header'>
        {value && (
          <button class='button-37' onClick={changeValue}>
            Натисни на мене для Доброї кінцівки!
          </button>
        )}
        {value ? <Fun1 /> : <Fun2 />}
      </header>
    </div>
  );
}

export default App;
