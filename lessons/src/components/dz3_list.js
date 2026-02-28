const MasuvList = props => {
  return (
    <div>
      <li>
        {props.id} - {props.name}
      </li>
      <button onClick={() => props.deleteObj(props.id)} type='button'>
        Видалити
      </button>
    </div>
  );
};
export default MasuvList;
