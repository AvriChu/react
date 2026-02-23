const MasuvList = props => {
  return (
    <div>
      <p>
        {props.id} - {props.name}
      </p>
      <button onClick={() => props.deleteObj(props.id)} type='button'>
        Видалити
      </button>
    </div>
  );
};
export default MasuvList;
