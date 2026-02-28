import { Component, use, useState } from 'react';
import './App.css';
import Fun2 from './components/dz1_class';
import Fun1 from './components/dz1_function';
import ItemsFunct from './components/dz2_items';
import MasuvList from './components/dz3_list';
import ComponentClass from './components/dz4_classComponent';

// function App() {
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
//ДЗ 2
// const [input, setInput] = useState('');
// const [item, setItem] = useState([]);
// const clickHandler = input => {
//   if (!input || input.trim().length === 0) {
//     return;
//   }
//   const updateElement = [...item, input];
//   setItem(updateElement);
//   setInput('');
// };
// const changeHandler = e => {
//   const value = e.target.value;
//   setInput(value);
// };
// const onKeyFunk = e => {
//   if (e.key === 'Enter') {
//     const updateElement = [...item, input];
//     setItem(updateElement);
//     setInput('');
//   }
// };
// return (
//   <div className='App'>
//     <header className='App-header'>
//       <input
//         onKeyDown={onKeyFunk}
//         className='input'
//         onChange={changeHandler}
//         value={input}
//       />
//       <h1>{item.length}</h1>
//       <ul>
//         {item.map((element, index) => (
//           <ItemsFunct key={index} element={element} index={index} />
//         ))}
//       </ul>
//       <button className='button-37' onClick={() => clickHandler(input)}>
//         Add TO DO
//       </button>
//     </header>
//   </div>
// );
// ДЗ 3
//   const [input, setInput] = useState('');
//   const [item, setItem] = useState([
//     { id: 1, name: 'name1' },
//     { id: 2, name: 'name2' },
//     { id: 3, name: 'name3' },
//   ]);
//   const [newId, setNewId] = useState(item.length + 1);
//   const deleteObj = id => {
//     setItem(prev => prev.filter(item => item.id !== id));
//   };
//   const clickHandler = input => {
//     if (!input || input.trim().length === 0) {
//       return;
//     }
//     setNewId(newId + 1);
//     const updateElement = [...item, { id: newId, name: input }];
//     setItem(updateElement);
//     setInput('');
//   };
//   const changeHandler = e => {
//     const value = e.target.value;
//     setInput(value);
//   };
//   const onKeyFunk = e => {
//     if (e.key === 'Enter') {
//       if (!input || input.trim().length === 0) {
//         return;
//       }
//       setNewId(newId + 1);
//       const updateElement = [...item, { id: newId, name: input }];
//       setItem(updateElement);
//       setInput('');
//     }
//   };

//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <input
//           onKeyDown={onKeyFunk}
//           className='input'
//           onChange={changeHandler}
//           value={input}
//         />
//         <h1>{item.length}</h1>
//         <ul>
//           {item.map(item1 => (
//             <MasuvList
//               key={item1.id}
//               id={item1.id}
//               name={item1.name}
//               deleteObj={deleteObj}
//             />
//           ))}
//         </ul>
//         <button className='button-37' onClick={() => clickHandler(input)}>
//           Add TO DO{' '}
//         </button>
//       </header>
//     </div>
//   );
// }
// ДЗ 4
function App() {
  return (
    <>
      <ComponentClass />
    </>
  );
}

export default App;
