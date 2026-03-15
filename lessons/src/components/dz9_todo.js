import { useEffect, useState } from 'react';
import { GetList } from '../api/api';
import axios from 'axios';
const Dz9_todo = () => {
  const getFun = async () => {
    if (inputList.name && inputList.desription) {
      try {
        setRequestLoading(true);

        const newTodo = {
          tittle: inputList.name,
          desription: inputList.desription,
          checked: inputList.checked,
          creactionDate: new Date().toLocaleDateString('ua-UA'),
        };
        const response = await axios.post('todos', newTodo);
        setButtonsCl(false);
        setTodos(prev => [...prev, response.data]);
        setInputList({
          name: '',
          desription: '',
          checked: false,
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setRequestLoading(false);
      }
    }
  };
  const deleteFun = async id => {
    try {
      setRequestLoading(true);
      await axios.delete(`todos/${id}`);
      setTodos(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      setError(error.message);
    } finally {
      setRequestLoading(false);
    }
  };
  const editFun = async id => {
    try {
      setRequestLoading(true);
      const response = await axios.get(`todos/${id}`);
      setEditTodo(response.data);
      setEditOpen(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setRequestLoading(false);
    }
  };
  const saveEdit = async () => {
    try {
      setRequestLoading(true);
      const response = await axios.put(`todos/${editTodo.id}`, editTodo);
      setTodos(prev =>
        prev.map(item => (item.id === editTodo.id ? response.data : item)),
      );
      setEditOpen(false);
    } catch (error) {
      setError(error.message);
    } finally {
      setRequestLoading(false);
    }
  };
  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await GetList();
      setTodos(data);
    } catch (error) {
      console.warn('Ops! ', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [buttonCl, setButtonsCl] = useState(false);
  const [error, setError] = useState(null);
  const [inputList, setInputList] = useState({
    name: '',
    desription: '',
    checked: false,
  });
  const [editTodo, setEditTodo] = useState(null);
  const [editOpen, setEditOpen] = useState(false);
  const [requestLoading, setRequestLoading] = useState(false);
  if (error) {
    return <div style={{ color: 'red' }}>Відбулася помилка: {error}</div>;
  }
  return (
    <>
      {requestLoading && <h2>Loading...</h2>}
      <ul>
        <button className='button-37' onClick={() => setButtonsCl(true)}>
          Add TO DO
        </button>
        {buttonCl && (
          <div className='input-list'>
            <label htmlFor='name'>Ім'я</label>
            <input
              onChange={e => {
                setInputList(prev => ({
                  ...prev,
                  name: e.target.value,
                }));
              }}
              type='text'
              name='name'
              id='name'
              value={inputList.name}
            />
            <label htmlFor='desription'>Опис</label>
            <input
              onChange={e => {
                setInputList(prev => ({
                  ...prev,
                  desription: e.target.value,
                }));
              }}
              type='text'
              name='desription'
              id='desription'
              value={inputList.desription}
            />
            <label htmlFor='checked'>Виконаний?</label>
            <input
              onChange={e => {
                setInputList(prev => ({
                  ...prev,
                  checked: e.target.checked,
                }));
              }}
              type='checkbox'
              name='checked'
              id='checked'
              checked={inputList.checked}
            />
            <button onClick={getFun} type='button' className='button-37'>
              Добавити запит
            </button>
          </div>
        )}
        {editOpen && editTodo && (
          <div className='input-list'>
            <h3>Редагувати Todo</h3>

            <label>Ім'я</label>
            <input
              type='text'
              value={editTodo.tittle}
              onChange={e =>
                setEditTodo(prev => ({
                  ...prev,
                  tittle: e.target.value,
                }))
              }
            />

            <label>Опис</label>
            <input
              type='text'
              value={editTodo.desription}
              onChange={e =>
                setEditTodo(prev => ({
                  ...prev,
                  desription: e.target.value,
                }))
              }
            />

            <label>Виконаний?</label>
            <input
              type='checkbox'
              checked={editTodo.checked}
              onChange={e =>
                setEditTodo(prev => ({
                  ...prev,
                  checked: e.target.checked,
                }))
              }
            />

            <button onClick={saveEdit} className='button-37'>
              Зберегти
            </button>
            <button onClick={() => setEditOpen(false)} className='button-24'>
              Скасувати
            </button>
          </div>
        )}
        {loading ? (
          <h1>Loading todos...</h1>
        ) : todos.length === 0 ? (
          <h1>Наразі у вас немає ще завдань</h1>
        ) : (
          todos.map(todo => (
            <div className='list-item' key={todo.id}>
              <li>
                {todo.id} - {todo.tittle}
              </li>
              <p>{todo.desription}</p>
              <label style={{ fontSize: 12 }} htmlFor='cheacked'>
                Чи виконаний?
              </label>
              <input name='cheacked' type='checkbox' checked={todo.checked} />
              <button onClick={() => deleteFun(todo.id)} className='button-24'>
                Видалити
              </button>
              <button onClick={() => editFun(todo.id)} className='button-24'>
                Редагувати
              </button>
            </div>
          ))
        )}
      </ul>
    </>
  );
};

export default Dz9_todo;
