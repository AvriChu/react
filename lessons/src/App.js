import { use, useState } from 'react';
import './App.css';
import Fun2 from './components/dz1_class';
import Fun1 from './components/dz1_function';
import ItemsFunct from './components/dz2_items';

function App() {
  // ДЗ 1

  // const [value, SetValue] = useState(true);
  // const changeValue = () => {
  //   SetValue(false);
  // };
  // return (
  //   <div className='App'>
  //     <header className='App-header'>
  //       {value && (
  //         <button class='button-37' onClick={changeValue}>
  //           Натисни на мене для Доброї кінцівки!
  //         </button>
  //       )}
  //       {value ? <Fun1 /> : <Fun2 />}
  //     </header>
  //   </div>
  // );

  // ДЗ 2
  const [input, setInput] = useState('');
  const [item, setItem] = useState([]);
  const clickHandler = input => {
    if (!input || input.trim().length === 0) {
      return;
    }
    const updateElement = [...item, input];
    setItem(updateElement);
    setInput('');
  };
  const changeHandler = e => {
    const value = e.target.value;
    setInput(value);
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <input className='input' onChange={changeHandler} value={input} />
        <h1>{item.length}</h1>
        <ul>
          {item.map((element, index) => (
            <ItemsFunct element={element} index={index} />
          ))}
        </ul>
        <button className='button-37' onClick={() => clickHandler(input)}>
          Add TO DO
        </button>
      </header>
    </div>
  );
}

export default App;
